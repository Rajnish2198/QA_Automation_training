 // 3. Create a callback example using "login()", "getProfile()", and "getOrders()".
 function login(callback){
    console.log("Login Successful");
    callback();
 }

 function getProfile(callback){
    console.log("Profile Fetched");
    callback();
}
 function getOrder()
{
    console.log("Order fetched");
}

login(function() {
    getProfile(function() {
        getOrder();

    });

});
