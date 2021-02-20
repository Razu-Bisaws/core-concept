// JSON
const person = {
    name: 'model',
    age: 25,
    district: 'Dhaka',
    salary: 12345
}


// JSON convert back and forth
const data = JSON.stringify(person);
const dataParsed = JSON.parse(data);
// console.log(dataParsed.name);

// API fetch
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data));

// local storage
// localStorage.setItem('userId', 1245);     // set item
const userId = localStorage.getItem('userId');  // get item
// console.log(userId);
localStorage.setItem('person', JSON.stringify(person));
const storedPerson = localStorage.getItem('person');
const parsedPerson = JSON.parse(storedPerson);
// console.log(parsedPerson.age);

// keys 
const keys = Object.keys(parsedPerson);
console.log(keys);

// keys values
const values = Object.values(parsedPerson);
console.log(values);
