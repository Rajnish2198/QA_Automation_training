function login() {
    return new Promise((resolve) => {
        resolve("Login Successful");
    });
}

async function test() {
    console.log("Start");

    const result = await login();

    console.log(result);

    console.log("End");
}

test();