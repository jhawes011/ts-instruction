import { ITEM } from "./item.class";
console.log(
  "Welcome to the Wizard Inventory Game ! \n=========================================="
);
let rl = require("readline-sync");

// Set variables
const maxItems = 4;
const inventory: ITEM[] = [
  new ITEM(1, "Wooden Staff"),
  new ITEM(2, "Wizard Hat"),
  new ITEM(3, "Pointy Shoes"),
];

function showItems(): void {
  console.log("Inventory:");
  inventory.forEach((item) => {
    console.log(`${item.id}. ${item.name}`);
  });
  console.log("");
}

function grabItem(): void {
  if (inventory.length >= maxItems) {
    console.log("You can't carry any more items. Drop something first.");
    console.log("");
    return;
  }

  const itemName = rl.question("Name: ");
  const newItem = new ITEM(inventory.length + 1, itemName);
  inventory.push(newItem);
  console.log(`${itemName} was added.`);
  console.log("");
}

function dropItem(): void {
  rl.question("Number: ", (num: string) => {
    const itemNumber = parseInt(num);
    const itemIndex = inventory.findIndex((it) => it.id === itemNumber);
    if (itemIndex === -1) {
      console.log("Invalid item number.");
      console.log("");
      showMenu();
      console.log("");
      return;
    }

    const [droppedItem] = inventory.splice(itemIndex, 1);
    console.log(`${droppedItem.name} was dropped.`);
    // Update IDs
    for (let i = itemIndex; i < inventory.length; i++) {
      inventory[i].id--;
    }
    console.log("");
  });
}

function showMenu(): void {
  console.log("\nCOMMAND MENU");
  console.log("show - Show all items");
  console.log("grab - Grab an item");
  console.log("edit - Edit an item");
  console.log("drop - Drop an item");
  console.log("exit - Exit program");
}
function editItem(): void {
  rl.question("Number: ", (num: string) => {
    const itemNumber = parseInt(num);
    const item = inventory.find((it) => it.id === itemNumber);
    if (!item) {
      console.log("Invalid item number.");
      console.log("");
      showMenu();
      console.log("");
      return;
    }

    rl.question("Updated name: ", (newName: string) => {
      item.name = newName;
      console.log(`Item number ${itemNumber} was updated.`);
      console.log("");
    });
  });
}

function main(): void {
  let command = "";
  showMenu();
  while (command.toLowerCase() !== "exit") {
    command = rl.question("Command: ").toLowerCase();

    switch (command) {
      case "show":
        console.log("");
        showItems();
        break;
      case "grab":
        console.log("");
        grabItem();
        break;
      case "edit":
        console.log("");
        editItem();
        break;
      case "drop":
        console.log("");
        dropItem();
        break;
      case "exit":
        console.log("");
        console.log("Bye!");
        break;
      default:
        console.log("");
        console.log("Invalid command.");
        break;
    }
  }
}

main();
