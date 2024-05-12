class Destination {
  #name;
  #country;
  #description;
  #visitorRatings = [];

  constructor(name, country, description) {
    this.name = name;
    this.country = country;
    this.description = description;
  }

  get name() {
    return this.#name;
  }
  get visitorRatings() {
    return this.#visitorRatings;
  }

  get country() {
    return this.#country;
  }

  get description() {
    return this.#description;
  }

  set name(name) {
    if (typeof name === "string" && name.length > 0) {
      this.#name = name;
    } else {
      throw Error("value is invalid");
    }
  }

  set country(country) {
    if (typeof country === "string" && country.length > 0) {
      this.#country = country;
    } else {
      throw Error("value is invalid");
    }
  }

  set description(description) {
    if (typeof description === "string" && description.length < 500) {
      this.#description = description;
    } else {
      throw Error("value is invalid");
    }
  }

  addRating(number) {
    if (typeof number === "number" && number >= 0 && number <= 10) {
      this.#visitorRatings.push(number);
    }
  }

  getAverageRatings() {
    let average =
      this.#visitorRatings.reduce((a, b) => a + b, 0) /
      this.#visitorRatings.length;
    return average;
  }

  displayDetails() {
    console.log(
      this.description + " " + this.country + " " + this.getAverageRatings()
    );
  }

  typeOfDestination() {
    return "General Destination";
  }
}

class CulturalDestination extends Destination {
  #colturalSignificance;

  get colturalSignificance() {
    return this.#colturalSignificance;
  }

  set colturalSignificance(significance) {
    if (typeof significance === "string" && significance.length > 0) {
      this.#colturalSignificance = significance;
    } else {
      throw Error("invalid value");
    }
  }

  displayDetailes() {
    console.log(
      this.description +
        " " +
        this.country +
        " " +
        super.getAverageRatings() +
        " " +
        this.ColturalDestination
    );
  }
}

class AdventureDestination extends Destination {
  #adventureType;

  get adventureType() {
    return this.adventureType;
  }

  set adventureTYpe(adventure) {
    if (typeof adventure === "string" && adventure.length < 500) {
      this.adventureType = adventure;
    } else {
      throw Error("value is invalid");
    }
  }
  typeOfDestination() {
    return "adventure destination";
  }
}

class TravelAgency {
  destinations = [];

  addDestination(destinaiton) {
    if (destinaiton instanceof Destination) {
      this.destinations.push(destinaiton);
    } else {
      throw Error("invalid destination");
    }
  }
  overallAverageRating() {
    let result = [];
    for (let destination of this.destinations) {
      result = [...result, ...destination.visitorRatings];
    }
    return result.reduce((a, b) => a + b) / result.length;
  }
}
