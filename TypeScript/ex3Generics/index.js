var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var last = function (arr) { return arr[arr.length - 1]; };
var l1 = last([1, 2, 3]);
console.log(l1);
var lastT = function (arr) { return arr[arr.length - 1]; };
var l3 = lastT([1, 2, 3]);
var l4 = lastT(["a", "b", "c"]);
var l5 = lastT(["a", "b"]);
var makeArr = function (x) { return [x]; };
var m = makeArr(5);
console.log(m);
var makeArrayT = function (x) { return [x]; };
var m3 = makeArrayT("a");
var makeArrXY = function (x, y) { return [x, y]; };
var m4 = makeArrXY(5, 6);
var m5 = makeArrXY("a", "b");
var m6 = makeArrXY(4, "a");
console.log(m6);
var makeTuple = function (x, y) { return [x, y]; };
var m7 = makeTuple("a", 6);
var m9 = makeTuple("g", 23);
var m10 = makeTuple("a", 3);
var makeTupleWithDefault = function (x, y) { return [x, y]; };
var m11 = makeTupleWithDefault("a", 3);
// Generics extends
var makeFullname = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " - ").concat(obj.lastname) })); };
var makeFullnameConstraint = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " - ").concat(obj.lastName) })); };
var n1 = makeFullnameConstraint({ firstName: "Daniel", lastName: "Pham" });
var makeFullnameConstraintWithGeneric = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " - ").concat(obj.lastName) })); };
var n3 = makeFullnameConstraintWithGeneric({
    firstName: "Daniel",
    lastName: "Pham",
    age: 21
});
var addNewEmployee = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empOne = addNewEmployee({ name: "Daniel", age: 21 });
console.log(empOne);
var addNewEmployeeT = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empTwo = addNewEmployeeT({ name: "Nam", age: 21, male: true });
console.log(empTwo);
console.log(empTwo.name);
var addNewEmployeeTWithConstraint = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empThree = addNewEmployeeTWithConstraint({ name: "Nam" });
var resourceOne = {
    uid: 1,
    name: "Daniel",
    data: "Pham"
};
var resourceTwo = {
    uid: 2,
    name: "Bob",
    data: { name: "Nam" }
};
var resourceThree = {
    uid: 3,
    name: "Daniel",
    data: ["HTML", "CSS"]
};
var numbers = {
    uid: 4,
    name: "Nam",
    data: [1, 2]
};
