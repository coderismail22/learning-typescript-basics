{
  // constraints
  type User = {
    name: string;
    age: number;
  };

  const printUser = <T extends User>(params: T) => {
    console.log(params);
  };

  printUser({ name: "John", age: 18 });
}
