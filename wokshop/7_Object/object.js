var John = {
  firstName: "John",
  LastName: "Smith",
  birthYear: 1993,
  family: ["Jane", "Mark", "Bob"],
  calcAge: function () {
    this.age = 2018 - this.birthYear;
  },
};
John.calcAge();
console.log(John);

var day = 166 - 26;
console.log(day);

var eachdaay = day / 6;
console.log(eachdaay);

// Coding Chhalleng for object
var Tle = {
  fullname: "Wissanu Khongjandee",
  mass: 80,
  height: 1.73,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

var Mark = {
  fullName: "Mark Smith",
  mass: 90,
  height: 1.8,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

Tle.calcBMI(); // เรียกใช้ Function expresstion
Mark.calcBMI();
console.log(Tle, Mark);

if (Tle.calcBMI > Mark.calcBMI) {
  console.log(Tle.fullname + "has a height than BMI of " + Tle.bmi);
} else if (Mark.calcBMI > Tle.calcBMI) {
  console.log(Mark.fullName + "has a height than BMI of " + Mark.bmi);
} else {
  console.log("They have got a same BMI");
}

// Optional
var price = {
  yourOwn: "Wissanu",
  car: 15000,
  Motobike: 3000,
  tax: function () {
    this.totalTax = this.car * 1.07 + this.Motobike * 1.07;
    return this.totalTax;
  },
};

price.tax();
console.log(price);
