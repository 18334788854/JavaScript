let template = 'My skills:' +
    '<%if(this.showData){%>' +
    '<%for(var index in this.skills) {%>' +
    '<a href=""><%this.skills[index]%></a>' +
    '<%}%>' +
    '<%}else{%>' +
    '<p>none</p>' +
    '<%}%>';

let templateEngine = function (tpl, data) {
    let re = /<%([^%>]+)?%>/g,
        reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
        code = "let r = [];\n",
        cursor = 0,
        match;
    let add = (line, js) => {
        js ? line.match(reExp) ? code += line + "\n" : code += 'r.push(' + line + ');\n'
            : code += 'r.push("' + line.replace(/"/g, '\\"') + '");\n';
    };
    while (match = re.exec(tpl)) {
        add(tpl.slice(cursor, match.index));
        add(match[1], true);
        cursor = match.index + match[0].length;
    }
    add(tpl.slice(cursor));
    code += "return r.join('')";
    return new Function(code.replace(/[\r\n\t]/g, "")).apply(data);
};

console.log(templateEngine(template, {
    skills: ["js", "css", "html5"],
    showData: true
}));

module.exports = templateEngine;


