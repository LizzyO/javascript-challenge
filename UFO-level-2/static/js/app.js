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
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
// Prevent the page from refreshing
d3.event.preventDefault();

// Select the input element and get the raw HTML node
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
// var inputState = d3.select("#state");
// var inputCountry = d3.select("#country");
// var inputShape = d3.select("#shape");

// Get the value property of the input element
var inputDateValue = inputDate.property("value");
var inputCityValue = inputCity.property("value");
// var inputStateValue = inputState.property("value");
// var inputCountryValue = inputCountry.property("value");
// var inputShapeValue = inputShape.property("value");

console.log(inputDateValue);


// Use the form input to filter the data 
var filteredDate = sightings.filter(ufosightings => ufosightings.datetime === inputDateValue);
// var filteredCity = sightings.filter(ufosightings => ufosightings.city === inputCityValue);
// var filteredState = sightings.filter(ufosightings => ufosightings.state === inputStateValue);
// var filteredCountry = sightings.filter(ufosightings => ufosightings.country === inputCountryValue);
// var filteredShape = sightings.filter(ufosightings => ufosightings.shape === inputShapeValue);

// if (filteredDate === true) {
//   filteredData = filteredDate;
// } else {
//   filteredData = filteredCity;
// }

console.log(filteredDate);

d3.selectAll("tr").remove();

filteredDate.forEach(function(ufoSighting) {
  console.log(ufoSighting);
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(function([key, value]) {
  console.log(key, value)
  row.append("td").text(value);
  })
});

};



