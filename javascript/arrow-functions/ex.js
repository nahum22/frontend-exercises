
// 1. Simple Arrow Function Conversion
function getDestinationName(destination) {
  return destination.name;
}

const myFunc=(destination)=>{return destination.name}



// 2. Control Flow in Arrow Functions
const newFunc=(status)=> {
  if (status === "Visited") {
    return "You have visited this place";
  } else if (status === "Upcoming") {
    return "You are planning to visit this place";
  } else {
    return "This place is in your wishlist";
  }
}

// 3. Arrow Functions with Multiple Operations
const newFunc2 = (destinations)=> {
  let totalBudget = 0;
  for (let i = 0; i < destinations.length; i++) {
    totalBudget += destinations[i].budget;
  }
  return 'Total travel budget is ' + totalBudget;
}

// 4. Arrow Functions as Callbacks
const sortedDestinations = destinations.sort((a,b)=>
    a-b
);

// 5. Implicit Return with Arrow Functions
function getDestinationNames(destinations) {
  return destinations.map((destination)=> 
 destination.name
  );
}