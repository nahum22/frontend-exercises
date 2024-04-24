// 1. City Name Capitalization
// Input: "new york"
const result = [];
const city = "new york";
city_array = city.split(" ");
city_array.forEach((element) => {
  result.push(element[0].toUpperCase() + element.slice(1));
});

const result_exercise = result.join(" ");

// 2. Flight Search
const cities = ["New York", "Tokyo", "Paris", "London"];
const results = [];

for (i = 0; i < cities.length; i++) {
  if (cities[i].toUpperCase().includes("YO")) {
    results.push(cities[i]);
  }
}

// 3. Flight Code Format
// Input: "JFK-123"

const input = "JFK-123";
const array_input = input.split("-");
const result_reversed = [];

for (i = 0; i < array_input.length; i++) {
  result_reversed.push(array_input[array_input.length - i - 1]);
}

const final_result = result_reversed.join("-");

// 4. Flight Duration
// Input: "3h 45min"

const input_result = "3h 45min".replace("h", " hours and");
// 5. Travel Agency Acronym
// Input: "Global Travel Agency"
const input__ = "Global Travel Agency";
let new_name = "";
input__array = input__.split(" ");

for (i = 0; i < input__array.length; i++) {
  new_name += input__array[i][0];
}

// 6. Location Slug
// Input: "San Francisco"

const city_name = "San Francisco";
const user_friendly = city_name.toLocaleLowerCase().replace(" ", "-");

// 7. Itinerary Trimming
// Input: "Visit the Golden Gate Bridge, take a walk in Golden Gate Park, see Alcatraz Island", 50

const desc =
  "Visit the Golden Gate Bridge, take a walk in Golden Gate Park, see Alcatraz Island";

const word_array = desc.split(" ");

console.log(word_array);
let temp_length = 0;
const length_length = 50;
let resulted_string = "";

for (i = 0; i < word_array.length; i++) {
  if (temp_length + word_array[i].length + 1 < length_length) {
    resulted_string += word_array[i] + " ";
    temp_length = temp_length + word_array[i].length + 1;
  } else {
    break;
  }
}

console.log(resulted_string);

// 8. Travel Wishlist
string_dest = "Paris, Tokyo, New York";

string_arr = string_dest.aplit(",");
