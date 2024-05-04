{
  //utility types
  type User = {
    name: string;
    role: string;
    salary: number;
    age: number;
    address: string;
    phone: string;
    email: string;
  };
  //(1:Pick)
  //Pick<T,K> ----> T(Original Type) and K(Specified Type)
  //Pick<T,K> ----> creates a new type by picking specified properties

  type UserWithAddressUsingPick = Pick<User, "address">; // Example of "Pick<T,K>"

  //(2:Omit)
  //Omit<T,K> ----> T(Original Type) and K(Specified Type)
  //Omit<T,K> ----> creates a new type by removing specified properties

  type UserWithoutAddressUsingOmit = Omit<User, "address">; // Example of "Omit<T,K>"
  type UserWithoutPhoneEmailUsingOmit = Omit<User, "address" | "phone">; // Example of "Omit<T,K>"

  //(3:Required)
  //Required<T> ----> T(Original)
  //Required<T> ----> Creates a new object type where all the properties are required.

  type UserRequired = Required<User>; // Example of "Required<T>"

  //(4:Partial)
  //Partial<T> ----> T(Original)
  //Partial<T> ----> Creates a new object type where all the properties are optional.

  type UserPartial = Partial<User>; // Example of "Partial<T>"

  //(5: Readonly)
  //Readonly<T> ----> T(Original)
  //Readonly<T> ----> Creates a new object type where all the properties are readonly.

  type UserReadonly = Readonly<User>; // Example of "Read

  const anUser: UserReadonly = {
    name: "a",
    role: "b",
    salary: 20,
    age: 20,
    address: "c",
    phone: "d",
    email: "e",
  };

  // anUser.name = "x"; // can't be assigned because it's readonly

  //(6: Record)
  //Record<T,K> ----> T(Value of a property) and K(Type of the property)
  //Record<T,K> ----> Structure that stores information as key-value pair where keys have a specific type.

  type MyFoodRecord = Record<string, string>;
  const myObj: MyFoodRecord = {
    name: "Dim Vaaji",
    // price: 50 // Not Allowed
  };

  // Where we don't know what will be the type of second property.
  type typeUnknown = Record<string, unknown>;
  const unknownObj: typeUnknown = {
    role: "Junior Developer",
  };
}
