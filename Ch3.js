// Functions

// define a function with keyword 'function'

// Declaration
function add(a, b) {
    return a + b;
}
console.log(add(3,2)); // 5
console.log(add("3", "5")) // 35

// anonymous function
const addFunction = function(a, b) {
    return a + b;
}

console.log(addFunction(2, 4)); //6

// function without return value returns 'undefined'
function printHello() {
    console.log("Hello");
}
printHello();
let printHelloReturn = printHello();
console.log(printHelloReturn); // undefined

// scope - let, const --> block
// var --> global scope

// nested function scope
/*
Each local scope can also see all the local scopes that contain it,
and all scopes can see the global scope --> lexical scope
 */
// function second can access outer parameter, but twoFunctions cannot access
const twoFunctions = function (outer) {
    const second = function () {
        let doubledValue = outer  * 2;
        console.log(outer + doubledValue);
    }
    second(outer);
}
twoFunctions(2);

// Functions as values
// TODO : --> Come back to this

// Arrow functions
const printsHello = () => {
    console.log("hello");
}

printsHello();

const addTwoNums = (a, b) => {
    return a + b;
}
console.log(addTwoNums(2, 3)) // 5

// yay call stack -> add current call to the stack, execute, pop, go to next
// Callout, if I pass extra arguments to a function, it ignores it
function printValue(a) {
    console.log(a);
}
printValue("hello! ", "world"); // hello!
printValue(); // undefined
// default value
function printHelloWorld(a, b ="world") {
    console.log(a + b);
}

printHelloWorld("hello! ");
printHelloWorld("hello! ", "world");

// first clas function  -->             1) being able to return a function
//                                      2) assign a function to  a variable
//                                      3) pass function as an argument to a function

// CLOSURES
//  A function that references/remembers bindings from local scopes around it is called a closure
//A closure is the combination of a function bundled together (enclosed)with references to its surrounding state (the
// lexical environment). In other words, a closure gives you access toan outer function's scope from an inner function
// Bindings are stored in heap memory instead of stack
function printHi() {
    const message = "Hi";
    return () => console.log(message);
}

let printHiFunction = printHi(); // Does nothing
printHiFunction(); // Hi

// Example 1
function printMessageOuter(messageOuter) {
    function printMessageOuterAndInner(messageInner) {
        console.log(messageOuter + "  " + messageInner);
    }
    return printMessageOuterAndInner;
}

let printHelloForHumans = printMessageOuter("Hello!");
printHelloForHumans("Person"); // Hello! Person

let printGreetingForDoggos = printMessageOuter("Hello!");
printGreetingForDoggos("Dog"); // Hello! Dog

// Example 2

let outer = (name) => {
    return (greeting, symbol) => {
        return [greeting, symbol, name];
    };
}
let myNameGreeting = outer("Sareena");
let doggoNameGreeting = outer("Doggo");

console.log(myNameGreeting("Hi", "! ")); // ["Hi", "!", "Sareena"]
console.log(doggoNameGreeting("Woof", "! ")); // ["Woof", "!", "Doggo"]

// Recursion
// Running through a simple loop is generally cheaper than calling a function multiple times.

// Pure function
// A pure function is a specific kind of value-producing
// function that not only has no side effects but also doesn’t rely on side effects from other code

// TODO Hoisitng
// Lexical scope
// if it's unassigned console.logging before the declaration with var gives a TypeError, and declaration with let/const
// gives a ReferenceError. If it's assigned like in this example, var wouldn't throw errors
// bindings declared with var behave differently—they end up in the nearest function scope or the global scope.

{
    let x = "Something";
}
console.log(x);
y = 5;
{
    var y;
    console.log(y);
}