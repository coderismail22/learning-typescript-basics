{
  //Union Types

  type FrontEndDeveloperExp = "1Y" | "2Y";
  type BackEndDeveloperExp = "3Y" | "4Y";

  type ExpWiseDeveloper = FrontEndDeveloperExp | BackEndDeveloperExp;

  const newDev: ExpWiseDeveloper = "4Y";

  //Another Example:
  type User = {
    name: string;
    userName: string;
    gender: "Male" | "Female";
    bloodGroup: "A+" | "B+";
  };

  const newUser: User = {
    name: "Sathi",
    userName: "sathi2006",
    gender: "Male",
    bloodGroup: "A+",
  };
}
