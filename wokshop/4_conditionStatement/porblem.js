// if else statement Problem
var a = ~~prompt("ค่าตัวที่ 1");

var b = ~~prompt("ค่าตัวที่ 2");

var total = a + b;

if ( total > 50 ) {
    console.log("ค่าของ Total คือ " + total + " มีค่ามากกว่า 50")
} else {
    console.log(`ค่าของ Total คือ ${total} มีค่าน้อยกว่า 50`)
}

// Note ถ้าเราไม่ใช้ ~~ ด้านหน้าเวลาที่เรารับค่าเข้ามาจะถูกมองว่าเป็น String ดังนั้นเราควรเพิ่ม ~~ เข้าไปเพื่อเป็นการกำหนดค่าให้เป็นตัวเลข 