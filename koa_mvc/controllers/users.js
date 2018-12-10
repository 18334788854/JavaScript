module.exports = {
    "GET /hello/:name": async (ctx, next) => {
        ctx.render("index.html", {
            title: `welcome,${ctx.params.name}`
        })
    }
};