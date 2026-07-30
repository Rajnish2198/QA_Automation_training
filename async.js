// Function that returns a Promise
function orderFood() {
    return new Promise((resolve) => {

        console.log("Preparing your food...");

        setTimeout(() => {
            resolve("Food is ready!");
        }, 3000);

    });
}

// Async function
async function restaurant() {

    console.log("Customer entered the restaurant.");

    const food = await orderFood();

    console.log(food);

    console.log("Customer started eating.");
}

// Function Call
restaurant();