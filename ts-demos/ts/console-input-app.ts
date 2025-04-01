let readline = require("readline-sync");

//get a number
let nbr1: number = readline.questionInt("Number? ");

// get a string:
let str1: string = readline.question("String? ");

console.log(`nbr is ${nbr1}, str1 is ${str1}`);
