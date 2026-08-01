function wait () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });
}

async function test() {
    console.log("Start");
    await wait();
    console.log("Done");
}

test();

async function test1() {
    console.log("Hello");
}
test1();