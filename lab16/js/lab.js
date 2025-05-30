// index.js - Lab 16: JSON and APIs
// Author: Aidan Moore
// Date: 5/29/25

$.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/777/info.0.json",
    // data: {},
    type: "GET",
    dataType : "json",
    // This details what happens when the API call is successful
    success: function(data) {
        // Stores the data of the comic book as a variable that can be manipulated later
        let comicObj = data;
        // Setting up a variable as the "title" key from the API
        let comicTitle = comicObj.title;
        // Setting up a variable that combines the "month", "day", and "year" keys, to make an overall date
        let comicDate = (comicObj.month + "/" + comicObj.day + "/" + comicObj.year);
        // Setting up a variable that contains the image link from the API, so it can be appended to the output
        let comicCover = comicObj.img;
        // Converts the cover image to HTML so it can be appended (code inspired by in-class practice 5/29)
        let coverHTML = `<img src='${comicCover}'>`;

        // Outputs the comic book name with a header styling to the "results" section of HTML
        $("#output").html("<h4>" + comicTitle);
        // Outputs the comic book release date with the subtitle styling from the lab sites to the "results" section of HTML
        $("#output").append(`<p class="minor-selection">${comicDate}</p>`);
        // Outputs the comic book cover below the name and release date in the "results" section of HTML
        $("#output").append(coverHTML);
    },
    // This details what happens when the API call is successful
    error: function(xhr, status, errorThrown) { 
        console.log(errorThrown + "Status: " + status);
    }
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
