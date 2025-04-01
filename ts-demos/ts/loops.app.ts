//while loop - choice = y
let rl = require("readline-sync");
let choice: string = "y";
while (choice == "y") {
  // index for loop
  // index for loop
  for (let i = 0; i <= 100; i += 2) {
    console.log(i);
  }

  let names: string[] = ["John", "Jane", "Doe", "Andy", "Joe", "Mary"];
  //forof loop
  for (let s of names) {
    console.log(s);
  }

  //names.forEach(str=> console.log())

  choice = rl.question("Do you want to continue? (y/n) ").toLowerCase();

  if (choice == "z") {
    console.log("z entered, exiting loop");
    break;
  }
}
