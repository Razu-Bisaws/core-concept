const money = 150;
const active = true;
let food;
if (money > 100) {
 food = 'kacci';   
} 
else {
    food = 'normal tea';
}
//ternary system (shortcut if/else)
// condition ? true value  : false value
let food2 = money > 100 ? 'kacci' : 'normal tea';
let cssClass;

// another example
if (active === true) {
    cssClass = 'active';
}
else {
   cssClass = 'inactive';
}
const cssClass2 = active ? 'active' : 'inactive';
// function call shortcut alternative

active ? displayUser() : hideUser(); //active korte fobe 

//
// active && displayUser();
// active || displayUser();
const x = active && 5;
const y = active || 5;
console.log(x);
console.log(y);

// string to number (convert)
const number = +'45';
console.log(number);

// number to string 
const numText = 45 + '';
console.log(numText);

// default parameter
function add(num1, num2 = 5){
    // num2 = num2 || 5;
    return num1 + num2;
}
add(45, 10);