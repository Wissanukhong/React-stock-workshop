// function
function add(a, b) {
    return a + b
}
let anwser = add(7, 5)
console.log(anwser);

// function Vat
function calculateVat(money, vat) {
    return (money * vat) / 100;
}

const totalVat = calculateVat(10000, 7);
console.log(totalVat);