// index.js - Lab 13: Loops
// Author: Aidan Moore
// Date: 5/21/25

// This function loops through the numbers 1-200 and prints 
// Fizz for multiples of 3, Buzz for multiples of 5, and Boom for multiples of 7.
function FizzBuzz() {
  // Setting up the oneLongString variable so it can be edited within conditional statements
  oneLongString = ""
  // Starts off i at 1, and increments by 1 up to 200
  for (let i=1; i<201; i++) {
    // Checking the most rare case first, being a multiple of all 3, so the others aren't triggered first
    if ((i % 3 == 0) && (i % 5 == 0) && (i % 7 == 0)) {
      oneLongString += i + " FizzBuzzBoom!<br>"; 
    }
    // Checking cases where the number is a multiple of 2 of the numbers
    else if ((i % 3 == 0) && (i % 5 == 0)) {
      oneLongString += i + " FizzBuzz!<br>"; 
    }
    else if ((i % 3 == 0) && (i % 7 == 0)) {
      oneLongString += i + " FizzBoom!<br>"; 
    }
    else if ((i % 5 == 0) && (i % 7 == 0)) {
      oneLongString += i + " BuzzBoom!<br>"; 
    }
    // If it's not a multiple of 3 or 2 of the numbers, checks if it's a multiple of any of them
    else if (i % 3 == 0) {
      oneLongString += i + " Fizz!<br>"; 
    }
    else if (i % 5 == 0) {
      oneLongString += i + " Buzz!<br>"; 
    }
    else if (i % 7 == 0) {
      oneLongString += i + " Boom!<br>"; 
    }
    // If it's a multiple of none of them, no message is appended with the number
    else {
      oneLongString += i + "<br>"; 
    }
  }
  // Returns oneLongString so that it can be output by the HTML page
  return oneLongString
}

// Calls the function so that it will return oneLongString at the end
$("#output").html(FizzBuzz());



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
