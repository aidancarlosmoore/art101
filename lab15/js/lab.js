// index.js - Lab 15: AJAX
// Author: Aidan Moore
// Date: 5/29/25

const ajaxPokemon = {
  url: "https://pokeapi.co/api/v2/pokemon?limit=1000",
  // data: {},
  type: "GET",
  dataType: "json"
}

// An event listener that defines what happens when the user clicks the button
$("#pokemon-generator").click(function() {
  // This uses jQuery to call AJAX to generate a random Pokemon from the Pokemon library
  $.ajax(ajaxPokemon)
  // Callback for success - chained to xjax
  .done(function(data){
    // This sets up a variable as the results of the data so it can be adjusted
    let pokedex = data.results;

    // This generates a random index in the Pokedex so that it can be used to generate a pokemon
    let randomIndex = Math.floor(Math.random() * pokedex.length);
    
    // This uses the random index to store the name of the Pokemon at that index
    let randomPokemon = pokedex[randomIndex].name;

    // This adds the random Pokemon's name with the first letter capitalized to the output
    // It also adds the message that is displayed when the player chooses a Pokemon in battle
    $("#output").html("<h4>" + randomPokemon.charAt(0).toUpperCase() + randomPokemon.slice(1) + ", I choose you!");
  })

  // Callback for failure - chained to ajax
  .fail(function(xhr, status, errorThrown) {
    console.log(errorThrown + " Status:" + status);
  });

})



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
