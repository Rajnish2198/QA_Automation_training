console.log("A program on Synchronus and Asynchronus ");

// Syntax of setTimeout
// setTimeout(function () {
//     // Code to execute
// }, delayInMilliseconds);

// Synchronus

console.log("Start");
console.log("Run");
console.log("End");

// One line after the other

// Aynchronus

console.log("A");
setTimeout(() => {
console.log("B");
}, 1000);
console.log("C");

// line 19 waits for 1000 ms to 
// execute and line 22 executes instantly

// setInterval()
// Runs a function repeatedly after every specified interval.

let Interval = setInterval(() => {
console.log("Interval");
}, 5000);

clearInterval(Interval);

// Does not print Interval due to clearInterval.

// Call Stack
// -------------------------
// console.log("A")   ✅
// setTimeout(...)    ✅ Register timer
// console.log("C")   ✅

//            ↓

// Web API
// -------------------------
// 1 second timer

//            ↓

// Callback Queue
// -------------------------
// console.log("B")

//            ↓

// Event Loop

//            ↓

// Call Stack
// -------------------------
// console.log("B")







