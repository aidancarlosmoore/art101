// index.js - Lab 13: Loops
// Author: Aidan Moore
// Date: 5/21/25

// This function takes the user's name and uses a conditional to assign a Hogwarts house based on the length of their name
function FizzBuzz() {
  oneLongString = ""
  for (let i=0; i<200; i++) {
    if ((i % 3 == 0) && (i % 5 == 0) && (i % 7 == 0)) {
      oneLongString += i + " FizzBuzzBoom!<br>"; 
    }
    else if ((i % 3 == 0) && (i % 5 == 0)) {
      oneLongString += i + " FizzBuzz!<br>"; 
    }
    else if ((i % 3 == 0) && (i % 7 == 0)) {
      oneLongString += i + " FizzBoom!<br>"; 
    }
    else if ((i % 5 == 0) && (i % 7 == 0)) {
      oneLongString += i + " BuzzBoom!<br>"; 
    }
    else if (i % 3 == 0) {
      oneLongString += i + " Fizz!<br>"; 
    }
    else if (i % 5 == 0) {
      oneLongString += i + " Buzz!<br>"; 
    }
    else if (i % 7 == 0) {
      oneLongString += i + " Boom!<br>"; 
    }
    else {
      oneLongString += i + "<br>"; 
    }
  }
  console.log(oneLongString)
  $("#output").html(oneLongString);
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
