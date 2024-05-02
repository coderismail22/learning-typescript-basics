{
  //Unknown Types [Mystery Box]

  let userInput: unknown;

  userInput = 5;
  userInput = "String";
  userInput = undefined;

  if (typeof userInput === "undefined") {
    console.log("What do you mean .... ?");
  } else {
    console.log("I got you !");
  }
}
