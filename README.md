# Places You've Been

A website for keeping track of the places you've visited. Each place is an object with a location, landmarks, time of year and notes. Click a place's name to see its details.

## Setup
1. Clone this repository.
2. Open `index.html` in your browser.
3. To run the tests below, open DevTools, paste the contents of `scripts.js` into the console, then run each **Code** line.

## Technologies
HTML, CSS, Bootstrap 5, JavaScript (constructors, prototypes, DOM, event delegation)

## Tests

**Describe:** PlaceLog()

**Test:** It should create a PlaceLog object with an empty places object and a currentId of 0.
**Code:** `let placeLog = new PlaceLog();`
**Expected Output:** `PlaceLog { places: {}, currentId: 0 }`

---

**Describe:** Place()

**Test:** It should create a Place object with location, landmarks, timeOfYear and notes properties.
**Code:** `let place = new Place("Nairobi", "Uhuru Park, KICC", "December", "Great food");`
**Expected Output:** `Place { location: "Nairobi", landmarks: "Uhuru Park, KICC", timeOfYear: "December", notes: "Great food" }`

---

**Describe:** Place.prototype.summary()

**Test:** It should return the place's location with its time of year in brackets.
**Code:** `place.summary();`
**Expected Output:** `"Nairobi (December)"`

---

**Describe:** PlaceLog.prototype.assignId()

**Test:** It should increase currentId by 1 and return it each time it is called.
**Code:** `placeLog.assignId();`
**Expected Output:** `1` (then `2` on the next call)

---

**Describe:** PlaceLog.prototype.addPlace()

**Test:** It should give a place an id and store it in places under that id.
**Code:** `placeLog.addPlace(place); placeLog.places[place.id];`
**Expected Output:** `Place { location: "Nairobi", landmarks: "Uhuru Park, KICC", timeOfYear: "December", notes: "Great food", id: 1 }`

---

**Describe:** PlaceLog.prototype.findPlace()

**Test:** It should return the place that matches the id.
**Code:** `placeLog.findPlace(1);`
**Expected Output:** `Place { location: "Nairobi", landmarks: "Uhuru Park, KICC", timeOfYear: "December", notes: "Great food", id: 1 }`


**Test:** It should return false if no place has that id.
**Code:** `placeLog.findPlace(99);`
**Expected Output:** `false`

---

**Describe:** PlaceLog.prototype.deletePlace()

**Test:** It should remove the place with the matching id and return true.
**Code:** `placeLog.deletePlace(1);`
**Expected Output:** `true` (and `placeLog.places` is now `{}`)


**Test:** It should return false if no place has that id.
**Code:** `placeLog.deletePlace(99);`
**Expected Output:** `false`


**Test:** It should never reuse a deleted place's id.
**Code:** `placeLog.currentId;` (after deleting place 1 when 2 places were added)
**Expected Output:** `2`