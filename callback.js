"use strict";

/*
===========================================
Assignment 3 : Callback Function
Login → Get Profile → Get Orders
===========================================
*/

// Login Function
function login(callback) {

    console.log("Logging in...");

    setTimeout(() => {

        console.log("Login Successful");

        callback();

    }, 2000);

}

// Get Profile Function
function getProfile(callback) {

    console.log("Fetching Profile...");

    setTimeout(() => {

        console.log("Profile Loaded");

        callback();

    }, 3000);

}

// Get Orders Function
function getOrders() {

    console.log("Fetching Orders...");

    setTimeout(() => {

        console.log("Orders Loaded");

    }, 4000);

}

// Function Calls using Callback
login(function () {

    getProfile(function () {

        getOrders();

    });

});