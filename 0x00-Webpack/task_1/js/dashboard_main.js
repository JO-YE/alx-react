import $ from "jquery";
import debounce from "lodash/debounce";

let count = 0; // this is moved outside to ensure that the count is preserved btw the fxn calls

// Appending the html elements to the page body
$("body").append("<p>Holberton Dashboard</p>");
$("body").append("<p>Dashboard data for the students</p>");
$("body").append("<button>Dashboard data for the students</button>");
$("body").append("<p id='count'></p>");
$("body").append("<p>Copyright - Holberton School</p>");

function updateCounter() {
  $("button").on("click", () => count++);
  $("#count").text(`${count} clicks on the button`); // Setting the content of the paragraph element
}

// Binding the debounce function to the click event on the button
debounce(updateCounter, 500);
