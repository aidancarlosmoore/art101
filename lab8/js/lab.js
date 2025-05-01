// index.js - purpose and description here
// Author: Aidan Moore
// Date: 4/30/25

// Defining a math function with x as the parameter, returning the result
function slayMultiplication (x) {
  let slayResult = (x * 4);
  return slayResult;
}

// Defining a second math function with x as the parameter, returning the result
function slayExponents (x) {
  let slayResult = (x ** 2);
  return slayResult;
}

// Setting up the array
let slayNumbers = [2, 4, 6, 7, 8, 9, 12];

// Creating a variable that is linked to the map of the array to the multiplication function, then logging it in console
let slayMultiplicationDisplay = slayNumbers.map(slayMultiplication)
console.log("Numbers multiplied by 4: ", slayMultiplicationDisplay);

// Creating a variable that is linked to the map of the array to the exponential function, then logging it in console
let slayExponentsDisplay = slayNumbers.map(slayExponents);
console.log("Numbers squared: ", slayExponentsDisplay);

// Displaying the results on the lab page and not just the console
document.writeln("Numbers: ",
  slayNumbers, "</br>");
// Using the display variable to easily print the multiplied results onto the page
document.writeln("Numbers multiplied by 4: ",
  slayMultiplicationDisplay, "</br>");
// Using the display variable to easily print the exponential results onto the page
document.writeln("Numbers squared: ",
  slayExponentsDisplay, "</br>");

// Creating an anonymous function within the display, mapping the numbers to another function
document.writeln("Numbers minus 5: ", slayNumbers.map(function(x) {
  let newSlayResult = (x - 5);
  return newSlayResult;
}))
  


// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
