// Switch Case is a strong condition more than if else statement 
var name = "Tle";
var job = "Doctor";

switch (job) {
  case "teacher":
    console.log(name + " is a teacher ");
    break;
  case "Doctor":
    console.log(name + " is a Doctor ");
    break;
  case "Learner":
    console.log(name + " is a learner");
    break;
  default:
    console.log(name + "your make something wrong!!");
}

// switch case
var money = 25;

switch (true) {
  case money <= 20:
    console.log("Lower");
    break;
  case money >= 25:
    console.log("More");
    break;
  default:
    console.log("Something is worng");
}
