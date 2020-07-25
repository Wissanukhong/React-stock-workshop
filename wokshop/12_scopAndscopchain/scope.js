// scope and scope chain
// Note : The code run backward หรือก็คือมันจะ Run จากข้างหลังมาข้างหน้านั้นเอง
var a = "Hello";
first(); 

// declaration function 
function first() {
    var b = "Hi"; // Note: this variable is local scope
    second(); 

    function second() {
        var c = "Hey"; // Note: this variable is local scope
        console.log(a+ b + c);
        third() 
    }
}

function third() {
    var d = "john";
    // console.log(C) จะได้ Error กลับมา
    console.log(a + d)
}


