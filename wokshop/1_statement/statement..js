// Staement คือ คำสั่งที่บอกว่า เราต้องการให้โปรแกรมนั้นทำงานอะไร หรือว่าเรียกแบบง่ายๆ ว่าชุดคำสั่งนั้นเอง โดยจะแบ่ง statement ออกเป็น 3 หัวข้อใหญ่ๆ ดังนี้
// Assignment statement คือ สิ่งที่เรา definded ค่าลงไปที่ตัวแปรนั้น
// condition statement คือ สิ่งเราต้องการเปรียนเทียบค่า หรือว่า ต้องการให้โปรแกรมนั้นเกิดขึ้นในกรณีไหน
// Interation statement คือ สิ่งที่เราต้องการให้ทำซ้ำ หรือที่เรียกว่า Loop นั้นเอง

// Assignment statement example
var number1 = 5;
let number2 = 5;
const number3 = 1;

// condition statement example
if (number1 === number3) {
  console.log(`${number1} มีค่าเท่ากับ ${number3}`);
} else {
  console.log(`${number1} ไม่เท่ากับ ${number3}`);
}

// condition switch case style
switch (number1 >= number3) {
  case true:
    console.log(
      `number1 มีค่ามากกว่า number3 ค่าของ number1, 2 คือ ${number1}, ${number3}`
    );
    break;
  case false:
    console.log(
      `number1 มีค่าน้อยกว่า number3 number1, 2 คือ ${number1}, ${number3}`
    );
    break;
  default:
    console.log(`มีค่าเท่ากัน`);
}

// Ternaly statement style
number1 >= number3
  ? console.log(
      `number1 มีค่ามากกว่า number3 ค่าของ number1, 2 คือ ${number1}, ${number3}`
    )
  : console.log(
      `number1 มีค่าน้อยกว่า number3 number1, 2 คือ ${number1}, ${number3}`
    );

// Interation statement (loop)
for (var i = 0; i < 10; i++ ) {
    console.log(i);
}