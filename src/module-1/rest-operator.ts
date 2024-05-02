//Rest Operator

const sum = (...numbers: number[]): number => {
  return numbers.reduce((total, number) => total + number);
};

const sayILoveYouToFriends = (...friends: string[]) => {
  friends.forEach((friend) => console.log("I love you", friend));
};




