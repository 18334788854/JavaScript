"use strict";

var app = require("../app"),
    request = require("supertest");

describe("#test koa app", () => {
    let server = app.listen(9000);
    describe("#test server", () => {
        it('#test GET /', async () => {
            let res = await request(server)
                .get('/')
                .expect('Content-Type', /text\/html/)
                .expect(200, '<h1>Hello, world!</h1>');
            console.log(res.body);
        });

        it('#test GET /path?name=Bob', async () => {
            let res = await request(server)
                .get('/path?name=Bob')
                .expect('Content-Type', /text\/html/)
                .expect(200, '<h1>Hello, Bob!</h1>');
            console.log(res.body);
        });
    });
});