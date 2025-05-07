// index.js - Lab 9: Libraries and jQuery
// Author: Aidan Moore
// Date: 5/7/25

$("#Challenge").append("<button id='button-challenge'>Make Special</button>");
$("#Problems").append("<button id='button-problems'>Make Special</button>");
$("#Results").append("<button id='button-results'>Make Special</button>");

$("#button-challenge").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#Challenge").toggleClass("special");
});

$("#button-problems").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#Problems").toggleClass("special");
});

$("#button-results").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#Results").toggleClass("special");
});

document.writeln("Hi")

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
