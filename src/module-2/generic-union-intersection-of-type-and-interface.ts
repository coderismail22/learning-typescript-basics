{
  type developerUsingType = {
    name: string;
    age: number;
  };
  interface developerUsingInterface {
    salary: number;
  }

  type Developer<T> = T;
  //Intersection
  const poorDev: Developer<developerUsingType & developerUsingInterface> = {
    name: "ismail",
    age: 19,
    salary: 0,
  };
  //Union
  const richDev: Developer<developerUsingType | developerUsingInterface> = {
    name: "ismail",
    age: 19,
    salary: 10,
  };
}
