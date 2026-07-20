const MyArray = [1,2,3,4,5,"Ravi",12.25]

//Printing elements by index
console.log(MyArray[0]);
console.log(MyArray[1]);

//Printing complete array
console.log(MyArray);

MyArray.push("Mahima");
//Printing complete array
console.log(MyArray);

//removing last Value
MyArray.pop()

//Adding value at 0 index
MyArray.unshift(0);

console.log(MyArray);

//Adding Value At 0 index
MyArray.shift();
console.log(MyArray);

//Check value in array
console.log(MyArray.includes(9));
console.log(MyArray.includes("Ravi"))

//Check index in array
console.log(MyArray.indexOf(12));

const NewArr = MyArray.join()

console.log(MyArray);
console.log(NewArr);
console.log(typeof(NewArr));

//Slice and splice
console.log("A ", MyArray);

const Myn1 = MyArray.slice(1,3)
console.log(Myn)
