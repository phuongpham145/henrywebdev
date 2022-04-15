"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    //   public name: string;
    //   private age: number;
    //   readonly male: boolean;
    //   constructor(n: string, a: number, m: boolean) {
    //     this.name = n;
    //     this.age = a;
    //     this.male = m;
    //   }
    function Employee(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    Employee.prototype.print = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Gender: ").concat(this.male);
    };
    return Employee;
}());
exports.Employee = Employee;
var henry = new Employee("henry", 30, true);
console.log(henry.name);
console.log(henry.male);
henry.name = "Nam";
console.log(henry);
console.log(henry.print());
var bob = new Employee("bob", 25, true);
var employees = [];
employees.push(henry);
employees.push(bob);
employees.forEach(function (employee) {
    return console.log(employee.name, employee.male, employee.print());
});
