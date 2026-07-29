"use strict";
// Object 1 following Order interface
const pizzaOrder = {
    orderId: 101,
    customerName: "Rashmi",
    itemName: "Cheese Burst Pizza",
    price: 299,
    status: "Preparing",
    deliver() {
        console.log(`${this.itemName} has been delivered to ${this.customerName}`);
    }
};
// Object 2 following Order interface
const burgerOrder = {
    orderId: 102,
    customerName: "Rahul",
    itemName: "Veg Burger",
    price: 149,
    status: "Out for delivery",
    deliver() {
        console.log(`${this.itemName} has been delivered to ${this.customerName}`);
    }
};
// Function accepting any Order
function processOrder(order) {
    console.log("Order ID:", order.orderId);
    console.log("Customer:", order.customerName);
    console.log("Item:", order.itemName);
    console.log("Price: £" + order.price);
    console.log("Status:", order.status);
    order.deliver();
    console.log("----------------------");
}
// Calling function
processOrder(pizzaOrder);
processOrder(burgerOrder);
