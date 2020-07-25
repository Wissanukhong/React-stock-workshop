// This
// console.log(this)
calculateAge(1993);

function calculateAge(year) {
  console.log(2020 - year);
  console.log(this);
}


var john = {
  name: "John",
  yearOfBirth: 1990,
  calculateAge: function () {
    console.log(this); // john object
    console.log(2020 - this.yearOfBirth); //this.yearOfBirth ทำหน้าที่เหมือน john.yearOfBirth

    // Method
    function innerFunction() {
        console.log(this) // window object
    }
    innerFunction();
  },
};

john.calculateAge();


// method Borrowing คือการเรียกใช้ Function จาก Object หรือว่า Function อื่น
// ตัวอย่าง หากเราไม่ Borrow function เราจะต้องเขียน function ขึ้นมาเอง หรือว่า copy Function มาใช้งาน ตามตัวอย่าง 
var mike = {
    name: "Mike",
    yearOfBirth: 1990,
    // จะเห็นว่า function นี้มีลักษณะเหมือนกันกับ john 
    calculateAge: function () {
        console.log(2020 - this.yearOfBirth);
    }
};

mike.calculateAge()

//ตัวอย่างการเขียนแบบ Method Borrowing
var tle = {
    name: "Tle",
    yearOfBirth: 1993,
};

// assigned the function
tle.calculateAge = john.calculateAge;
tle.calculateAge()



