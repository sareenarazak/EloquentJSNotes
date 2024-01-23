// Arrays
let fruits = ["mango", "passionfruit", "banana", "orange", "grapes"];
console.log(fruits[0]); // mango
fruits.forEach(console.log);


// Properties
// -----------
// properties are accessed by '.' or '[]'
// '.' means the string after is the property name
// [] means the expression inside brackets are evaluated to get the property name
// null and undefined has no properties
// value.x --> property name is x
// value[x] --> x is evaluated and converted to a string that is a property name

// Below two diff ways to access length property of an array
console.log(fruits.length); // 5
console.log((fruits["length"])); // 5

// Properties that are  functions --> methods
// Array properties
fruits.push("jackfruit"); // adds an element to end of array
console.log(fruits.length); // 6
console.log(fruits);
fruits.pop(); // removes the last element
console.log(fruits);
fruits[3] = "jackfruit";  // replaces orange with jackfruit
console.log(fruits);

// Go to line 96

// includes checks if a value exist in the array
console.log(fruits.includes("mango")); // true
console.log(fruits.includes("mango", 1)); // false

// Objects
// arbitrary collections of properties
let todos = {
    monday : ["read", "sleep", "write"],
    tuesday : ["code", "eat"]
};
console.log(todos.monday);

// if the property is not a valid variable name, use quotes
let x = 3;
let dogActivities = {
    "saw a squirrel" : "chased it",
    sat : "got treat",
    [x + 1] : "Four" // [x+1] is an array  and can be a property in Java object
}

// Array.isArray() --> returns true if its an array
// typeOf array  --> Object
console.log(dogActivities["saw a squirrel"]); // I think I get it

console.log(dogActivities.sat);
// assign a new value using =
dogActivities.sat = "lay down instead";
console.log(dogActivities.sat);

// delete operation removes the property --> not commonly used
// Q : does the property gets deleted or
dogActivities.raccoon = "barked";
console.log(dogActivities.raccoon);

delete dogActivities.raccoon;
console.log(dogActivities.raccoon); // undefined

// 'in' tells whether the property is present
console.log("sat" in dogActivities); // true
console.log("raccoon" in dogActivities); // false

//'keys' gives you array of keys present in an object
console.log(Object.keys(dogActivities)); // "saw a squirrel" , "sat"

//'assign' copies all the properties from one to another
let catActivities = {};
Object.assign(catActivities, dogActivities);
// TODO : any benefits to using Object.assign rather than
console.log(catActivities);

// Mutability
// Object equality checks the references - not contents --> no deep equality check
let dogNames = ["inji", "mango", "boba"];
let foodNames = dogNames;
console.log(foodNames === dogNames); //true
let catNames = ["inji", "mango", "boba"];
console.log(catNames === dogNames); // false

// Change in value of a property of an object affects all the bindings that points that object
console.log(dogNames[1]); // mango
foodNames[1] = "tofu";
console.log(dogNames[1]); // tofu

// For constant object - we can change the contents, but no reassigning
const names = dogNames;
console.log(names);
names[1] = "mango"; // allowed
console.log(names);
// names = catNames; not allowed

// looping in a diff way - not using index
for(let name of dogNames) console.log(name); // 'of' prints the values --> "inji", "mango", "boba"
for(let index in dogNames) console.log(index)// 'in' prints the index --> 0, 1, 2

// other array stuff
// removes the first element and returns it --> like dequeue and returns it
// let dogNames = ["inji", "mango", "boba"];
console.log(dogNames.shift()); //"inji"
console.log(dogNames); // ["mango", "boba"]
//The unshift() method of Array adds the specified elements to the beginning of an array and returns the new length of the array.
// you can also do ... operator
console.log(dogNames.unshift("tofu")); // 3
console.log(dogNames); //  ["tofu", "mango", "boba"]

// indexOf returns the first index if the element exists in array
//lastIndexOf returns the last occurrence of the element
// both return -1 if element does not exist
console.log(dogNames.indexOf("tofu")); // 0;
dogNames.push("tofu");
console.log(dogNames.lastIndexOf("tofu")); // 3 ;
console.log(dogNames.indexOf("inji")); // -1

console.log(dogNames); //[ 'tofu', 'mango', 'boba', 'tofu']
// slice(start, end)--> start inclusive end exclusive, returns the subarray
console.log(dogNames.slice(1, 4)); // ['mango', 'boba', 'tofu']
console.log(dogNames.slice(2)); // start till end  ['boba', 'tofu']

///splice
// deletes elements from start till start + count - 1 and returns
console.log(dogNames.splice(1,2));
console.log(dogNames);

//concat creates a new array by combining two arrays
// DOES NOT modify existing array
console.log(dogNames.concat(fruits)); // 'tofu', 'mango', 'boba', 'tofu', 'mango', 'passionfruit', 'banana', 'jackfruit', 'grapes'
console.log(dogNames.concat("inji"));

// Cannot add new properties to String, Boolean, Numbers
// String properties -->
let dog = "inji";
console.log(dog.length);  // 4
console.log(dog.toUpperCase()); // INJI
console.log(dog.indexOf("i")); // 0
console.log(dog.lastIndexOf("i")); // 3
console.log(dog.indexOf("i")); // 0

console.log(dog.slice(0,2)); // in

// trim method removes whitespace --> leading and trailing
console.log("he y   \n".trim()); // "he y"
//padStart/padEnd --> adds padding  specified string until the desired length is reached
console.log(dog.padEnd(14, " woof")); // "inji woof woof"

//split based on string or regex
let fruitsString ="mango passionfruit banana orange grapes";
console.log(fruitsString.split(" "));

// repeat, repeats the same string x times
console.log(dog.concat(" woof".repeat(2))); // "inji woof woof"

// Rest parameter
// ... --> spread operator --> any  number of arguments --> function can only have one rest parameter
let otherFruits = ["apple", "pineapple"];
console.log([...otherFruits, ...fruits]); // ['apple', 'pineapple', 'mango', 'passionfruit', 'banana', 'jackfruit', 'grapes']

// Math
console.log(Math.max(0, 100)); //100
console.log(Math.min(0, -100)); // - 100
console.log(Math.sqrt(100)); // 10
// cos, sin, tan , acos, asin, atan are all in Math object
// random --> value between 0 and 1 (excluding 1)
console.log(Math.random());
// floor, ceil functions to round down and up

// Destructure --> unpacking array values to distinct variables
// for objects --> confused
let {name} = {name: "Faraji", age: 23};
console.log(name);

// Finally JSON.stringify and JSON.parse for serializing and deserializing
console.log(dogActivities);
let dogActivitiesString = JSON.stringify(dogActivities);
console.log(dogActivitiesString);
let jsonStringExample = "{\"doggo\" : \"is running\"}";
console.log(JSON.parse(jsonStringExample).doggo); //  "is running"