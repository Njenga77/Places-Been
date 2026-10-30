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