function login() {
    return new Promise((resolve,reject) => {
        reject("LoginFailed");
    });
}

login()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });