const assert = require('assert');

const hello = require('../hello');

describe("#hello.js", () => {
    it('#async function', async () => {
        let r = await hello();
        assert.strictEqual(r(1, 2, 3, 4, 5), 15);
    });
});