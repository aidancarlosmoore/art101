// index.js - The purpose of this lab is to take in a value inputted by the user, and output it as a modified value using JavaScript and jQuery.
// Author: Aidan Moore
// Date: 5/18/25

function getPlayerName() {
  // TASK X: BONUS! This puts the player's name in lowercase so it can be sorted correctly
  let userNameCapitalized = userName.toLowerCase();
  console.log("User's name without capital letters: ", userName);
  
  // This splits the user's name from a string into an array
  let userNameArray = userNameCapitalized.split("");
  console.log("User's name as an array: ", userNameArray);
  
  // Now that it's an array, the user's name can be sorted
  let userNameArraySorted = userNameArray.sort();
  console.log("User's name in a sorted array: ", userNameArraySorted);

  // This joins back the sorted array back into a string in alphabetical order
  let userNameSorted = userNameArraySorted.join("");
  console.log("User's name sorted in string form: ", userNameSorted);

  // This retuns the player's sorted name so it can be displayed
  return userNameSorted;

}

// This creates a button that can be clicked.
$("#submit").click(function(){
  // This assigns a variable to the inputted value by the user.
  const slayName = $("#slay-name").val();

  // This creates a variable so that when it is called, it will call the getPlayerName function and sort the slay-name id.
  let slayNameSorted = getPlayerName(slayName);

  // This adds a new section to the "output" on the HTML file.
  $("#output").html('<div class="text"><p>' + slayNameSorted + '</p></div>');

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
