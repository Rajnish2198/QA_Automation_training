"use strict";

/*
===========================================
Assignment 1 : Synchronous Execution
Online Order Processing
Every function waits for the previous
function to complete.
===========================================
*/

// Order Object
const order = {
    orderId: 101,
    customer: "Rashmi",
    amount: 2500
};

// Validate Order
function validateOrder(order) {

    console.log("Validating Order...");

    return order.amount > 0;

}

// Apply Discount
function applyDiscount(amount) {

    console.log("Applying Discount...");

    if (amount >= 2000) {
        return amount * 0.90;      // 10% Discount
    }

    return amount;

}

// Generate Invoice
function generateInvoice(order, finalAmount) {

    console.log("Generating Invoice...");

    console.table({
        Customer: order.customer,
        OrderId: order.orderId,
        PayableAmount: finalAmount
    });

}

// Main Function
function processOrder() {

    console.log("===== Order Processing Started =====\n");

    const isValid = validateOrder(order);

    if (!isValid) {

        console.log("Invalid Order");
        return;

    }

    const finalAmount = applyDiscount(order.amount);

    generateInvoice(order, finalAmount);

    console.log("\n===== Order Processing Completed =====");

}

processOrder();