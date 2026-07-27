console.log("Method forEach()");

// Syntax
// array.forEach(function(currentValue) {
    // Code to execute
// });
// array.forEach(function(currentValue, index, array) {
//     // Code to execute
// });

let arr = [1, 2, 3]

arr.forEach(function(num) {
    console.log(num)
})

arr.forEach(function(num, index) {
    console.log(num, index)
})

arr.forEach(function(num, ind, array) {
    console.log(num, ind, array)
})

let arr1 = ["Rajesh", "Ganesh", "Rajnish"];
arr1.forEach((name)=>{
    console.log(name);
})

arr.forEach((num, ind)=>{
    console.log(num+ind);
    
})

const arr2 = [1, 2, 3];

arr2.forEach(function (num, index) {
    console.log(index, num);

    if (index === 0) {
        arr2[1] = 100;
    }
});

const arr3 = [1, 2, 3, 4];

arr3.forEach(function (num, index) {
    if (num === 2) {
        arr3.splice(index, 1);
    }

    console.log(num);
});

console.log(arr3);

const arr4 = [1, 2, 3, 4];

arr4.forEach(function (num, index) {
    if (num === 2) {
        arr4.splice(index, 1);
    }

    console.log(num);
});

console.log(arr4);

