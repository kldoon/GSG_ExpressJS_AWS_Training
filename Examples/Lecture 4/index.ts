const fName: string = 'Ahmad';
const lName: string = 'Saeed';

const greet = (fname: string, lname: string, city: string) => {
  console.log(`Hello ${fname} ${lname}`);
  console.log(`You are form ${city}`);
}

greet(fName, lName, 'Hebron');