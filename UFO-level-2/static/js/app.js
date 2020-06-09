var sightings = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);

//Use d3 to append one table row `tr` for each UFO Sighting object
sightings.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
    console.log(key, value)
    row.append("td").text(value);
    })
  });

// Assign the data from `data.js` to a descriptive variable

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
console.log("test");
// Prevent the page from refreshing
d3.event.preventDefault();

// Select the input element and get the raw HTML node
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");

// Get the value property of the input element
var inputDateValue = inputDate.property("value");

console.log(inputDateValue);
console.log(sightings);

// Use the form input to filter the data by blood type
var filteredDate = sightings.filter(ufosightings => ufosightings.datetime === inputDateValue);
// var filteredCity = sightings.filter(ufosightings => ufosightings.city === inputValue);

console.log(filteredDate);

d3.selectAll("tr").remove();


// if filteredDate >== 1
// then 


filteredDate.forEach(function(ufoSighting) {
  console.log(ufoSighting);
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(function([key, value]) {
  console.log(key, value)
  row.append("td").text(value);
  })
});

};



