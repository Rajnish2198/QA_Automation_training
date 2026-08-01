function getData() {
    return new Promise((resolve) => {
        resolve(100);
    });
}

async function test() {
    console.log("Start");
    const data = await getData();
    console.log(data);
    console.log("End");
}

test();