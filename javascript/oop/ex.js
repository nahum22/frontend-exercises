//ex1
class Trip {
  #destination;
  #duration;
  #distance;
  #activities = [];
  constructor(destination, duration, distance, activities) {
    this.#destination = destination;
    this.#duration = duration;
    this.#distance = distance;
    this.#activities = activities;
  }

  get destination() {
    return this.#destination;
  }
  set destination(value) {
    if (strValue !== "" && typeof strValue === "string") {
      this.#destination = value;
    } else {
      throw Error("destination must be not empty string");
    }
  }

  get duration() {
    return this.#duration;
  }

  set duration(time) {
    if (typeof duration === "number" && duration > 0) {
      this.#duration = time;
    } else {
      throw Error("duration must be a positive number");
    }
  }

  get distance() {
    return this.#distance;
  }

  set distance(travelDistance) {
    if (typeof travelDistance === "number" && travelDistance > 0) {
      this.#distance = travelDistance;
    } else {
      throw Error("duration must be a positive number");
    }

    this.#distance = travelDistance;
  }

  AddActiviry(activity) {
    this.#activities.push(activity);
  }
  #calculateTripCost() {
    this.cost = this.#duration * 3 + this.#distance * 1;
  }

  get cost() {
    return this.cost;
  }

  displayDetailes() {
    return this.destination + " " + this.duration + this.distance;
  }
}

//ex2

class AdventureTrip extends Trip {
  #difficultyLevel;
  #gearList;

  constructor(
    destination,
    duration,
    distance,
    activities,
    difficultyLevel,
    gearList
  ) {
    super(destination, duration, distance, activities);

    this.#difficultyLevel = difficultyLevel;
    this.#gearList = difficultyLevel;
  }

  get gearList() {
    return this.#gearList;
  }
  get difficultyLevel() {
    return this.#difficultyLevel;
  }

  set diffficultyLevel(level) {
    if (["easy", "moderate", "hard"].indexOf(level) > 0) {
      this.#difficultyLevel = level;
    } else {
      throw Error("difficulty level can be only easy,moderate or hard");
    }
  }

  set gearList(newGear) {
    if (this.isArrayOfStrings(newGear)) {
    }
  }

  isArrayOfStrings(obj) {
    return Array.isArray(obj) && obj.every((item) => typeof item === "string");
  }

  displayDetailes() {
    return (
      super.displayDetailes +
      "difficultyLevel " +
      "and the gear is:" +
      this.#gearList.join(" ")
    );
  }
}

class ColturalTrip extends AdventureTrip {
  #language;
  #historicalSites;
  constructor(
    destination,
    duration,
    distance,
    activities,
    difficultyLevel,
    gearList,
    language,
    historicalSites
  ) {
    super(
      destination,
      duration,
      distance,
      activities,
      difficultyLevel,
      gearList
    );

    this.language = language;
    this.historicalSites = historicalSites;
  }

  set language(newLanguage) {
    if (typeof newLanguage == "string" && newLanguage != "") {
      this.#language = newLanguage;
    }
  }

  set historicalSites(site) {
    if (supeer.isArrayOfStrings(site)) {
      this.#historicalSites = site;
    }
  }

  displayDetailes() {
    return (
      super.displayDetailes() +
      this.language +
      " " +
      this.historicalSites.join(" ")
    );
  }
}

//ex3

class Traveler {
  #name;
  #plannedTrip = [];

  constructor(nameTraveler) {
    this.name = nameTraveler;
  }

  set name(newName) {
    if (typeof newName === "string" && newName != "string") {
      this.#name = newName;
    } else {
      throw Error("name should be a non empty string");
    }
  }
  get name() {
    return this.#name;
  }

  addTrip(trip) {
    if (
      trip instanceof Trip ||
      trip instanceof AdventureTrip ||
      trip instanceof ColturalTrip
    ) {
      this.#plannedTrip.push(trip);
    } else {
      throw Error("trip should be of class Trip or any of its subclasses");
    }
  }

  planActivity(trip, activity) {
    if ((this.#plannedTrip, indexOf(trip) > 0)) {
      this.AddActiviry(activity);
    } else {
      throw Error("trip should be  in planned trips");
    }
  }
  displayDetailes() {
    let result = "";
    for (trip of this.#plannedTrip) {
      result += this.#plannedTrip.displayDetailes();
    }
    return result;
  }
}
