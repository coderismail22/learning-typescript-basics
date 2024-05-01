{
  //Type Alias
  type Student = {
    name: string;
    age: number;
  };

  const newStudent: Student = {
    name: "Ismail",
    age: 19,
  };

  //Simple Example:
  type UserName = string; // Type Should Be Capitalized (Convention)
  const userName: UserName = "Abdullah";

  //Function Example:
  type Add = (n1: number, n2: number) => number;
  const add: Add = (n1, n2) => n1 + n2;
}
