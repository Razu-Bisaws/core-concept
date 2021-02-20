const numbers = [2, 4, 5, 7, 5];
const frineds = ["rafiq", "jabbar", "barkat"];
const products = [
  { id: 1, name: "laptop", price: 500 },
  { id: 2, name: "phone", price: 100 },
  { id: 3, name: "watch", price: 20 },
  { id: 4, name: "tablet", price: 80 },
];

// map use
const names = products.map((anyName) => anyName.name);
const prices = products.map((pd) => pd.price);
const ids = products.map((pd) => pd.id);
const prices2 = products.map((pd) => {
    // do some work
    return pd.price;
});
console.log(prices2);

console.log(ids);
console.log(names);
console.log(prices);

//forEach use ( kono kicho return kore na , no return just console.log kora jai)
products.forEach((pd) => console.log(pd.name));

// filter use
const cheaper = products.filter(pd => pd.price <= 100);
console.log(cheaper);

// remove an item using filter
const remaining = products.filter(pd => pd.id !=3);
console.log(remaining);

// find use 
const hasWatch = products.find(pd => pd.name === 'watch');
console.log(hasWatch);

// reduce
.reduce((previous, current) => {
    
}, initial);

// includes 

// push 

// pop

// length 

indexOf