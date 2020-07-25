// Array
var names = ["John", "Mark", "Jane"];
var years = new Array(12, 12, 13)
document.getElementById("demo").innerHTML = names;
// console.log(names, years)

// change the value of index 2 from "Jane" to "Ben"
names[2] = "Ben";
console.log(names);

// Array
var John = ["John", "Smith", 1993, "Teacher"];
console.log(John)

// Insert infront of the array
John.unshift("mr.");
console.log(John)

// Ternary conditional
var checkJob = John.indexOf("Designer") === -1 
    ? "John is not Designer" // ถ้าหากอาชีพไม่ใช้ Designer ให้แสดงว่าคำนี้
    : "John is a Designer" // ถ้าหากอาชีพเป็น Designer ให้แสดงคำนี้
console.log(checkJob)

// if else statement, if else condition
if (John.indexOf("Designer") === -1 ) {
    console.log("John is not Designer");
}else {
    console.log("John is a Designer")
}

