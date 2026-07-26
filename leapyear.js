let year = 1900;
if (year%400===0) {
    console.log(`${year} this is a leap year`);
}
else if (year%100===0) {
    console.log(`${year} this isn't leap year`);
}
else if (year%4===0) {
    console.log(`${year} this is a leap year`);
}
else {
    console.log(`${year} this isn't a leap year`);
}