/**********************************
 * Ternary Operator
 * structure of ternary Operator
 * variable + Condition statement + ? + What do you want + else
 *
 */

// Example
var firstName = "John";
var age = 22;

// Ternary Statement
age >= 18
  ? console.log(firstName + " You can not drink beer ")
  : console.log(firstName + " You can drinks beer ");


// if else statement 
var drink = age;

if ( age >= 18 ) {
    var drink = "You can drink beer"
} else {
    var drink = "You can not drink beer"
}

console.log(drink);