// let nums = [12, 13, 14, 77, 29];

// let map = nums.map(num => num*2);
// console.log(map)
// let filter = nums.filter(num => num > 20);
// console.log(filter)
// let find = nums.find(num => num > 21);
// console.log(find)
// const total = nums.reduce(  (sum, num) => sum + num, 0)
// console.log(total);

// const total = nums.reduce(  (sum, num) => {
//     console.log(sum, num)
//     return sum + num

// }, 0)
// console.log(total);
const friends = [
    {name: 'Rashed', money: 12},
    {name: 'Kashed', money: 25},
    {name: 'Pashed', money: 37},
    {name: 'Nashed', money: 29},
    {name: 'Munia', money: 100}
  ];

const total = friends.reduce(  (sum, friend) => {
    console.log(sum, friend)
    return sum + friend.money

}, 0)
console.log(total);

const final = friends.reduce(  (sum, friend) => sum + friend.money, 0);
console.log(final);