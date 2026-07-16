// Ternaray
// condition ? if true : if false

const age = 20;
// if (age >= 18) {
//   console.log("Please vote");
// } else {
//   console.log("Grow up kid");
// }

// age >= 18 ? console.log("Please VOTE") : console.log("Grow Up Kid");

let price = 500;
const isLeader = true;

// if (isLeader) {
//   price = 0;
// } else {
//   price = price + 100;
// }
// console.log("Price is: ", price);

price = isLeader ? 0 : price + 100;
console.log(price);
