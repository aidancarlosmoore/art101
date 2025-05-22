// index.js - Lab 12: Conditionals
// Author: Aidan Moore
// Date: 5/21/25

// This function takes the user's name and uses a conditional to assign a Hogwarts house based on the length of their name
function sortingHat(str) {
  // Creates a variable with the value of the length of the user's inputted name
  let length = str.length;
  // Creates a variable that takes the remainder of the length of the user's name divided by 4
  let remainder = length % 4;
  if (remainder == 0) {
    let sortingMessage = "Congratulations, you have been sorted into the Gryffindor house, whose students are known for their bravery, chivalry, and determination.";
  }
  else if (remainder == 1) {
    let sortingMessage = "Congratulations, you have been sorted into the Ravenclaw house, whose students are known for their intelligence, wit, and learning.";
  }
  else if (remainder == 2) {
    let sortingMessage = "Congratulations, you have been sorted into the Hufflepuff house, whose students are known for their loyalty, hardwork, and fairness.";
  }
  else if (remainder == 3) {
    let sortingMessage = "Congratulations, you have been sorted into the Slytherin house, whose students are known for for their ambition, cunning, and resourcefulness.";
  }
  return sortingMessage;
}

$("#button").click(function() {
  let name = $("#input").val();
  console.log(name);
  let house = sortingHat(name);
  console.log(house)
  $("#output").html("<h1>" + house + "</h1>");
}); 

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
