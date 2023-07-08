const PI = 3.1456;

const calcArea = (r) => {
  return r * r * PI;
}

const printOutput = (result) => {
  console.log("*****************");
  console.log(`Your Result: ${result}`);
  console.log("*****************");
}

// module.exports.PI= PI;
// module.exports.calcArea= PI;

module.exports = {
  PI,
  calcArea,
  printOutput
}