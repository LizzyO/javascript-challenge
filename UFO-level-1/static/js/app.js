// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

//Use d3 to append one table row `tr` for each UFO Sighting object
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
    console.log(key, value)
    row.append("td").text(value);
    })
  });

// Assign the data from `data.js` to a descriptive variable
var sightings = data;

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

// Prevent the page from refreshing
d3.event.preventDefault();

// Select the input element and get the raw HTML node
var inputElement = d3.select("date");

// Get the value property of the input element
var inputValue = inputElement.property("datetime");

console.log(inputValue);

// Use the form input to filter the data by blood type

var filteredData = sightings.filter(ufo => ufo.datetime === inputValue);

};


