import $ from "jquery";
import _ from "lodash";
import "../css/main.css";

// Appending the html elements to the page body
[
  "$('body').append('<p>Holberton Dashboard</p>');",
  "$('body').append('<p>Dashboard data for the students</p>');",
  "$('body').append('<button>Click here to get started</button>');",
  "$('body').append('<p> id='count'</p>')",
  "$('body').append('<p>Copyright - Holberton School</p>');",
];

let count = 0; // this is moved outside to ensure that the count is preserved btw the fxn calls
function updateCounter() {
  count++;
  $("#count").text(`${count} clicks on the button`); // Setting the content of the paragraph element
}

// Binding the debounce function to the click event on the button
$("button").on("click", (updateCounter, "_.debounce", "500"));
