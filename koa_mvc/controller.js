var fs = require("fs");
var path = require("path");
function addMapping(router, mapping) {
        for(let url in mapping){
            if(url.startsWith("GET")){
                let path =url.substring(4);
                router.get(path,mapping[url]);
                console.log(`register URL mapping: GET ${path}`);
            }else if(url.startsWith("POST")){
                let path = url.substring(5);
                router.post(path,mapping[url]);
                console.log(`register URL mapping: POST ${path}`);
            }else{
                console.log(`invalid ${url}`);
            }
        }
}

function addControllers(router, dir) {
    var files = fs.readdirSync(dir);
    var js_files = files.filter(f=>{
        return f.endsWith(".js");
    });
    for(let file of js_files){
        let mapping = require(path.join(dir,file));
        addMapping(router,mapping);
    }
}
module.exports=function (dir) {
    var controller_dir = path.join(__dirname,dir||"controllers");
    var router = require("koa-router")();
    addControllers(router,controller_dir);
    return router.routes();
};