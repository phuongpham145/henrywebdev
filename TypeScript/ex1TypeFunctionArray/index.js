var greet;
greet = function (name, greeting) {
    return console.log("".concat(name, " said ").concat(greeting));
};
greet("Daniel", "Hello");
var calculate;
calculate = function (numOne, numTwo, action) {
    return action === "add" ? numOne + numTwo : numOne - numTwo;
};
console.log(calculate(4, 2, "add"));
var printStudent;
printStudent = function (myStudent) {
    console.log("".concat(myStudent.name, " is ").concat(myStudent.age, " years old"));
};
printStudent({ name: "Daniel", age: 21 });
var nam = { name: "Nam", age: 20 };
printStudent(nam);
