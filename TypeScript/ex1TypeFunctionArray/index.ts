let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) =>
  console.log(`${name} said ${greeting}`);
greet("Daniel", "Hello");

let calculate: (a: number, b: number, c: string) => number;
calculate = (numOne: number, numTwo: number, action: string) =>
  action === "add" ? numOne + numTwo : numOne - numTwo;
console.log(calculate(4, 2, "add"));

type Student = { name: string; age: number };
let printStudent: (student: Student) => void;
printStudent = (myStudent: Student) => {
  console.log(`${myStudent.name} is ${myStudent.age} years old`);
};
printStudent({ name: "Daniel", age: 21 });

const nam = { name: "Nam", age: 20 };
printStudent(nam);
