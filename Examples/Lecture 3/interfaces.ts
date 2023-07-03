interface Address {
  country: string;
  city: string;
  street: number | string;
}

interface Person {
  name: string;
  age: number;
  weight: number;
  children?: string[];
  address: Address;
  greet: () => void;
}

const p1: Person = {
  name: "Ahmad",
  age: 20,
  weight: 95,
  // address : "Hebron",  // This will raise an error
  address: {
    country: "Palestine",
    city: "Hebron",
    street: 15
  },
  greet: () => {
    console.log(`Hello, this is ${p1.name} `);
  }
}

const myAddress = {
  city: "Amman",
  street: "Al Nahda",
  country: "Jordan"
}

const p2: Person = {
  name: "Hiba",
  age: 31,
  weight: 70,
  children: ['Saeed', 'Sarah'],
  address: myAddress,
  greet: () => {
    return "Hello";
  }
}

console.log(p1, p2);
console.log(typeof p1);
p1.greet();

p1.children?.forEach(ch => {
  console.log(ch);
})
