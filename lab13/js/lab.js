// index.js - Lab 133: Loops
// Author: Aidan Moore
// Date: 5/21/25

// This function takes the user's name and uses a conditional to assign a Hogwarts house based on the length of their name
function FizzBuzz() {
  for (let i=0; i<200; i++) {
    if ((i % 3 == 0) && (i % 5 == 0) && (i % 7 == 0)) {
      oneLongString += num + " FizzBuzzBoom!<br>"; 
    }
    else if ((i % 3 == 0) && (i % 5 == 0)) {
      oneLongString += num + " FizzBuzz!<br>"; 
    }
    else if ((i % 3 == 0) && (i % 7 == 0)) {
      oneLongString += num + " FizzBoom!<br>"; 
    }
    else if ((i % 5 == 0) && (i % 7 == 0)) {
      oneLongString += num + " BuzzBoom!<br>"; 
    }
    else if (i % 3 == 0) {
      oneLongString += num + " Fizz!<br>"; 
    }
    else if (i % 5 == 0) {
      oneLongString += num + " Buzz!<br>"; 
    }
    else if (i % 7 == 0) {
      oneLongString += num + " Boom!<br>"; 
    }
    else {
      oneLongString += num + "<br>"; 
    }
  } 
}




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
