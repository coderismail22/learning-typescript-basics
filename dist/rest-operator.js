"use strict";
//Rest Operator
const sum = (...numbers) => {
    return numbers.reduce((total, number) => total + number);
};
const sayILoveYouToFriends = (...friends) => {
    friends.forEach(friend => console.log("I love you", friend));
};
