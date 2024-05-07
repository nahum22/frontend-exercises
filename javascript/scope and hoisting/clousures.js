//ex1
function createTravelPlanner() {
  let travels = [];

  function getDestinations() {
    return travels;
  }

  function addDestination(destinationName) {
    travels.push(destinationName);
    console.log("destination has been added");
  }

  function removeDestination(destinationName) {
    const tempResult = [];
    let action = false; 
    for (let destination of travels) {
      if (destination === destinationName) {
        console.log("destination was deleted");
        action = true;
      } else {
        tempResult.push(destination);
      }
    }
    if (!action) {
      throw new Error("destination does not exist");
    }

    travels = [...tempResult];
    console.log(travels);
  }
  return {
    addDestination,
    removeDestination,
    getDestinations,
  };
}

//ex2

function createTravelPlannerWithDetails() {
  let travels = [];

  function getDestinationsWithDetails() {
    return travels;
  }

  function addDestinationWithDetails(destinationName, destinationDetails) {
    travels.push({
      destinationName: destinationName,
      destinationDetails: destinationDetails,
    });
    console.log("destination has been added");
  }

  function removeDestination(destinationName) {
    const tempResult = [];
    let action = false;
    for (let destination of travels) {
      if (destination.destinationName === destinationName) {
        console.log("destination was deleted");
        action = true;
      } else {
        tempResult.push(destination);
      }
    }
    if (!action) {
      console.log("destination does not exist");
    }

    travels = [...tempResult];
    console.log(travels);
  }
    addDestinationWithDetails,
    removeDestination,
    getDestinationsWithDetails,
  };
}

//ex3

function createSortableTravelPlanner() {
  let travels = [];

  function sortDestinations() {
    travels.sort((a, b) => {
      const vala = a.destinationName;
      const valb = b.destinationName;
      if (vala > valb) {
        return 1;
      }
      if (valb > vala) {
        return -1;
      }
      return 0;
    });
    console.log(travels);
  }

  function getDestinationsWithDetails() {
    return travels;
  }

  function addDestinationWithDetails(destinationName, destinationDetails) {
    travels.push({
      destinationName: destinationName,
      destinationDetails: destinationDetails,
    });
    console.log("destination has been added");
  }

  function removeDestination(destinationName) {
    const tempResult = [];
    let action = false;
    for (let destination of travels) {
      if (destination.destinationName === destinationName) {
        console.log("destination was deleted");
        action = true;
      } else {
        tempResult.push(destination);
      }
    }
    if (!action) {
      console.log("destination does not exist");
    }

    travels = [...tempResult];
    console.log(travels);
  }
  return {
    addDestinationWithDetails,
    removeDestination,
    getDestinationsWithDetails,
    sortDestinations,
  };
}

//ex4

function createSortableTravelPlanner() {
  let travels = [];

  function getDestinationsWithDetails() {
    return travels;
  }

  function searchDestination(destinationName) {
    for (let destination of travels) {
      if (destination.destinationName === destinationName) {
        console.log("object was found");
        return destination;
      }
    }
    console.log("object was not found");
    return null;
  }

  function addDestinationWithDetails(destinationName, destinationDetails) {
    travels.push({
      destinationName: destinationName,
      destinationDetails: destinationDetails,
    });
    console.log("destination has been added");
  }

  function removeDestination(destinationName) {
    const tempResult = [];
    let action = false; // Declare action with let
    for (let destination of travels) {
      // Declare destination with let
      if (destination.destinationName === destinationName) {
        console.log("destination was deleted");
        action = true;
      } else {
        tempResult.push(destination);
      }
    }
    if (!action) {
      console.log("destination does not exist");
    }

    travels = [...tempResult];
    console.log(travels);
  }
  return {
    addDestinationWithDetails,
    removeDestination,
    getDestinationsWithDetails,
    searchDestination,
  };
}
