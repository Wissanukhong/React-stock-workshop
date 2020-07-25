// Hoist คือการประการ Function และการประกาศตัวแปรแบบ var จะมีการยกค่าจากตำแหน่งที่อยู่ ขึ้นไปยังตำแหน่งที่สูงกว่าด้วย 

calculateAge(1990);

// function declaration can use hoisting 
function calculateAge (year) {
    console.log(2020 - year);
}

calculateAge(1993);

// Expression function can not use hoisting
// retirement(1993) can not use hoisting 

// retirement(1993) Result Uncaught TypeError: retirement is not a function

var retirement = function(year) {
    console.log(60 - (2020-year))
}

retirement(1993) //33

// variables 
console.log(age); // undefined 
var age = 27;
console.log(age)

// declaration function 
function foo () {
    var age = 65;
    console.log(age); // 65
}

foo() 
console.log(age); // 27 

