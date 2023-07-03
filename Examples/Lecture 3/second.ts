let age = 20;  // TS will infer that this is a number variable

// age = "Ahmad"; // This will raise an error

const person = {
  age: 20,
  name: "Ahmad"
}

console.log(person);
// person.city = "Hebron";  // This will raise an error

//////////////////// 

let street: number | string = 60;
street = "King abdullah street";

let person2: { name: string, age: number } & { address: string };
person2 = {
  name: "Ahmad",
  age: 20,
  address: "Hebron"
}