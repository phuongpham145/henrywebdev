export class Employee {
    //   public name: string;
    //   private age: number;
    //   readonly male: boolean;
    //   constructor(n: string, a: number, m: boolean) {
    //     this.name = n;
    //     this.age = a;
    //     this.male = m;
    //   }
    constructor(
      public name: string,
      private age: number,
      readonly male: boolean
    ) {}
    print() {
      return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.male}`;
    }
  }
  const henry = new Employee("henry", 30, true);
  console.log(henry.name);
  console.log(henry.male);
  henry.name = "Nam";
  console.log(henry);
  console.log(henry.print());
  
  const bob = new Employee("bob", 25, true);
  let employees: Employee[] = [];
  employees.push(henry);
  employees.push(bob);
  employees.forEach((employee) =>
    console.log(employee.name, employee.male, employee.print())
  );
  