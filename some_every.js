// some and every methods return boolean

const array  = ["Pass", "Fail", "Fail", "Fail"];
const result = array.some(output => output === "Pass");
console.log(result);

const result1 = array.every(output => output==="Pass");
console.log(result1);

const array1 = [10, 20, 30];
const result2 = array1.some(num => num > 40)
const result3 = array1.every(num => num > 0)
console.log(result2); 
console.log(result3); 


