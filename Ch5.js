// Higher order functions
// Functions that operate on other functions  ( return or take as argument)
function greaterThanNum(n) {
    return (m) =>  m > n;
}

const greaterThan20 = greaterThanNum(20);
console.log(greaterThan20(25)); // true
console.log(greaterThan20(12)); // false

// Array --> filter, map ,reduce
let catNames = ["odette", "luna", "astro", "lemon"];
let dogNames = ["inji", "boba", "luna", "mango"];

// find cat names that are in dog names
console.log(catNames.filter(
    (name) => dogNames.includes(name))); // luna

// map length of dognames
console.log(dogNames.map((n) => n.length)); // [4, 4, 4, 5]

let nameLengths = dogNames.map((n) => n.length);
//reduce --> sum of dogname lengths
console.log(nameLengths.reduce((l1, l2) => l1 + l2, 0)); // 17

// flatten --> pass in depth(default 1)  you can pass Infinity if you dont know depth value
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat()); / 0 , 1, 2, 3, 4

let doggo = "inji";

console.log(doggo.charAt(0)); //i
console.log(doggo.charCodeAt(0)); // 105
console.log(doggo.codePointAt(0)); //105

// TODO : Look up UTF 16
let emojiDog = "🐶";
console.log(emojiDog.charAt(0)); // nan
console.log(emojiDog.charCodeAt(0)); // 55357 --> returns partial --> first byte
console.log(emojiDog.codePointAt(0)); //128054 --> gives back 1 or 2 byte

// indexOf vs findIndex
//indexOf expects a  value as first parameter
console.log(dogNames.indexOf("luna")); // 2
console.log(dogNames.indexOf("pipin")); // -1

let dogData  = [ {name : "inji", age : 5}, {name : "boba" , age: 2}, {name: "luna", age: 12}];
//findIndex expects predicate --> used for objects
console.log(dogData.findIndex((d) => d.age > 10)); // 2 --> luna
console.log(dogData.findIndex((d) => d.age < 1)); // -1
console.log(dogData.findIndex((d) => d.age > 1)); // 0 --> multiple, returns first index

// TODO : Rewrite textbook example on scripts