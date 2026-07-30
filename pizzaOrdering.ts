// Promise<T>
function orderPizza(): Promise<string>{
    return new Promise((resolve) => //returning promise 
    {
        console.log("We are preparing the delicious pizza...");

        setTimeout(()=>{   
            resolve("Your cheese burst pizza has been delivered");
        },2000)
    });
}
// promise Void
function sendNotification(): Promise<void>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("please collect your order");
            resolve();
            
        },2000)
    })
}

// promise Never
function restaurantClosed(): Promise<never>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject("sorry restaurant is closed today!!!")
        }, 2000);
    });
}

//calling all functions
orderPizza().then((pizza)=>{
    console.log("We are at your doorstep")
    return sendNotification();
})
.then(()=>{
    return restaurantClosed();
})
.catch(()=>
{
    console.log("error");
 
})