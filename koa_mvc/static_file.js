const fs = require("mz/fs");
const path = require("path");
const mime = require("mime");

function staticFiles(url, dir) {
    return async (ctx, next) => {
        let rpath = ctx.request.path;
        if (rpath.startsWith(url)) {
            let filepath = path.join(dir, rpath.substring(url.length));
            if (await fs.exists(filepath)) {
                ctx.response.type = mime.lookup(rpath);
                // 读取文件内容并赋值给response.body:
                ctx.response.body = await fs.readFile(filepath);
            } else {
                // 文件不存在:
                ctx.response.status = 404;
            }
        } else {
            // 不是指定前缀的URL，继续处理下一个middleware:
            await next();
        }
    }
}

module.exports = staticFiles;