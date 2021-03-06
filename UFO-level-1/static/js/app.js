//create variable for data.js
var sightings = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);

//Use d3 to append one table row `tr` for each UFO Sighting object in the data.js
sightings.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
    console.log(key, value)
    row.append("td").text(value);
    })
  });

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers for both enter and click
button.on("click", runEnter);
form.on("submit",runEnter);

// Event handler function for the form
function runEnter() {

// Prevent the page from refreshing
d3.event.preventDefault();

// Select the input element and get the raw HTML node
var inputDate = d3.select("#datetime");

// Get the value property of the input element
var inputDateValue = inputDate.property("value");

console.log(inputDateValue);
console.log(sightings);

// Use the form input to filter the data by datetime
var filteredDate = sightings.filter(ufosightings => ufosightings.datetime === inputDateValue);

console.log(filteredDate);

//select all the row that were created and remove
d3.selectAll("tr").remove();

//loop through new filtered data 
filteredDate.forEach(function(ufoSighting) {
  console.log(ufoSighting);
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(function([key, value]) {
  console.log(key, value)
  row.append("td").text(value);
  })
});

};



