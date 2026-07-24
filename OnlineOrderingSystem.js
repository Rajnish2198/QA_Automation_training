"use strict";
// ==========================================
// Online Ordering Process
// Concepts:
// public
// private
// protected
// readonly
// static
// inheritance
// abstract
// ==========================================
class Order {
    // Public
    customerName;
    // Private
    orderAmount;
    // Protected
    orderStatus;
    // Readonly
    orderId;
    // Static
    static totalOrders = 0;
    constructor(customerName, orderAmount, orderStatus, orderId) {
        this.customerName = customerName;
        this.orderAmount = orderAmount;
        this.orderStatus = orderStatus;
        this.orderId = orderId;
        Order.totalOrders++;
    }
    // Public Function
    showCustomer() {
        console.log(`Customer : ${this.customerName}`);
    }
    // Private Function
    calculateGST() {
        let gst = this.orderAmount * 0.18;
        return gst;
    }
    // Public Function
    generateBill() {
        let gst = this.calculateGST();
        let total = this.orderAmount + gst;
        console.log("\n------ BILL ------");
        console.log("Order Amount :", this.orderAmount);
        console.log("GST (18%) :", gst);
        console.log("Total Bill :", total);
    }
    // Protected Function
    updateStatus(status) {
        this.orderStatus = status;
        console.log("Order Status Updated :", this.orderStatus);
    }
    // Static Function
    static displayTotalOrders() {
        console.log("\nTotal Orders Created :", Order.totalOrders);
    }
}
// ==========================================
// Child Class
// ==========================================
class OnlineOrder extends Order {
    constructor(customerName, orderAmount, orderStatus, orderId) {
        super(customerName, orderAmount, orderStatus, orderId);
    }
    // Abstract Method Implementation
    payment() {
        console.log("\nProcessing Payment...");
        this.updateStatus("Payment Successful");
    }
    // Child Function
    dispatchOrder() {
        console.log("\nChecking Dispatch Eligibility...");
        if (this.orderStatus === "Payment Successful") {
            this.updateStatus("Dispatched");
        }
        else {
            console.log("Payment Pending. Cannot Dispatch.");
        }
    }
}
// ==========================================
// Object
// ==========================================
const order1 = new OnlineOrder("Rashmi", 2500, "Pending", 101);
// Public
order1.showCustomer();
// Readonly
console.log("Order ID :", order1.orderId);
// Generate Bill
order1.generateBill();
// Payment
order1.payment();
// Dispatch
order1.dispatchOrder();
// Static
Order.displayTotalOrders();
// ===============================
// Not Accessible
// ===============================
// order1.calculateGST();      // ❌ Private
// order1.updateStatus();      // ❌ Protected
// order1.orderAmount;         // ❌ Private
// order1.orderStatus;         // ❌ Protected
// order1.orderId = 500;       // ❌ Readonly
