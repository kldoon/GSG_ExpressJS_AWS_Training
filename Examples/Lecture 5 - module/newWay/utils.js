export const PI = 3.1456;

export const calcArea = (r) => {
  return r * r * PI;
}

export const printOutput = (result) => {
  console.log("*****************");
  console.log(`Your Result: ${result}`);
  console.log("*****************");
}


export default () => {
  console.log("*********Hello*********");
}

// export default 10;
// const obj = {
//   x: 20,
//   y: 50
// }
// const greet = () => {

// }
// export {
//   obj,
//   greet
// }