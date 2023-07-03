var p1 = {
    name: "Ahmad",
    age: 20,
    weight: 95,
    // address : "Hebron",  // This will raise an error
    address: {
        country: "Palestine",
        city: "Hebron",
        street: 15
    },
    greet: function () {
        console.log("Hello, this is ".concat(p1.name, " "));
    }
};
var myAddress = {
    city: "Amman",
    street: "Al Nahda",
    country: "Jordan"
};
var p2 = {
    name: "Hiba",
    age: 31,
    weight: 70,
    children: ['Saeed', 'Sarah'],
    address: myAddress,
    greet: function () {
        return "Hello";
    }
};
console.log(p1, p2);
console.log(typeof p1);
p1.greet();
// @ts-ignore
p1.children.forEach(function (ch) {
    console.log(ch);
});
