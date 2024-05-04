{
  //conditional types
  type Printable<T> = T extends number | string ? "Printable" : "Not Printable";

  //these types are dependent on the type "Printable"
  type MyName = Printable<string>; //Printable
  type MyPhone = Printable<number>; //Printable
  type MyObject = Printable<object>; //Not Printable

}
