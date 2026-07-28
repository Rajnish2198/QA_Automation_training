let User = {
    Username: "Chander",
    Password: "Chan1234",
};

console.log(User.Username);
console.log(User.Password);
console.log(User);

User.Password = "Chan12345";
User.Role = "QA";

console.log(User);

delete User.Role;
console.log(User);

const Playwrightuser = {
    Username: "Playwright",
    Password: "Play1234"
};

console.log(Playwrightuser);

let Playwrightuser1 = {
    Username: "Playwright",
    Password: "Play1234"
};

Playwrightuser1 = {};
console.log(Playwrightuser1);
Playwrightuser1 = null;
console.log(Playwrightuser1);