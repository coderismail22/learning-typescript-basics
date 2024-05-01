{
  const developer = {
    name: "ismail",
    age: 19,
    address: {
      city: "Gobindaganj",
      country: "Bangladesh",
    },
  };

  const devTown = developer?.address;  // It works better in JS . TS actually don't need ?. that much.
  console.log(devTown)
}
