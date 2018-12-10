"use strict";

const Koa = require("koa");
const Vue = require("vue");
const render = require("vue-server-renderer").createRenderer({
    template:require("fs").readFileSync("./index.template.html","utf-8")
});
const app = new Koa();

app.use(async(ctx,next)=>{
    if(ctx.url==="/"&&ctx.method==="GET"){
        const index = new Vue({
            data:{
                url:ctx.url
            },
            template:`<div><h1>访问的URL是：{{url}}</h1><h2>{{url}}</h2></div>`
        })
        render.renderToString(index,(err,html)=>{
            if(err){
                console.log(`${err}`);
                return;
            }else{
                console.log(`${html}`)
                ctx.response.body=html;
            }
        })
    }
});
app.listen(3000,()=>{
    console.log(`listen to the port 3000`);
});