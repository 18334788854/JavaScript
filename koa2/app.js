"use strict";
require("babel-core/register")(
    {
        presets: ['es2015-node5', 'stage-3']
    }
);
require("babel-polyfill");

const router = require("koa-router")();
const bodyparser = require("koa-bodyparser");
const koa2 = require("koa");
const nunjucks = require('nunjucks');

function createEnv(path, opts) {
    var
        autoescape = opts.autoescape === undefined ? true : opts.autoescape,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader(path, {
                noCache: noCache,
                watch: watch,
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

var env = createEnv('views', {
    watch: true,
    filters: {
        hex: function (n) {
            return '0x' + n.toString(16);
        }
    }
});
var s = env.render("hello.html",{name:"邢健"});
console.log(s);


var app = new koa2();
app.use(bodyparser());
app.use(require("./controller")());

app.listen(3000);
