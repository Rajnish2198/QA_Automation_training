"use strict";

/*
===========================================
Assignment 2 : Asynchronous Execution

Scenario:
Fetch Order Details from Server

Concepts:
✔ async
✔ await
✔ Promise
✔ setTimeout()
===========================================
*/

// Dummy API
function fetchOrder() {

    return new Promise((resolve) => {

        console.log("Fetching Order From Server...\n");

        setTimeout(() => {

            resolve({
                orderId: 101,
                customer: "Rashmi",
                amount: 2500
            });

        }, 3000);

    });

}

// Apply Discount
function applyDiscount(amount) {

    if (amount >= 2000) {
        return amount * 0.90;
    }

    return amount;

}

// Main Function
async function processOrder() {

    console.log("===== Order Processing Started =====\n");

    const order = await fetchOrder();

    console.log("Order Received");

    console.table(order);

    const finalAmount = applyDiscount(order.amount);

    console.log(`Final Amount : ₹${finalAmount}`);

    console.log("\n===== Order Processing Completed =====");

}

processOrder();