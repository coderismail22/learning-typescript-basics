{
  //Never Type
  //[This will never happen like thing]

  //Case:1
  function throwError(msg: string): never {
    throw new Error(msg);
  }

  console.log(throwError("Here is your gift !!! XD"));

  //Case:2
  function infiniteLoop(): never {
    while (2 > 1) {
      console.log("I am a mad infinite loop");
    }
  }

  //Case:3
  let neverVariable:never;
  neverVariable = a;
}
