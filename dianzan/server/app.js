const Koa = require("koa");
const url = require("url");
const request = require("request");
const https = require("https");
const appConfig = require("./../appConfig.js");
const session = require("koa-session");
const Store = require("./db/mysql-db");
const static = require("koa-static");
const path = require("path");
const logger = require("koa-logger");

const CONFIG = {
    key: 'sessionID',
    maxAge: 86400000 * 30,
    store: new Store(appConfig.database),
};
const app = new Koa();
app.keys = ['some secret hurr'];
app.use(logger());
app.use(static(path.join(__dirname, "../static")));
app.use(session(CONFIG, app));
app.use(async (ctx) => {
    const path = url.parse(ctx.url).pathname;
    if (path == "/getAll" && ctx.method == "GET") {
        let data = await CONFIG.store.getAll();
        ctx.body = data;
    }
    if (path == "/getNum" && ctx.method == "GET") {
        let query = ctx.request.query,
            b_openid = "b_openid";
        let existNum = await CONFIG.store.getNum(query[b_openid]);
        console.log(existNum);
        if (existNum.num) {
            ctx.body = existNum.num;
        } else {
            ctx.body = 0;
        }
    }
    if (path == "/auth" && ctx.method == "GET") {
        // console.log(ctx.url, ctx.method);
        let query = ctx.request.query,
            code = "code",
            b_openid = "b_openid";
        // console.log(query);
        if (query[code]) {
            let openID = "alibaba5",
                session = ctx.session,
                existID = await CONFIG.store.getId(openID + "&" + query[b_openid]);
            // console.log("session : ", session, Object.prototype.toString.call(session));
            // ctx.body = session;
            if (existID) {
                if (existID.number > 0 && existID.number < 5) {
                    console.log("update");
                    ctx.session.number = ++existID.number;
                    ctx.session.id = existID.id;
                    ctx.session.openid = openID;
                    ctx.session.b_openid = query["b_openid"];
                    ctx.body = "update";
                } else {
                    console.log("error");
                    ctx.body = "error";
                }
            } else {
                console.log("insert");
                ctx.session.number = 1;
                ctx.session.id = openID + "&" + query[b_openid];
                ctx.session.openid = openID;
                ctx.session.b_openid = query[b_openid];
                ctx.body = "insert";
            }
            // request.get("https://api.weixin.qq.com/sns/oauth2/access_token?" +
            //     "?appid" + appConfig.appID +
            //     "&secret" + appConfig.secret +
            //     "&code" + query[code] +
            //     "&grant_type=authorization_code",
            //     function (err,response,body) {
            //         console.log(response.statusCode);
            //         console.log(body);
            //     })
        }
    }
});
// const Router = require("koa-router");
// let home = new Router();
//
// home.get('/auth', async(ctx, next) => {
//     let query = ctx.request.query;
//     let code = "code";
//     console.log(query);
//     if (query[code]){
//         request.get("https://api.weixin.qq.com/sns/oauth2/access_token?"+
//         "?appid"+appConfig.appID+
//         "&secret"+appConfig.secret+
//         "&code"+query[code]+
//         "&grant_type=authorization_code",
//             function(error,res,body){
//             console.log(res.statusCode);
//             console.log(body);
//             })
//     }
//  });
//
// // 装载所有子路由
// let router = new Router();
// router.use('/', home.routes(), home.allowedMethods());
//
// // 加载路由中间件
// app.use(home.routes()).use(router.allowedMethods());

app.listen(8080, () => {
    console.log("listen the port 8080!");
});
