// function 
function calVat(money, vat) {
    return (money * vat) / 100;
}

const total = calVat(100, 7);
console.log(total);

// for loop workshop 1
for (var i = 0; i <= 10; i++) {
    console.log(`ค่าของ i รอบที่ + ${i}`);
}

// for loop workshop 2
for (let counter = 0; counter < 10; counter++) {
    if (counter % 2) {
        break;
    } 
    console.log(counter);
}

// Dom 

// ใช้ในการดึงค่าต่างๆ มาอ่านค่าได้
document.querySelector('input');

// ใช้ในการดึงค่าด้วย ID
document.getElementById();

// ใช้ในการสร้าง Element ใหม่
document.createElement('div');

// ลูกของ Element ก่อนหน้า
document.appendChild(Element);