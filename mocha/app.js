"use strict";

var Koa = require("koa");
var app = new Koa();

app.use(async (ctx, next) => {
    var starttime = new Date().getTime();
    await next();
    var ms = new Date().getTime() - starttime;
    console.log(`${ctx.request.method} ${ctx.request.url}: ${ms}ms`);
    ctx.response.set('X-Response-Time', `${ms}ms`);
});

app.use(async (ctx, next) => {
    var name = ctx.request.query.name || 'world';
    ctx.response.type = 'text/html';
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

module.exports = app;