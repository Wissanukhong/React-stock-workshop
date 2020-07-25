// coding Challenge
var john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  culcTip: function () {
    this.tips = [];
    this.total= [];

     for (var i = 0; i < this.bills.length; i++) {
        var percenct;
        var bill = this.bills[i];
        
        if (bill < 50 ) {
            percenct = .2;
        } else if ( bill >= 50  && bill < 200) {
            percenct = .15;
        } else {
            percenct = .1;
        }

        this.tips[i] = bill * percenct;
        this.total[i] = bill + (bill * percenct);

     }

  },
};

john.culcTip();
console.log(john);
