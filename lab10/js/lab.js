// index.js - Lab 10: JavaScript for the Web
// Author: Aidan Moore
// Date: 5/7/25

// This function sets up the text and minimum and maximum lengths that will be cut and re-arranged by the random function
function generateSnowWhiteLyrics() {
  const text = "Little girl at a lonely well, with the same little tale to tell. Feeling trapped by the walls that hold her, feeling stuck in the story they've told her. Another day where she fades away, never daring to disobey. So she's dreaming all alone, sharing secrets with the stone. My father told me long ago I braved a bitter storm of snow. Is that a girl I'll ever know again? I'm waiting on a wish, beneath a thousand treetops and as the silver sky stops, I send a whisper to the water. Waiting on a wish, holding out for someday, hoping somehow, some way, I'll become my father's daughter. I close my eyes and see the girl I'm meant to be. Is she a part of me I've yet to find? Wondering, will she appear? Or will I be forever here waiting on a wish? Little girl by a wild wood, how she tries to be someone good, but in the shadow the kingdom's caught in somehow fairness is long forgotten. So will she rise or bow her head? Will she lead or just be led? Is she the girl she always said she'd be? I'm waiting on a wish, beneath a thousand treetops and as the silver sky stops, I long to leave the walls behind me. Waiting on a wish, holding out for someday, hoping somehow, some way, there comes a miracle to find me. I close my eyes and see the girl I'm meant to be. Is she a part of me I've had to hide? Wondering, will she appear? Or will I spend another year waiting on a wish? They say 'all you have to do to make your wish come true is let it echo, echo, echo, echo. Your voice will carry through and bring that dream to you just like an echo, echo, echo.' Well, I can hear the echo loud and clear, but I'm still waiting here. Waiting on a wish, beyond a whisper to the water. Waiting on a wish, is it almost someday? Can I somehow, some way learn to be my father's daughter? Someone who could finally start, start speaking with a fearless heart. Someone who just might be brave, someone no one needs to save. Well, I can always dream, but then I wake up and it's me again. Waiting on a wish, waiting on a wish, waiting on a wish.";
  const min = 10;
  const max = 500;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Gets a random starting index to slice the "Waiting on a Wish" lyrics
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generates the "Waiting on a Wish" lyrics in a random order
  return text.slice(randStart, randStart + randLen);
}

// Makes it so the button can be clicked
$("#initiate-song").click(function(){
  // Assigning a variable to previously created function so it can be called
  const nextLyrics = generateSnowWhiteLyrics();
  // Adding a new randomized set of lyrics to the output section of results
  $("#output").append('<div class="text"><p>' + nextLyrics + '</p></div>');

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
