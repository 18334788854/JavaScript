module.exports={
    "GET /":async (ctx, next) => {
        ctx.render('index.html', {
            title: 'Welcome'
        });
    },
    "POST /signin":async (ctx, next) => {
        var
            email = ctx.request.body.email || '',
            password = ctx.request.body.password || '';
        //mysql查询，判断是否成功!
        var users = require("../model").users;
        var user = await users.findAll({
            where:{
                username:email
            }
        });
        for(var uu of user){
            console.log(uu.username+":"+uu.password);
        }
        if (password === user[0].password) {
            // 登录成功:
            ctx.render('signin-ok.html', {
                title: 'Sign In OK',
                name: 'Mr Node'
            });
        } else {
            // 登录失败:
            ctx.render('signin-failed.html', {
                title: 'Sign In Failed'
            });
        }
    }
};