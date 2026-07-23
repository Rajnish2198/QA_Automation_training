const user = {
    username: "Mahima",
    Price: 999,
    WelcomeMsg: function(){
        console.log(`${this.username} ,Welcome in the game`);
        console.log(this);
    }
}
user.WelcomeMsg();
user.username = "Harsh"
user.WelcomeMsg();

//Arrow Function

//const chai = function(){
  //  let Fname = "Hitesh"
    //console.log(this.Fname)
   // console.log(this);
//}
//chai();

/*const chai = () => {
    let Fname = "Hitesh"
    console.log(this.Fname)
}
chai();*/

const addtwo = (num1,num2)=>
{
    return num1+num2
}
console.log(addtwo(3,4));

const addthree = (num1,num2,num3) => (num1+num2+num3)
console.log(addthree(3,4,5));

const addfour = (num1,num2,num3) => ({username:"Mahima"})
console.log(addfour());