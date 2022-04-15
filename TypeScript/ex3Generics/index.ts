type myArray = Array<string>;
type numArray = Array<number>;
const last = (arr: Array<number>) => arr[arr.length - 1];
const l1 = last([1, 2, 3]);
console.log(l1);

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const l3 = lastT([1, 2, 3]);
const l4 = lastT(["a", "b", "c"]);
const l5 = lastT<string>(["a", "b"]);

const makeArr = (x: number) => [x];
const m = makeArr(5);
console.log(m);

const makeArrayT = <T>(x: T) => [x];
const m3 = makeArrayT("a");

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];
const m4 = makeArrXY(5, 6);
const m5 = makeArrXY("a", "b");
const m6 = makeArrXY(4, "a");
console.log(m6);

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
const m7 = makeTuple("a", 6);
const m9 = makeTuple<string, number>("g", 23);
const m10 = makeTuple<string | null, number>("a", 3);

const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];
const m11 = makeTupleWithDefault<string | null>("a", 3);

// Generics extends
const makeFullname = (obj) => ({
  ...obj,
  fullName: `${obj.firstName} - ${obj.lastname}`,
});

const makeFullnameConstraint = (obj: {
  firstName: string;
  lastName: string;
}) => ({
  ...obj,
  fullName: `${obj.firstName} - ${obj.lastName}`,
});
const n1 = makeFullnameConstraint({ firstName: "Daniel", lastName: "Pham" });

const makeFullnameConstraintWithGeneric = <
  T extends { firstName: string; lastName: string }
>(
  obj: T
) => ({
  ...obj,
  fullName: `${obj.firstName} - ${obj.lastName}`,
});
const n3 = makeFullnameConstraintWithGeneric({
  firstName: "Daniel",
  lastName: "Pham",
  age: 21,
});

const addNewEmployee = (employee: object) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};
const empOne = addNewEmployee({ name: "Daniel", age: 21 });
console.log(empOne);

const addNewEmployeeT = <T extends object>(employee: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};
const empTwo = addNewEmployeeT({ name: "Nam", age: 21, male: true });
console.log(empTwo);
console.log(empTwo.name);

const addNewEmployeeTWithConstraint = <T extends { name: string }>(
  employee: T
) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};
const empThree = addNewEmployeeTWithConstraint({ name: "Nam" });

// Generics interface
interface Resource<T> {
  uid: number;
  name: string;
  data: T;
}
const resourceOne: Resource<string> = {
  uid: 1,
  name: "Daniel",
  data: "Pham",
};
const resourceTwo: Resource<object> = {
  uid: 2,
  name: "Bob",
  data: { name: "Nam" },
};
const resourceThree: Resource<string[]> = {
  uid: 3,
  name: "Daniel",
  data: ["HTML", "CSS"],
};

type NumberResource = Resource<number[]>;
const numbers: NumberResource = {
  uid: 4,
  name: "Nam",
  data: [1, 2],
};
