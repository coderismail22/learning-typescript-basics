{
  //keyof operator

  type Vehicle = {
    cycle: string;
    bike: string;
    car: string;
    helicopter: string;
  };

  type Owner = keyof Vehicle;

  const person1: Owner = "cycle";
  const person2: Owner = "bike";
  const person3: Owner = "car";
  const person4: Owner = "helicopter";

  //Function
  const getValueOfKeys = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const poorDev = {
    name: "ismail",
    job: "jobless",
  };

  const richDev = {
    name: "imran",
    job: "mern stack developer",
  };

  const valueOfAKey = getValueOfKeys(richDev, "salary"); // there's no "salary" key in the object.
  console.log(valueOfAKey);
}
