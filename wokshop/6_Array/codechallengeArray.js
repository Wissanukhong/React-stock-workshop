// Challenge Array
function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2]),
];

var total = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
];

console.log(tips, total);

// switch 

function discountOil (oilBills) {
    var perDiscount;
    switch (true) {
        case oilBills > 50 :
            perDiscount = 0.2;
            break;
        case oilBills >= 50 && oilBills < 200 :
            perDiscount = .15;
            break;
        default :
            perDiscount = .1;       
    }
    return perDiscount * oilBills
}

var allBills = [115, 300, 450];
var discountOilBills = [
    discountOil(allBills[0]),
    discountOil(allBills[1]),
    discountOil(allBills[2]),
];

var totalDiscount = [
    allBills[0] - discountOilBills[0],
    allBills[1] - discountOilBills[1],
    allBills[2] - discountOilBills[2]
];

console.log(discountOilBills, totalDiscount);