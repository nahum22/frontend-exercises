//ex2
let dayOfWeek = 2;

switch (dayOfWeek) {
  case 1:
    console.log("today we eat pasta");
    break;
  case 2:
    console.log("today we visit museuom");
    break;
  case 3:
    console.log("today we go to motel");
    break;
  case 4:
    console.log("today we go to crown plaza");
    break;
  case 5:
    console.log("today we visit paris");
    break;
  case 6:
    console.log("today its poe dat");
    break;
  case 7:
    console.log("end of trip");
    break;
  default:
}

//ex2

const themeColor = "";
let theme = null;
switch (themeColor) {
  case "light":
    theme = "white";
    break;
  case "dark":
    theme = "black";

    break;
  case "sea":
    theme = "blue";

    break;

  default:
    theme = "purple";
    break;
}

//ex3

const notificationStatus = null;
switch (notificationStatus) {
  case "new":
    console.log("You have new travel notifications");
    break;
  case "unread":
    console.log("You have unreaad travel notifications");
    break;
  case "unopened":
    console.log("you have unopened travel notifications");
    break;
  default:
    console.log("You have no new messages");
    break;
}
//ex4
const packageRating = null;

switch (packageRating) {
  case "Basic":
    console.log("this package include only basic hotels");
    break;
  case "Standard":
    console.log("the packge include standrd level hotels");
    break;
  case "Premium":
    console.log("the package included premium hotels and travel services");
    break;
  case "luxery":
    console.log(
      "the package also includes buisness level travel and traklin services"
    );
    break;
  default:
    break;
}

//ex5
const mealPlan = null;
switch (mealPlan) {
  case "Breakfest":
    console.log("eggs will be seervesd");
  case "Lunch":
    console.log("chicken will be seerved");
  case "dinner":
    console.log("cake will be served");
}

//ex6

const satisfactionScore = 80;
if (satisfactionScore > 10) {
  console.log(222);
}

switch (true) {
  case satisfactionScore > 90:
    console.log("highly satisfied");
    break;
  case satisfactionScore < 90:
  case satisfactionScore > 70:
    console.log("satisfied");
    break;
  default:
    console.log("unssetisfied");
}

//ex7
const travelMonth = null;

switch (travelMonth) {
  case 1:
    console.log("paris");
    break;
  case 2:
    console.log("rome");
    break;
  case 3:
    console.log("brazil");
    break;
  case 4:
    console.log("usa");
    break;
  case 5:
    console.log("canada");
    break;
  case 6:
    console.log("israel");
    break;
  case 7:
    console.log("japan");
    break;
  case 8:
    console.log("bankok");
    break;
  case 9:
    console.log("spain");
    break;
  case 10:
    console.log("greece");
    break;
  case 11:
    console.log("zimbaboe");
    break;
  case 12:
    console.log("thailand");
    break;
}

//ex8

const travelSeason = null;

switch (travelSeason) {
  case "Winter Advisory":
    console.log("go to visit in warm places");
  case "Spring Advisory":
    console.log("good time to visit in the country side");
  case "Summer Advisory":
    console.log("now it is a good time to visit canada");
  case "Fall Advisory":
    console.log("now it is a good time to visit japan");
  default:
    console.log("currently i have no good advice");
}
