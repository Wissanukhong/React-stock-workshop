var john = {
    name: "John",
    yearOfBirth: 1993,
    calculateAge: function () {
        console.log(2020 - this.yearOfBirth)
    }
}

john.calculateAge();

var mike = {
    name: "Mike",
    yearOfBirth: 1990,
}

mike.calculateAge = john.calculateAge;
mike.calculateAge()

