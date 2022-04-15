interface Person {
    name: string;
    age: number;
    speak(lang: string): void;
    spend(amount: number): number;
  }
  const Henry: Person = {
    name: "John",
    age: 34,
    speak(text: string): void {
      console.log(text);
    },
    spend(amt: number): number {
      return amt;
    },
  };
  console.log(Henry);
  const helloPerson = (onePerson: Person) =>
    console.log(`Hello ${onePerson.name}`);
  helloPerson(Henry);
  