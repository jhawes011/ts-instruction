console.log("Table of Powers App");
console.log("===================================");
let r2 = require("readline-sync");
let choice1: string = "y";
while (choice1 == "y") {
  let num: number = r2.questionInt("Enter a number: ");
  console.log("Number\tSquare\tCube");
  console.log("------------------------------");
  for (let i = 1; i <= num; i++) {
    console.log(i + "\t" + i * i + "\t" + i * i * i);
  }
  choice1 = r2.question("Do you want to continue? (y/n) ").toLowerCase();
}
