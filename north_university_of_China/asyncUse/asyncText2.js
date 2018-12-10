async function f1() {
    try {
        await Promise.reject("出错了1");
    } catch (e) {
        console.log(e);
    }
    return await Promise.resolve("xing jian1");
}

f1().then(v => console.log(v));

async function f2() {
    await Promise.reject("出错了2").catch(e => console.log(e));
    return await Promise.resolve("xing jian2");
}

f2().then(v => console.log(v));