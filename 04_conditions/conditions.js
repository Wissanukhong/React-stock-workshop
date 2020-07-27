// conditions
const age = 25;

if (age > 18) {
    console.log("age is more than 18 years")
} else {
    console.log("age is not mroe than 18 years")
}

// ต้องการให้ Password มากกว่า 8 แต่ไม่เกิน 15 ตัวอักษร และไม่เป็นค่าว่าง
// ใช้ condition แบบ if else if 
let password = "";

if (password === "") {
    console.log("Password require");
} else if (password.length >= 8 && password.length <= 12) {
    console.log("password is valid");
} else {
    console.log("Password is not invalid");
}