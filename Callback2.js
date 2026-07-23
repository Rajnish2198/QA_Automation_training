function login(callback){
    console.log("Login");
    callback()
}

function dashboard(){
    console.log("Viewing Dashboard");
    
}

login(dashboard)
console.log(".............................")

function login2(callback){
    console.log("Login");
    callback
}

function dashboard2(){
    console.log("Viewing Dashboard");
    
}

login2(dashboard2())