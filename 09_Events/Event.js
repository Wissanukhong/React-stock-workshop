// Event
// 1.เป็นการเรียกใช้งานของปุ่มนี้ 
const btnElem = documment.querySelector('button');

// 2.จากนั้นเมื่อไหร่ก็ตามที่มีกดปุ่มนี้ เราต้องการทำให้มันเกิดอะไรขึ้น นั้นเอง
// 3.และให้มันเรียก function onClik ให้มันทำงานตามที่เราต้องการ 
btnElem.addEventListener('click', onClick);

// function
// event.target คือ Element ที่ทำให้เกิด Event ในที่นี่คือ button นั้นเอง
function onClick(event) {
    console.log(event.target);
}