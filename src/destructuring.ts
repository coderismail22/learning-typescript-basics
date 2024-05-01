{
  //Object Destructuring

  const dev = {
    name: "Ismail",
    age: 19,
    address: {
      city: "Gaibandha",
      country: "Bangladesh",
    },
  };

  const { name, address } = dev;
  const { city: sohor, country } = address; // Name Aliasing (city:sohor)
  //   console.log(name, sohor, country);

  //Array Destructuring
  const myFriends = ["Abdullah", "Shihab", "Masud"];
  const [, , oldBestFriend] = myFriends; // skipping element
  console.log("old best friend", oldBestFriend);

  const [, newBestFriend, ...rest] = myFriends;
  const modifiedArray = [newBestFriend, ...rest]; //New Usable Array
  console.log("new array with new best friend", modifiedArray);
}
