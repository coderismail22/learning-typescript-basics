{
  // generics [helps to create reusable components with sacrificing type-safety]

  // regular way to ensure type-safety
  const numberArray: number[] = [1, 2, 3, 4, 5];
  const stringArray: string[] = ["String1", "String2", "String3"];
  const boolArray: boolean[] = [true, false, true, false];

  // with generics
  const numberArrayGenerics: Array<number> = [1, 2, 3, 4, 5];
  const stringArrayGenerics: Array<string> = ["String1", "String2", "String3"];
  const boolArrayGenerics: Array<boolean> = [true, false, true, false];

  // reusable generics
  type anyTypeOfArray<T> = Array<T>; // "T","param", "anything" can be used
  const numberTypeArrayUsingGenerics: anyTypeOfArray<number> = [1, 2, 3, 4, 5];
  const stringTypeArrayUsingGenerics: anyTypeOfArray<string> = ["1", "2"];
  const boolTypeArrayUsingGenerics: anyTypeOfArray<boolean> = [true, false];

  // generics with array of objects
  type ArrayOfObjectWithGenerics<T> = Array<T>;

  // it has no strict structure which is very bad
  const developersArrayWithGenerics1: ArrayOfObjectWithGenerics<object> = [
    {
      name: "ismail",
      role: "mern dev",
      age: 18,
    },
    {
      name: "alu",
      role: "noob dev",
    },
  ];

  // it has strict structure which is very good
  const developersArrayWithGenerics2: ArrayOfObjectWithGenerics<{
    name: string;
    role: string;
    age: number;
  }> = [
    {
      name: "ismail",
      role: "mern dev",
      age: 18,
    },
  ];

  //generics with tuples
  type GenericWithTuple<T1, T2> = [T1, T2];

  const husbandAndWifeTuple: GenericWithTuple<string, string> = [
    "Ismail",
    "Sathi",
  ];
  const userWithIdTuple: GenericWithTuple<
    number,
    { name: string; age: number }
  > = [1234, { name: "ismail", age: 19 }];
}
