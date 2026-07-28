"use strict";
// Online Food Ordering System
class Order {
    orderId;
    customer;
    amount;
    constructor(orderId, customer, amount) {
        this.orderId = orderId;
        this.customer = customer;
        this.amount = amount;
    }
}
// Step 1
function placeOrder() {
    console.log("Placing Order...");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Order(101, "Rashmi", 500));
        }, 2000);
    });
}
// Step 2
function prepareFood(order) {
    console.log("Preparing Food...");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Food Prepared");
            resolve(order);
        }, 3000);
    });
}
// Step 3
function generateInvoice(order) {
    console.log("Generating Invoice...");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Invoice Generated for Order ${order.orderId}`);
            resolve();
        }, 1500);
    });
}
// Step 4
function paymentFailed() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Payment Failed"));
        }, 1000);
    });
}
// Step 5
async function processOrder() {
    try {
        const order = await placeOrder();
        await prepareFood(order);
        await generateInvoice(order);
        console.log("Order Completed Successfully");
    }
    catch (error) {
        console.log(error);
    }
}
processOrder();
