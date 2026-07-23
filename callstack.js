//JS EXECUTION CONTEXT
//2 phases to run the code(memory creation phase & Execution phase)
//Gobal execution context (this)
//Function execution contexe
//eval execution context

let val1 = 10
let val2 = 5
function addnum(num1,num2){
    let total = num1+num2
}
let result = addnum(val1,val2)
let result2 = addnum(5,6)

//Global execution located under this
//memory creation phase (allocate memory to all variables)
//firstly place undefied in all variables
//val1 = undefined
//val2 = undefined
//addnum =  undefined
//result 1 = undefined
//result 2= undefined

//Cycle 2 - Execution phase 
//val 1 = 10
//val 2 = 5
//addnum  = new variable environment + execution thread