// function 
function calVat (money, vat) {
    return (money * vat) / 100;
}

const total = calVat(100,7);
console.log(total);
