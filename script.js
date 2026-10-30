// Business Logic for PlaceLog ---------
function PlaceLog() {
    this.places = {};
    this.currentId = 0;
}

PlaceLog.prototype.addPlace = function (place) {
    place.id = this.assignId();
    this.places[place.id] = place;
};

PlaceLog.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
};

PlaceLog.prototype.findPlace = function (id) {
    if (this.places[id] !== undefined) {
        return this.places[id];
    }
    return false;
};

PlaceLog.prototype.deletePlace = function (id) {
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

Place.prototype.summary = function () {
    return this.location + " (" + this.timeOfYear + ")";
};

// User Interface Logic ---------
let placeLog = new PlaceLog();

function listPlaces(placeLogToDisplay) {
    let placesDiv = document.querySelector("div#places");
    placesDiv.innerText = null;
    const ul = document.createElement("ul");
    Object.keys(placeLogToDisplay.places).forEach(function (key) {
        const place = placeLogToDisplay.findPlace(key);
        const li = document.createElement("li");
        li.append(place.summary());
        li.setAttribute("id", place.id);
        ul.append(li);
    });
    placesDiv.append(ul);
}

function displayPlaceDetails(event) {
    const place = placeLog.findPlace(event.target.id);
    if (place) {
        document.querySelector(".location").innerText = place.location;
        document.querySelector(".landmarks").innerText = place.landmarks;
        document.querySelector(".time-of-year").innerText = place.timeOfYear;
        document.querySelector(".notes").innerText = place.notes;
        document.querySelector("div#place-details").removeAttribute("class");
    }
}

function handleFormSubmission(event) {
    event.preventDefault();
    const inputtedLocation = document.querySelector("input#new-location").value;
    const inputtedLandmarks = document.querySelector("input#new-landmarks").value;
    const inputtedTimeOfYear = document.querySelector("input#new-time-of-year").value;
    const inputtedNotes = document.querySelector("input#new-notes").value;
    let newPlace = new Place(inputtedLocation, inputtedLandmarks, inputtedTimeOfYear, inputtedNotes);
    placeLog.addPlace(newPlace);
    listPlaces(placeLog);

    document.querySelector("input#new-location").value = null;
    document.querySelector("input#new-landmarks").value = null;
    document.querySelector("input#new-time-of-year").value = null;
    document.querySelector("input#new-notes").value = null;
}

window.addEventListener("load", function () {
    document.querySelector("form#new-place").addEventListener("submit", handleFormSubmission);
    document.querySelector("div#places").addEventListener("click", displayPlaceDetails);
});