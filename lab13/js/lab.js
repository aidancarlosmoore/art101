// index.js - Lab 133: Loops
// Author: Aidan Moore
// Date: 5/21/25

// This function takes the user's name and uses a conditional to assign a Hogwarts house based on the length of their name
function FizzBuzz() {
  for (let i=0; i<200; i++) {
    if (i % 3 == 0) && (i % 5 == 0) && (i % 7 == 0) {
      oneLongString += num + " FizzBuzzBoom!<br>"; 
    }
    else if (i % 3 == 0) && (i % 5 == 0) {
      oneLongString += num + " FizzBuzz!<br>"; 
    }
    else if (i % 3 == 0) && (i % 7 == 0) {
      oneLongString += num + " FizzBoom!<br>"; 
    }
    else if (i % 5 == 0) && (i % 7 == 0) {
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
  if (remainder == 0) {
    // Updates the sorting message variable to match the house
    sortingMessage = "Congratulations, you have been sorted into the Gryffindor house, whose students are known for their bravery, chivalry, and determination.";
    // Outputs the sorting message in the house color
    $("#output").html("<h3>" + sortingMessage + "</h3>");
  }
  else if (remainder == 1) {
    sortingMessage = "Congratulations, you have been sorted into the Ravenclaw house, whose students are known for their intelligence, wit, and learning.";
    $("#output").html("<h5>" + sortingMessage + "</h5>");
  }
  else if (remainder == 2) {
    sortingMessage = "Congratulations, you have been sorted into the Hufflepuff house, whose students are known for their loyalty, hardwork, and fairness.";
    $("#output").html("<h6>" + sortingMessage + "</h6>");
  }
  else if (remainder == 3) {
    sortingMessage = "Congratulations, you have been sorted into the Slytherin house, whose students are known for for their ambition, cunning, and resourcefulness.";
    $("#output").html("<h4>" + sortingMessage + "</h4>");
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
