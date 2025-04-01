console.log("Factorial Calculator App");
console.log("===================================");
let r3 = require("readline-sync");
let choice2: string = "y";
while (choice2 == "y") {
  let num: number = r3.questionInt(
    "Enter an integer that's greater than 0 and less than 10: "
  );
  if (num > 0 && num < 10) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    console.log("The factorial of " + num + " is " + factorial);
  } else {
    console.log("The number must be greater than 0 and less than 10.");
  }
  choice2 = r3.question("Do you want to continue? (y/n) ").toLowerCase();
}
