var fName = 'Ahmad';
var lName = 'Saeed';
var greet = function (fname, lname, city) {
    console.log("Hello ".concat(fname, " ").concat(lname));
    console.log("You are form ".concat(city));
};
greet(fName, lName, 'Hebron');
