// Business Logic for PlaceLog ---------
function PlaceLog() {
  this.places = {};
  this.currentId = 0;
}

PlaceLog.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
};

PlaceLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

PlaceLog.prototype.findPlace = function(id) {
  if (this.places[id] !== undefined) {
    return this.places[id];
  }
  return false;
};

PlaceLog.prototype.deletePlace = function(id) {
  if (this.places[id] === undefined) {
    return false;
  }
  delete this.places[id];
  return true;
};

// Business Logic for Places ---------
function Place(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

Place.prototype.summary = function() {
  return this.location + " (" + this.timeOfYear + ")";
};

// User Interface Logic ---------
let placeLog = new PlaceLog();

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedLocation = document.querySelector("input#new-location").value;
  const inputtedLandmarks = document.querySelector("input#new-landmarks").value;
  const inputtedTimeOfYear = document.querySelector("input#new-time-of-year").value;
  const inputtedNotes = document.querySelector("input#new-notes").value;
  let newPlace = new Place(inputtedLocation, inputtedLandmarks, inputtedTimeOfYear, inputtedNotes);
  placeLog.addPlace(newPlace);
  console.log(placeLog.places);
}

window.addEventListener("load", function() {
  document.querySelector("form#new-place").addEventListener("submit", handleFormSubmission);
});