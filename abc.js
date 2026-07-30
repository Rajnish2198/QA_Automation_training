let promise = new Promise((resolve,reject)=>{
console.log("I am a promise");
// resolve("Success");
reject("Some error")
})



// // console.log("one");
// // console.log("Two");

// // setTimeout(()=>{
// //     console.log("Hello");
    
// // },2000); //Timeout

// // console.log("Three");
// // console.log("Four");

// //callback is basically a argument to another function.
// //Passing function into an function

// function sum(a,b)
// {
//     console.log(a+b);
// }

// function calculator(a,b,Sumcallback)
// {
//     Sumcallback(a,b);
// }

// calculator(1,7,sum)
