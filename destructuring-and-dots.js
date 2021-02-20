// array destructuring 
const numbers = [44, 19, 54, 92, 99];
// const x = numbers[0];
// const y = numbers[1];
// const [x, y] = [54, 92];
const [x, y] = numbers;

// console.log(x, y);

function boxify(num1){
    return [num1, num1 + 5];
}
const [box1, box2] = boxify(8);
console.log(box1, box2);

// Object Destructuring
const person = {id: 2, name: 'potential', age: 25};
const {name, age} = person;

console.log(name, age);

// Create object shortcut
const a = 25;
const b = 35;
const obj = {a: a, b: b};
const obj2 = {a, b};
console.log(obj2);

// new array using three dots
// use three dots (new create array)
numbers.push(567);
const newNumbers = [...numbers, 1234];
