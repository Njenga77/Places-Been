// Business Logic for PlaceLog ---------
function PlaceLog() {
  this.places = {};
  this.currentId = 0;
}

PlaceLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
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