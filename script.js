// Business Logic for PlaceLog ---------
function PlaceLog() {
  this.places = {};
  this.currentId = 0;
}

// Business Logic for Places ---------
function Place(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}