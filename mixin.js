var loggingMixin = {
    logs: [],
    log: function (message) {
        this.logs.push(message);
    },
    readLog: function () {
        return this.logs.join("\n");
    }
};
var element, header, textField, emailField;

function extendObj(obj1, obj2) {
    var obj2Key;
    for (obj2Key in obj2) {
        if (obj2.hasOwnProperty(obj2Key)) {
            obj1[obj2Key] = obj2[obj2Key];
        }
    }
    return obj1;
}
element = {
    allElements: [],
    create: function (type) {
        var elem = document.createElement(type);
        this.allElements.push(elem);
        if (typeof this.log === 'function') {
            this.log('Created an element of type: ' + type);
        }
        return elem;
    },
    getAllElements: function () {
        return this.allElements;
    }
};

function Field(type, displayText) {
    this.type = type || "";
    this.displayText = displayText || "";
    if (typeof this.log === "function") {
        this.log("Created an instance of Field.");
    }
}
Field.prototype = {
    getElement: function () {
        var field = document.createElement('input');
        field.setAttribute('type', this.type);
        field.setAttribute('placeholder', this.displayText);
        if (typeof this.log === "function") {
            this.log('Created a DOM element with placeholder text: ' + this.displayText);
        }
        return field;
    }
};

// element = extendObj(element, loggingMixin);
// Field.prototype = extendObj(Field.prototype, loggingMixin);
// header = element.create('header');
// textField = new Field('text', 'Enter the first line of your address');
// emailField = new Field('email', 'Enter your email address');
// document.body.appendChild(textField.getElement());
// document.body.appendChild(emailField.getElement());
// console.log(loggingMixin.readLog());