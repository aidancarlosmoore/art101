// index.js - purpose and description here
// Author: Aidan Moore
// Date: 4/30/25

function getPlayerName() {
  // This has the player write enter their name and gives a default value in case they put nothing
  let userName = window.prompt("Please enter your name.", "Spencer Hastings");
  console.log("User's name: ", userName);

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

// This calls  the function and displays the final result with a message
document.writeln("Hey, it seems like this is your name: ",
    getPlayerName(), "</br>");



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
