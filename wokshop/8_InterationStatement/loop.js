//for loop
for (var i = 0; i < 10; i++ ) {
    console.log(i);
}

var john =["John", "smith", 1990, "Designer", false];

// When we don not use loop 
console.log(john[0]);
console.log(john[1]);
console.log(john[2]);
console.log(john[3]);
console.log(john[4]);

// when we use loop
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

//while loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++
}

//continue and break statements

var books = new Array("Steve Jobs", "Bill Gates" , 1984, "Mark Zuckablek");
// Continue อะไรที่ไม่เข้าเงื่อนไขจะถูกตัดออก และทำอันที่เข้าเงื่อนไขต่อไป
for (var i = 0; i < books.length; i++){
    if(typeof books[i] !== "string") continue;
    console.log(books[i]);
}

// Break เวลาเจออะไรก็ตามที่ไมเข้าเงื่อนไขแล้วจะหยุดทันที ไม่ทำต่อ
for (var i = 0; i < books.length; i++) {
    if(typeof books[i] !== "string") break;
    console.log(books[i]);
}

//Looping backwards  จะเป็นวนซ้ำจากค่าสุดท้าย มาที่ ค่าแรก
for (var i = books.length -1; i >=0; i--) {
    console.log(books[i])
}



// for loop
var a = [123,12,1];

for (i=0; i < a.length; i++) {
    console.log(a[i])
}

// while loop practise
var b = [123,12,1];
var i = 0;
while(i < b.length) {
    var c = b[i] * 2
    console.log(c)
    i++
}


// while loop practise
var allBooks = ['Jonash', 'Auro x', 'Long learn'];
var i = 0;

while(i < allBooks.length) {
    var book = allBooks[i];
    console.log(book);
    i++
}

