const travelPlanner = {
  locations: [],
};

//ex2

function addLocation(locaione) {
  if (!travelPlanner.locations.includes(locaione)) {
    travelPlanner.locations.push(locaione);
  } else {
    console.log("location exist");
  }
}

const location = {
  name: "paris",
  description: "travel description",
  bestTimeToVisit: "october",
};
const location2 = {
  name: "aparis",
  description: "travel description",
  bestTimeToVisit: "october",
};

//ex3
function deleteLocation(_name) {
  let i = 0;
  for (item of travelPlanner.locations) {
    if (item.name == _name) {
      delete travelPlanner.locations[i];
    }
    i++;
  }
}

//ex4
//searching_locations

function searchLocation(_name) {
  let i = 0;
  for (item of travelPlanner.locations) {
    if (item.name == _name) {
      return item;
    }
    i++;
  }
  console.log("item not found");
}

//ex5
//sort locations

function sortLocations() {
  travelPlanner.locations.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (b.name > a.name) {
      return -1;
    }
    return 0;
  });
}

//ex6-edit location

function edit_location(name, description) {
  let i = 0;
  for (item of travelPlanner.locations) {
    if (item.name == name) {
      item.description = description;
      return true;
    }
    i++;
  }
  console.log("name not found");
}

//ex7

function show_all_locations() {
  for (item of travelPlanner.locations) {
    console.log(item.name + " " + item.description);
  }
}

//ex8
function filterLocations(strExamine) {
  result = [];
  for (item of travelPlanner.locations) {
    if (item.name.includes(strExamine)) {
      console.log(77);
      result.push(item);
    }
  }
  return result;
}

//ex9
const location3 = {
  name: "paris",
  description: "travel description",
  bestTimeToVisit: "october",
  ratings: [1, 2, 3, 4, 5, 5],
};
const location4 = {
  name: "aparis",
  description: "travel description",
  bestTimeToVisit: "october",
  ratings: [1, 2, 3, 4, 5, 5000000000],
};

function rateLocation(name, rating) {
  if (rating == null) {
    return false;
  }

  for (item of travelPlanner.locations) {
    if (item.name == name && rating >= 0 && rating < 6) {
      item.ratings.push(rating);
      return true;
    }
  }
}

addLocation(location3);
addLocation(location4);

function getAverageRatings(name) {
  let sum = 0;
  let i = 0;
  for (item of travelPlanner.locations) {
    if (item.name == name) {
      for (rating of item.ratings) {
        sum += rating;
        i += 1;
      }

      return sum / i;
    }
  }
}

//ex10 get top rated locations

function getTopRatedLocation() {
  let dest = travelPlanner.locations[0].name;
  let score = getAverageRatings(dest);
  let temp = "";
  let tempScore = 0;
  for (let i2 = 1; i2 < travelPlanner.locations.length; i2++) {
    temp = travelPlanner.locations[i2].name;
    tempScore = getAverageRatings(temp);
    if (tempScore > score) {
      score = tempScore;
      dest = temp;
      tempScore = 0;
      temp = "";
    }

    tempScore = 0;
    temp = "";
  }

  return dest;
}

console.log(getTopRatedLocation());

//ex9
//rateLocation
//rateLocation
