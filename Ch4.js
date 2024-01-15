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

// TODO : revisit --> then remove paragraphs below
//Property names are strings. They can be any string, but the dot notation works
// only with names that look like valid binding names. So if you want to access a property
// named 2 or John Doe, you must use square brackets: value[2] or value["John Doe"].
//
// The elements in an array are stored as the array’s properties, using numbers as property names.
// Because you can’t use the dot notation with numbers and usually want to use a binding that holds the index anyway,
// you have to use the bracket notation to get at them.

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

// includes checks if a value exist in the array
console.log(fruits.includes("mango")); // true

// Objects
let todos = {
    monday : ["read", "sleep", "write"],
    tuesday : ["code", "eat"]
};
console.log(todos.monday);

// if the property is not a valid variable name, use quotes
let dogActivities = {
    "saw a squirrel" : "chased it",
    sat : "got treat"
}
console.log(dogActivities["saw a squirrel"]); // I think i get it

console.log(dogActivities.sat);
// assign a new value using =
dogActivities.sat = "lied down instead";
console.log(dogActivities.sat);


// delete operation removes the property --> not commonly used
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
console.log(catActivities);

// Objects are mutable
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
// removes the first element --> line dequeue and returns it
console.log(dogNames.shift()); //"inji"
console.log(dogNames); // ["mango", "boba"]
//The unshift() method of Array adds the specified elements to the beginning of an array and returns the new length of the array.
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

//concat creates a new array by combining two arrays
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