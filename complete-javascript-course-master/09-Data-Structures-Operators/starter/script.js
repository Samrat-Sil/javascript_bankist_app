'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const {name,openingHours,categories}=restaurant;
// console.log(name,openingHours,categories)
// const {name:restaurantName,openingHours:hours,starterMenu:start}=restaurant;
// const{x}=hours;
// console.log(x)
// console.log(hours)

// const newMenu = [...restaurant.starterMenu, 'Chicken'];
// const mainMenuCopy = [...newMenu, ...restaurant.mainMenu];
// console.log(mainMenuCopy);
// const [a, , b, ...c] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(a, b, c);
// const nested = [2, 4, [5, 6]];
// const [first, , last] = nested;
// console.log(first);
// console.log(last);
// const [last1, last2] = last;
// console.log(last1);
// console.log(last2);
// const prop1 = Object.keys(openingHours);
// for (const day of prop1) {
//   console.log(day);
// }
const newset = new Set('Samrat');
console.log(newset);
const rest = new Map();
rest.set(1, 'BCA');
rest.set(2, 'MCA');
console.log(rest);
