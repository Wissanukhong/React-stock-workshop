// Function 
function yearOld (yearBirth) {
    return 2020 - yearBirth;
}

var yearJohn = yearOld(1993);
console.log(`John is ${yearJohn} years `)

function yearRetirement (year, name) {
    var age = yearOld(year);
    var retirement = 60 - age;
    if(retirement > 0 ){
        console.log(name + " is " + age + " years old  is working now!");
    } else if (retirement < 0){
        console.log(name + " is " + age + " years old  is alredry retire now!")
    }
}

yearRetirement(1993, "Tle");
yearRetirement(1950, "Nan");
yearRetirement(1913, "Bee");

function yearOld1 (name1, yearBirth1) {
    var yearNow1 = 2020 - yearBirth1
    console.log(name1 + yearNow1)
}

yearOld1("john", 1993)

function yearOld (yearBirth) {
    return 2020 - yearBirth;
}

var yearJohn = yearOld(1993);
console.log(`John is ${yearJohn} years `)





// function calculator your age
function yearNow (birth) {
    return 2020 - birth 
}

console.log(yearNow(1990))

// function star
function star (x, y) {
    var total = x * y
    var c ;
    if (total > 100 ) {
        c = 2;
    } else if (total >= 100 && total < 200) {
        c = 5;
    }
    return c * total;
}

// var sumary = star(5, 20)
// console.log(sumary);
console.log(star(5, 20));


// function expression
var yourJob = function (job, name) {
    switch (job) {
        case "Teacher" :
            return name + " Your job can not get the money";
            break;
        case "Driver" :
            return name + " Your job can get the money";
            break;
        case "Designer"  :
            return` ${name}  Your job can not get the money`;
            break;
        default:
            return name + " Your are the frammer";
    }
}

console.log(yourJob("Designer", "Tle"))
console.log(yourJob("Teacher", "Tle"))
console.log(yourJob("Driver", "Tle"))

//function declaration 
function getJob (Name, job) {
    if(job === "web"){
        console.log(`${Name} your job is a web developer`);
    }else {
        console.log(`${Name} your job is not a web developer `);
    };
}

console.log(getJob("Chai", "web"));
console.log(getJob("Mark", "Web"));

// function experssion
var calculate = function (x, y) {
    return x + y;
}

console.log(calculate(15,5))