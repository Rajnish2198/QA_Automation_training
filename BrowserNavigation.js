//importing browser to use 
//const {chromium,firefox,webkit} = require("playwright")
import {chromium,firefox,webkit} from "playwright";


//Importing readline for user input
//const readline = require("readline"); 
import readline from "readline";

const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout
}
)

async function navigateTo(browsername)
{
 let browser;
if(browsername == 'Chrome')
{
    browser = await chromium.launch({headless:false})
}
else if(browsername == 'Firefox')
{
    browser = await firefox.launch({headless:false})
}
else if (browsername=='Webkit')
{
    browser = await webkit.launch({headless:false})
}
else
{
    console.log("Invalid Browser Name")
}
//Browser page creation

const page = await browser.newPage();
await page.goto("https://emulator.owbetguard.com/")

console.log(`${browsername} launch successfully`)

 browser.close();    
}

//Taking input from user
rl.question(
    "Enter Browser Name(Chrome,Firefox,Webkit): ",
    async function(browsername){
        await navigateTo(browsername);
        //wait for some time before closing the browser
        //await Page.waitForTimeout(5000);
        console.log(`${browsername} closed successfully`)

          
    }
);