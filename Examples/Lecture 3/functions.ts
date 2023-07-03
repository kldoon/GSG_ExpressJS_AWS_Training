function concat(num1: number, num2: number): string {
  return `${num1}_${num2}`;
}

const concat2 = (num1: number, num2: number): string => {
  return `${num1}_${num2}`;
}

// concat("Ahmad", 20);  // This will raise an error
// const result: boolean = concat(50, 20);  // This will raise an error