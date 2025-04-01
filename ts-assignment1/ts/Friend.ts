class Friend {
  name: string;
  age: number;
  email: string;
  bff: boolean;

  constructor(name: string, age: number, email: string, bff: boolean) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.bff = bff;
  }
}

let friends: Friend[] = [
  new Friend("Ann", 27, "ann@gmail.com", true),
  new Friend("Bill", 31, "bill@gmail.com", false),
  new Friend("Cathy", 25, "cathy@gmail.com", true),
  new Friend("David", 29, "david@gmail.com", false),
  new Friend("Eva", 28, "eva@gmail.com", true),
];

console.log("Name Age Email BFF");
friends.forEach((friend) => {
  console.log(
    `${friend.name} ${friend.age} ${friend.email} ${friend.bff ? "Yes" : "No"}`
  );
});
