//Immediately invoked function expression
(function chai()
{console.log("DB connected");
}());

/*( ()=>
{
    console.log("DB connected 2");
})*/

( ()=>
{
    console.log("DB connected 2");
})();

( (name)=>
{
    console.log(`DB connected 2, ${name}`);
})("MAHIMA");