function getName() {
    return new Promise((resolve) => {
        resolve("Chander");
    });
}

async function test() {
    const name = await getName();
    console.log("Hello ", name);
}

test();