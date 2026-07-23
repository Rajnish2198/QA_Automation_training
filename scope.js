//Let, Var and const
let a = 10;
var b = 20;
const c = 30;
  
console.log(a);
console.log(b);
console.log(c);

//{} -> Scope
//when it comes with function or if else - then it will be the scope of that program

if (true){
let d = 10;
const f = 30;
var e = 20;
}

//console.log(d);//can't access outside 
console.log(e);
//console.log(f);//can't access outside 

function one()
{
const username = "mahima"
function two()
{
    const game = "BTB"
    console.log(username);
}
//console.log(game); out of scope
two();
}
one();

if(true)
{
    const name = "Harsh"
    if(name==="Harsh")
    {
        const profile = "GenAiDev"
        console.log(name + profile);
    }
    //console.log(profile); out of scope
}
//console.log(name); out of scope


