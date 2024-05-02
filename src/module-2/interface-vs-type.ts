{
  //interface [blueprint of objects]

  interface BestFriend {
    name: string;
    age: number;
    country: string;
  }

  const newBestFriend: BestFriend = {
    name: "rokib",
    age: 22,
    country: "Bangladesh",
  };

  //type

  // Also works this way : type myAge = number;
  // type myAge = number;
  // const age:myAge = 19;

  type BestStudent = {
    name: string;
    age: number;
  };

  const newBestStudent: BestStudent = {
    name: "Yo Yo",
    age: 20,
  };

  //More Examples:

  //Array
  type Fruits = string[];
  const citrusFruits: Fruits = ["lemon", "orange", "malta"];

  interface ProgrammingLangs {
    [index: number]: string; // Index Signature
  }
  const frontEndLangs: ProgrammingLangs = ["JavaScript", "Python"];

  //Function
  type add1 = (n1: number, n2: number) => number;
  interface add2 {
    (n1: number, n2: number): number;
  }

  const add: add1 = (n1, n2) => {
    //type(add1) and interface(add2) can both be used without any issues
    return n1 + n2;
  };

  /**
   * Tips:
   * 1. Choose interface for defining object shapes and object-oriented concepts.
   * 2. Choose type alias for defining complex types and creating descriptive names for types.
   * 3. Use interface when you need to extend or implement interfaces in classes.
   * 4. Use type alias when you need to define unions, intersections, tuple types, or mapped types.
   */
}
