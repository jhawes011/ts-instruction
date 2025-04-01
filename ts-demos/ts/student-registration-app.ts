console.log("Student Registration App");
console.log("===================================");
let r4 = require("readline-sync");
let firstName1: string = r4.question("Enter your first name: ");
let lastName1: string = r4.question("Enter your last name: ");
let year: number = r4.question("Enter year of birth: ");
console.log("welcome " + firstName1 + " " + lastName1);
console.log(
  "Your registration is complete! \nYour temporary password is: " +
    (lastName1 + "*" + year)
);
