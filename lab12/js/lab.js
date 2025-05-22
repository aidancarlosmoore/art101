// index.js - Lab 12: Conditionals
// Author: Aidan Moore
// Date: 5/21/25

// This function takes the user's name and uses a conditional to assign a Hogwarts house based on the length of their name
function sortingHat(str) {
  // Creates a variable with the value of the length of the user's inputted name
  let length = str.length;
  // Creates a variable that takes the remainder of the length of the user's name divided by 4
  let remainder = length % 4;
  // Creates an empty sortingMessage variable so that it can be updated in the conditional
  let sortingMessage = "";
  // Checks the possible values of the remainder one by one to sort the user into a Hogwarts house
  if (remainder == 0) {
    sortingMessage = "Congratulations, you have been sorted into the Gryffindor house, whose students are known for their bravery, chivalry, and determination.";
    document.getElementById("house-color").style.color = "red";
  }
  else if (remainder == 1) {
    sortingMessage = "Congratulations, you have been sorted into the Ravenclaw house, whose students are known for their intelligence, wit, and learning.";
    document.getElementById("house-color").style.color = "blue";
  }
  else if (remainder == 2) {
    sortingMessage = "Congratulations, you have been sorted into the Hufflepuff house, whose students are known for their loyalty, hardwork, and fairness.";
    document.getElementById("house-color").style.color = "yellow";
  }
  else if (remainder == 3) {
    sortingMessage = "Congratulations, you have been sorted into the Slytherin house, whose students are known for for their ambition, cunning, and resourcefulness.";
    document.getElementById("house-color").style.color = "green";
  }
  // Returns the sortingMessage regardless which house the user has been sorted into
  return sortingMessage;
}

// This button allows the user to enter their name and get sorted into a Hogwarts house by using the sortingHat function
$("#button").click(function() {
  // Assigning a variable to the input the user puts
  let name = $("#input").val();
  console.log(name);
  // Uses the user's inputted name as the argument in the sortingHat function, assigning it to a variable so it can be called again
  let house = sortingHat(name);
  console.log(house);
  // Prints the user's sorting message in the output section of the HTML webpage.
  $("#output").html("#house-color" + house + "#house-color");
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
