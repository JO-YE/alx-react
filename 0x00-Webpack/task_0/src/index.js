import $ from "jquery";
// Creating three paragraph
const p1 = $("<p>").text("Holberton Dashboard");
const p2 = $("<p>").text("Dashboard data for the students");
const p3 = $("<p>").text("Copyright - Holberton School");

// Appending the paragraphs to the page body
$("body").append(p1, p2, p3);
