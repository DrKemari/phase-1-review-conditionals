const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your age: ", function(temp) {
  temp = Number(temp);

  if (temp <= 13) {
    console.log("Child");
  } else if (temp > 13 && temp < 20) {
    console.log("Teen");
  } else {
    console.log("Adult");
  }

  rl.close();
});





// const order = 'cheeseburger';

// let ingredients;
// if (order === 'cheeseburger') {
//     ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
// } else if (order === 'hamburger') {
//     ingredients = 'bun, burger, lettuce, tomato, onion';
// } else if (order === 'malted') {
//     ingredients = 'milk, ice cream, malted milk powder';
// } else {
//     console.log("Sorry, that's not on the menu right now.");
// }

// const order = 'cheeseburger';

// let ingredients;

// switch (order) {
//     case 'cheeseburger':
//         ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
//         break;
//     case 'hamburger':
//         ingredients = 'bun, burger, lettuce, tomato, onion';
//         break;
//     case 'malted':
//         ingredients = 'milk, ice cream, malted milk powder';
//         break;
//     default:
//         console.log("Sorry, that's not on the menu right now.");
//         break;
// }

