// index.js - Lab 9: Libraries and jQuery
// Author: Aidan Moore
// Date: 5/7/25

// Creating a button class called sillify and assigning each button to that class
$("#Challenge").append("<button class='sillify' data-name='Challenge'>Sillify</button>");
$("#Problems").append("<button class='sillify' data-name='Problems'>Sillify</button>");
$("#Reflection").append("<button class='sillify' data-name='Reflection'>Sillify</button>");
$("#Results").append("<button class='sillify' data-name='Results'>Sillify</button>");

// This function uses the Sillify class to change each element of that class
// It accesses the parent of each section, aka the box the button is in, and changes its class
$(".sillify").click(function(){
  let name = $(this).parent().attr("id")
  $("#" + name).toggleClass("sillify");
})

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
