{
  //mapped types

  //first let's see "look up"
  type Developer = {
    name: string;
    age: number;
  };

  type NameType = Developer["name"]; // type is string
  type AgeType = Developer["age"]; // type is number

  // let's explore" mapped types"
  type area = {
    height: number;
    width: number;
  };

  type mappedTypeArea<T> = {
    [property in keyof T]: T[property];
  };

  const newArea: mappedTypeArea<{ height: string; width: number }> = {
    height: "100",
    width: 100,
  };
}
