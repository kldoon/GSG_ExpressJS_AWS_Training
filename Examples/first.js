let x = 10;
const y = 300;

const z = x + 1 * y;
// const doc = document.getElementById("abc");   // This will not work in NodeJS
// window.alert("Hello");  // This will not run as well
console.log("Hello World NodeJS!");
console.log(`The result is: ${z} - Hello`);

function calc1(n1, n2) {
  return n1 + n2;
}

const calc2 = (n1, n2) => {
  return n1 + n2;
}

const calc = (n1, n2 = 10) => n1 + n2;

const r2 = calc(10);
console.log(r2);


const str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
 Ut enim ad minim veniam ${r2}, quis nostrud exercitation ullamco laboris nisi ut 
 aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
 esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident`;

console.log(str);

////////////////////

const person = {
  name: "Ahmad",
  age: 25,
  address: "Hebron"
};

//const name = person.name;

const { name, age, address } = person;

console.log(name, address);

// const p2 = {};
// p2.name = person.name;
// p2.age = person.age;
// p2.address = person.address;
const p2 = { ...person, university: "PPU" };

console.log(p2);

const arr = [10, 20, 30, 40, 50];
console.log(arr);
console.log(...arr);

const [n1, n2, ...rest] = arr;
console.log(n1);
console.log(n2);
console.log(rest);

// const [state, setState] = useState();  