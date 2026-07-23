console.log("A Program on Callback");

function login(callback){
    console.log("Logged in Successfully");
    callback();
    
}

function getProfile(callback){
    console.log("Profile Loaded");
    callback();
}

function placeOrder(callback){
    console.log("Order Placed");
    callback();
}

function payBill(){
    console.log("Bill Paid");
    
}

login(
    function(){
        getProfile(
            function(){
                placeOrder(payBill)
            }
        )
    }
)

// login(function(){getProfile(function(){placeOrder(payBill)})})
// login(()=>{getProfile(()=>{placeOrder(payBill)})})

login(()=>{console.log("I am being called after login function");
})







// function greet(name) {
//     console.log("Hello " + name);
// }

// function processUser(callback) {
//     callback("Raj");
// }

// processUser(greet);
