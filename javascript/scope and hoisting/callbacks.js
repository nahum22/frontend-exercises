function processTravelPlans(travelPlan, callBack) {
  if (typeof travelPlan !== "Array") {
    console.log("Expected an array of travel plans");
  }

  for (travel of travelPlan) {
    if (
      typeof travel.id !== "undefined" &&
      typeof travel.city !== "undefined" &&
      typeof travel.activities !== "undefined"
    ) {
      throw new Error(
        `Travel plan with ID ${travel.id} is not in the right structure`
      );
    }
  }

  const newTravelPlans = JSON.parse(JSON.stringify(travelPlan));

  for (let i = 0; i < newTravelPlans.length; i++) {
    newTravelPlans[i] = callBack(newTravelPlans[i]);
  }

  return newTravelPlans;
}

//ex2

function processActivities(travelPlan, callBack) {
  if (typeof travelPlan !== "Array") {
    throw new Error("Expected an array of travel plans");
  }

  for (travel of travelPlan) {
    if (
      typeof travel.id !== "undefined" &&
      typeof travel.name !== "undefined" &&
      typeof travel.duration !== "undefined"
    ) {
      throw new Error(
        `activity with ID ${travel.id} is not in the right structure`
      );
    }
  }

  const newTravelPlans = JSON.parse(JSON.stringify(travelPlan));

  for (let i = 0; i < newTravelPlans.length; i++) {
    newTravelPlans[i] = callBack(newTravelPlans[i]);
  }

  return newTravelPlans;
}

//ex3

function processActivities(travelPlan, callBack) {
  if (
    typeof travelPlan.id !== "undefined" &&
    typeof travelPlan.city !== "undefined" &&
    typeof travelPlan.activities !== "undefined"
  ) {
    throw new Error(
      `activity with ID ${travel.id} is not in the right structure`
    );
  }

  let newTravelPlans = JSON.parse(JSON.stringify(travelPlan));

  newTravelPlans = callBack(newTravelPlans);

  return newTravelPlans;
}
