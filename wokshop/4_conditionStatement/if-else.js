// if - else statement
var firstName = "John";
var civilStatus = "single";

// First style Boolean
if (civilStatus === "married") {
  console.log(firstName + " is married ");
} else {
  console.log(firstName + " is not married ");
}

// Secondstyle Boolean
var isMarried = true;
if (isMarried) {
  console.log(firstName + " is married ");
} else {
  console.log(firstName + " is not married ");
}

// Adapt this if else statement for the last challenge
var massJohn = 100; //kg
var heightJohn = 1.7; //meters

var massPob = 155; //kg
var heightPob = 1.85; //meters

var BMIsJohn = massJohn / (heightJohn * heightJohn);
var BMIsPob = massPob / (heightPob * heightPob);
console.log(BMIsJohn, BMIsPob);

if (BMIsJohn > BMIsPob) {
  console.log("BMIsJonh's John more than BMIsPobs Pob");
} else {
  console.log("BIMsJohn's less than BMIsPobs Pob");
}

switch (BMIsJohn > BMIsPob) {
  case true :
    console.log("BMIsJonh's John more than BMIsPobs Pob");
    break;
  case false :
    console.log("BIMsJohn's less than BMIsPobs Pob");
  default :
    console.log("something wrong")
}
