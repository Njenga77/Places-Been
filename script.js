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