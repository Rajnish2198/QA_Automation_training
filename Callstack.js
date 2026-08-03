function a() {
    return new Promise((resolve) => {
        resolve("Hi");
    });
}

function b() {
    return new Promise((resolve) => {
        resolve("I'm Chander");
    });
}

function f() {
    console.log("Prakash");
}

async function c() {
    const d = await a();
    console.log(d);
    const e = await b();
    console.log(e);
    f();
}

c();