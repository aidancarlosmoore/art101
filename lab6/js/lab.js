// index.js - purpose and description here
// Author: Aidan Moore
// Date: 23 April 2025

// Creating an array with the modes of transporation I use
let myTransport = ["My Car", "Bus", "Friend's Car", "Lyft", "Bike", "Walking"]

// Creating an object storing the data of my car, my main mode of transportation
let myMainRide = { 
  make: "Kia", 
  model: "Rio", 
  color: "Gray", 
  year: "2021", 
  // Defines a function so that the age is calculated as myMainRide is called
  age: function() {
      return 2025 - this.year
  }
}

document.writeln("My Forms of Transportation: " + myTransport + "<br>")
document.writeln("My Main Form of Transportation: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");


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
