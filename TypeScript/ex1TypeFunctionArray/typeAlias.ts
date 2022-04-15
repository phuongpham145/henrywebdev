type StringOrNumber = string | number;
type Student = { name: string; id: StringOrNumber };
const studentDetails = (id: StringOrNumber, studentName: string): void => {
  console.log(`Student ${studentName} has id: ${id}`);
};
studentDetails(123, "Daniel");
studentDetails("456", "Pham");
const greet = (user: Student) => {
  console.log(`${user.name} with id: ${user.id} say hello`);
};
greet({ name: "Daniel", id: 123 });
