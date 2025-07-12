// Instructions
// You are working as a developer for a local café that needs a system to track
// customer orders. The café serves drinks and pastries, and orders are stored in a
// 2D array, where each row represents a category (drinks or pastries), and each
// column represents an order within that category.
// Your task is to use the .length property to track the number of items in the
// café’s order system dynamically.

// Task 1: Create the Order System
// Create a multi-dimensional array called orders with two rows:
// ● The first row stores three drink orders (e.g., “Latte”, “Tea”, “Espresso”).
// ● The second row stores three pastry orders (e.g., “Croissant”, “Muffin”, “Bagel”).
console.log("Task 1");
let cafeOrders = [
    ["Latte", "Tea", "Espresso"],
    ["Croissant", "Muffin", "Bagel"]
];
console.log(cafeOrders);

// Task 2: Log the number of drinks and number of pastries by using .length on each
// row.
console.log("\nTask 2")
for(let i = 0; i < cafeOrders.length; i++){
    console.log(cafeOrders[i].length)
};

// Task 3: Access Orders Using Bracket Notation
// Use bracket notation to log a specific drink and a specific pastry using
// hardcoded numbers. For example, you might want to log the first drink and last
// pastry. Do this for three combinations.
console.log("\nTask 3:");
console.log("Order 1:", cafeOrders[0][0],"+", cafeOrders[1][0]);
console.log("Order 2:", cafeOrders[0][1],"+", cafeOrders[1][1]);
console.log("Order 3:", cafeOrders[0][2], "+", cafeOrders[1][2]);

// Task 4: Access Orders Dynamically with Variables
let drinks = 0
let pastry = 1
let drink1 = 0
let pastry1 = 0
console.log("\nTask 4:");
console.log("Order 1:", cafeOrders[drinks][drink1], "+", cafeOrders[pastry][pastry1]);

// Task 5: Write a loop that logs all the items in the drink category, ensuring the loop
// dynamically adjusts to the number of items using .length.
console.log("\nTask 5:");
for(let i = 0; i < cafeOrders[0].length; i++){
    console.log(cafeOrders[0][i]);
}

// Task 6: Add a New Order & Track Length
// Suppose a new order has been placed: a customer ordered a flat white. Add “flat
// white” to the drinks category dynamically. Log the updated number of drinks after
// the addition.
// Declare two variables and use them with bracket notation to log the selected order
// dynamically.
console.log("\nTask 6:");
cafeOrders[0].push("Flat white");
console.log("Updated number of drinks:",cafeOrders[0].length);
let newOrder = 3
console.log("The newest order is:", cafeOrders[drinks][newOrder]);
