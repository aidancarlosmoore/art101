// index.js - purpose and description here
// Author: Aidan Moore
// Date: 4/30/25

function getPlayerName() {
  let userName = window.prompt("Please enter your name", "Spencer Hastings");
  console.log("User's name: ", userName);

  let userNameArray = userName.split("");
  console.log("User's name as an array: ", userNameArray);

  let userNameArraySorted = userNameArray.sort();
  console.log("User's name in a sorted array: ", userNameArraySorted);

  let userNameSorted = userNameArraySorted.join("");
  return userNameSorted;

}

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
