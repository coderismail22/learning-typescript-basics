"use strict";
// Spread Operator
//Array Example
const dreams1 = ["Bro's English", "DU"];
const dreams2 = ["Front End", "Back End"];
const allDreams = [...dreams1, ...dreams2]; // New Array
console.log(allDreams);
dreams1.push(...dreams2); // Extend Existing Array
console.log(dreams1);
//Object Example
const healthyFruits = {
    food1: "lemon",
    food2: "orange",
    food3: "watermelon",
    food4: "pomegranate",
};
const healthyFoods = {
    food5: "fish",
    food6: "eggs",
    food7: "meats",
    food8: "nuts",
};
const allFoods = Object.assign(Object.assign({}, healthyFruits), healthyFoods); // New Object
console.log(allFoods);
