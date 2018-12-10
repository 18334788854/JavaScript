var fn_hello = async(ctx,next)=>{
    var name = ctx.params.name||"123456";
    ctx.response.body=`Welcome,${name}`;
};

module.exports={
    "GET /hello/:name":fn_hello
};