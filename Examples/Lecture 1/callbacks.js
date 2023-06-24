// const callback = (x) => {
//   const y = x * 2;
//   console.log(y);
// }

const files = { x: 10, z: 50 };

const readValue = (vName, callback) => {
  setTimeout(() => {
    const v = files[vName];
    callback(v);
  }, 3000);
}

console.log("Hello [Before]");
readValue("x", (x) => {
  const y = x * 2;
  console.log(y);
});

console.log("Hello [After]");

// const z = readValue("z");
// console.log(z * 3);