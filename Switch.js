let order = "malted";
let ingredients; // Declare the variable first

switch (order) {
    case "cheeseburger":
        ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
        break;
    case "hamburger":
        ingredients = 'bun, burger, lettuce, tomato, onion';
        break;
    case "malted":
        ingredients = 'milk, ice cream, malted milk powder';
        break;
    default:
        console.log("Sorry, that's not on the menu right now.");
        break;
}

if (ingredients) {
    console.log("Your " + order + " includes: " + ingredients);
}
