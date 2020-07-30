// DOM manipulations

// การดึงค่าหรือว่าอ่าน่าของข้อมูล เช่น Element หรือว่า  Property ต่างๆ มาแสดงผล
document.querySelector('input');

// การดึงค่าหรือว่าอ่าน่าของข้อมูล ด้วย ID
document.getElementById('email');

// สร้าง Elemnt ใหม่ตามที่เราต้องการ
document.createElement('div');

// 1.หลังจากที่เราสร้าง Element ขึ้นมาแล้ว 
// 2.หากเราต้องการสร้าง Element ลูกของ Element ก่อนหน้า เราจะต้องใช้คำสั่งนี 
document,appendChild(Element);