// map() is used to transform each element of an array and return a new array.
// Think of it like this:
// forEach() → Do something with each element.
// map() → Create a new array from each element.
// INDEX
// array.map((currentValue, index, array) => {
// return transformedValue;});

console.log("\nExercise 1: Double the Array Values");

const originalArray = [1,2,3,4,5]

const result = originalArray.map((num)=> {
    return num*2;
})

console.log(originalArray);
console.log(result);
// -----------------------------------------------------
console.log("\nExercise 2: Add 1 to each Value");

const result2 = originalArray.map((num) => {return num+1})
console.log("Actual Array: ")
console.log(originalArray);
console.log("Modified Array: ")
console.log(result2);

console.log("\nExercise 3: No return");

const result3 = originalArray.map(num => {console.log(num);
})

console.log("Actual Array: ")
console.log(originalArray);
console.log("Modified Array: ")
console.log(result3);

// -----------------------------------------------------
console.log("\nExercise 4: Use Return but Nothing to Return");

const result4 = originalArray.map(num => {
    if (num===2 || num===5){
        return;
    }
    return num*2;
})

console.log("Actual Array: ")
console.log(originalArray);
console.log("Modified Array: ")
console.log(result4);

// -----------------------------------------------------
console.log("\nExercise 5: Objects Now (Return same objects)");

const array = [
    {name : "Rajesh"},
    {name : "Goud"}
]

const result5 = array.map(user => {
    user.name = user.name.toUpperCase();
    return user;

})

console.log("Actual Object: ")
console.log(array);
console.log("Modified Object: ")
console.log(result5);

// -----------------------------------------------------
console.log("\nExercise 6: Objects Now (Does not Return same objects)");

const array2 = [
    {name : "Rajesh"},
    {name : "Goud"}
]

const result6 = array2.map(user => ({
    ...user,
    name : user.name.toUpperCase()

}))

console.log("Actual Object: ")
console.log(array2);
console.log("Modified Object: ")
console.log(result6);

// -----------------------------------------------------
console.log("\nExercise 7: Use 3 Parameters")

const result7 = originalArray.map((num, index, arr)=>{
arr[index] = num*10;
return num;
})
console.log("Actual Array: ")
console.log(originalArray)
console.log("Modified Array: ")
console.log(result7)

// Tables Turn Here 

// -----------------------------------------------------
console.log("\nExercise 8: Use 3 Parameters")

const result8 = originalArray.map((num, index, arr)=>{
arr[index] = num*10;
return arr[index]+1;
})
console.log("Actual Array: ")
console.log(originalArray)
console.log("Modified Array: ")
console.log(result8)


