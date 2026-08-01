function first() {
    return new Promise((resolve) => {
        resolve("Step 1");
    });
}

function second() {
    return new Promise((resolve) => {
        resolve("Step 2");
    });
}

async function test() {
    const a = await first();
    console.log(a);
    const b = await second();
    console.log(b);
}

test();