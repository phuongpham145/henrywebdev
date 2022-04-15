let myName: string;
let age: number;
let isAuthenticated: boolean;

myName = "Daniel";
age = 30;
isAuthenticated = false;
let students: string[] = ["nam", "hung"];
students.push("Pham");
let mixed: (string | number | boolean)[];
mixed = ["Daniel", 5, false];
mixed.push(6);
mixed.push("Lan");
mixed.push(true);

let id: string | number;
id = "123";
id = 123;

let hobby: "book" | "music";

let person: object;
person = { name: "Daniel", age: 30 };
person = [];

let student: {
  name: string;
  age: number;
  isGood: boolean;
};
student = { name: "John", age: 30, isGood: false };
