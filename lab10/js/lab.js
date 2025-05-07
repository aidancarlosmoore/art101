// index.js - Lab 10: JavaScript for the Web
// Author: Aidan Moore
// Date: 5/7/25

function generateRandomText() {
  const text = "I'm waiting on a wish, beneath a thousand treetops, and as the silver sky stops, I send a whisper to the water. Waiting on a wish, holding out for someday, hoping somehow, some way, I'll become my father's daughter. I close my eyes and see the girl I'm meant to be. Is she a part of me I've yet to find? Wondering, will she appear? Or will I be forever here waiting on a wish?";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Gets a random starting index to slice the "Waiting on a Wish" lyrics
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generates the "Waiting on a Wish" lyrics in a random order
  return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#initiate-conversation").click(function(){
  // get new fake dialogue
  const newText = generateRandomText();
  // append a new div to our output div
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');

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
