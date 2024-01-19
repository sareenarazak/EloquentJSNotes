// Assign value to variable
let someValue = 10;
console.log(someValue); // 10

// you can change the value
someValue = 20;
console.log(someValue); // 20

// single line multiple varlables
let a  = 1, b = "meh";
console.log(a); // 1
console.log(b); // meh

// immutable value
const name = "Sareena";
console.log(name); // Sareena
// name = "Razak"; // error

// variable names cannot start with numbers or any special characters EXCEPT  $ or  _
let _some = "underscore";
console.log(_some); // underscore

// random fact
// prompt returns a string value
let number = "2";
console.log(typeof number); // string
console.log(typeof Number(number)); // number
console.log(typeof String(Number(number))) // string

// control flow
// if else - similar to java
let notANumber = NaN;
if(Number.isNaN(notANumber)) {
    console.log("This is not a number " + notANumber)
}

// while - similar to java
let whileExample = 10;
// prints 10 9 8 7 6 5 4 3 2 1
while(whileExample > 0) {
    console.log(whileExample);
    whileExample--;
}
// do loop - same as while, except always the body executes at least once
let doExample = 0;
// prints 0
do {
    console.log(doExample);
} while (doExample > 0);

// for loop - same as java
// prints 0 to 9
for(let i = 0; i < 10; i++) {
    console.log(i);
}

/// Breaking out of loop - break
// prints 0 to 4
for(let x = 0; x < 10; x++) {
    if(x === 5) break;
    else console.log(x);
}

// skipping one condition and continueing - continue
//prints numbers 0 to 9 except 5
for(let x = 0; x < 10; x++) {
    if(x === 5) continue;
    else console.log(x);
}

//switch statements - same as java
//let value = Number(prompt("Enter a value from the list - 0 , 1, 2"));
let value = 1;
switch (value) {
    case 0:
        console.log("value is 0");
        break;
    case 1:
        console.log("value is 1");
        break;
    case 2:
        console.log("value is 2");
        break;
    default:
        console.log("not a valid input ");
        break;
}

let first = "Sareena";
let second = " Razak";
let combined = first.concat(second);
console.log(first.concat(second)); //Sareena Razak
console.log(combined === first.concat(second)); // true
console.log(first); // Sareena