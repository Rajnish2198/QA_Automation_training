function message() {
    return new Promise((resolve) => {
        resolve("Hello");
    });
}

message().then((result) => {
    console.log(result);
});