// // 1. Create an example of Synchronous Execution
function task1() {
    console.log("Game loading started");
}

function task2() {
    console.log("Post-loading screen is displayed");
}

function task3() {
    console.log("Game launched successfully");
}

task1();
task2();
task3();
 
// 2. Create an example of Asynchronous Execution using "setTimeout()".
function step1() {
    setTimeout(() => {
        console.log("Game UI matched with mockup");
    }, 4000);
}

function step2() {
    setTimeout(() => {
        console.log("Post-loading screen is displayed");
    }, 1000);
}

function step3() {
    setTimeout(() => {
        console.log("Game launched successfully with sound");
    }, 800);
}
function step4() {
    setTimeout(() => {
        console.log("Base game screen is appearing");
    }, 1200);
}


step1();
step2();
step3();
step4();



 
