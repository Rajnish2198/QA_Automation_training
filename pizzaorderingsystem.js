"use strict";
// Pizza Ordering System
// Returns a Promise with the delivery message
function orderPizza() {
    return new Promise((resolve) => {
        console.log("We are preparing the delicious pizza...");
        setTimeout(() => {
            resolve("Your cheese burst pizza has been delivered");
        }, 2000);
    });
}
// Sends a notification after delivery
function sendNotification() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Please collect your order");
            resolve();
        }, 2000);
    });
}
// Start the order process
orderPizza()
    .then((pizza) => {
    console.log(pizza);
    console.log("We are at your doorstep");
    return sendNotification();
})
    .then(() => {
    console.log("Order completed successfully");
})
    .catch((err) => {
    console.log(err);
});
