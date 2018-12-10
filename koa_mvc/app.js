"use strict";

const router = require("koa-router")();
const koa2 = require("koa");
const staticfiles = require("./static_file");
const bodyparser = require("koa-bodyparser");
const templating = require("./templating");
const isProduction = process.env.NODE_ENV === 'production';
var app = new koa2();
//第一个插件 记录URL及时间
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});
//第二个插件 处理静态文件
app.use(staticfiles("/static/", __dirname + "/static"));
//第三个插件 处理POST请求
app.use(bodyparser());
//第四个插件 处理ctx。render
app.use(templating("views", {
    noCache: !isProduction,
    watch: !isProduction
}));
//第五个插件出来router
app.use(require("./controller")());

app.listen(3000);
