import $ from "jquery";
import debounce from "lodash/debounce";

let count = 0; // this is moved outside to ensure that the count is preserved btw the fxn calls
// Creating html elements
const p1 = $("<p>").text("Holberton Dashboard");
const p2 = $("<p>").text("Dashboard data for the students");
const button = $("<button>").text("Click here to get started");
const p3 = $("<p>").attr("id", "count");
const p4 = $("<p>").text("Copyright - Holberton School");

// Appending the paragraphs to the page body
$("body").append(p1, p2, button, p3, p4);

function updateCounter() {
  count++;
  $("#count").text(`${count} clicks on the button`); // Setting the content of the paragraph element
}

// Binding the debounce function to the click event on the button
button.on("click", debounce(updateCounter, 500));
