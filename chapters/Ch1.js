// Numbers
// 64 bits -> 1 bit sign , 11 bits exponent, 52 bits mantissa(num between 0 and 1 )
// --> -1 . (1 + mantissa) . 2 ^exponent

// Arithmetic
// Precedence ( *, /) then left to right unless parenthesis
console.log(2 + 4); // addition --> 6
console.log(2 * 4); // multiplication --> 8
console.log(2 - 4); // subtract --> -2
console.log(2 / 4); // division --> 0.5
console.log(2 % 4); // modulo --> 2

// Special numbers
console.log(Infinity);
console.log(-Infinity);
console.log(Infinity + 1 ); // Still infinity
console.log(NaN); // Not a number (NaN is of type number)

// String -> 16 bits per string element
// Represents text
x = 'Sareena'; // 'single'
y = ` `        // backTICK
z = "Razak";   // "double"

console.log(x + y + z); // adding strings together concatenates
// for escaping \ --> same as java
console.log("Hello\nworld");

// first \ is for printing " and second one is for printing \n and the last one is for printing"
console.log("A newline character is written like \"\\n\".");

// backticks can be used for spanning lines, embed values (template literal done by ${})
console.log(`4 divided by 2 is ${4/2}`);
console.log(`this is first line with backtick.
this is second line with backtick`);


// Unary operators -> takes in one value
console.log(typeof "string"); // string
console.log(typeof(2)); // number --> braces != function call here, similar to doing (x + y)
console.log(-1); // - is a unary operator


//Boolean --> similar to java --> true or false
console.log(true);
console.log(2 > 3); // false

// you can do string comparisons !
console.log("ab" < "az"); // true

// Uppercase < lowercase
console.log("A" < "a"); // true
console.log("Z" < "a"); // true

//Comparison operators - same as java
console.log(2 != 3); // true
console.log("a" == "a"); // true
// ###!!! EXCEPTION NaN
console.log(NaN === NaN); // false

// Logical operators - same as java
console.log(true && false); // false
console.log(true || true); // true
console.log(!true); //false

// Ternary operator - same as java
console.log(2 > 3 ? "wrong" : "right"); //right

// EMPTY values --> null and undefined --> indicates absence of value --> carries no info
// null is an empty or non existent value --> must be assigned
// undefined --> declared but not defined
// TODO : for later : With default parameters, undefined will use the default while null does not.

let undefinedValue;
console.log(undefinedValue); // undefined
let nullValue = null;
console.log(nullValue); // null


// ??? WHAT ?
console.log(null !== undefined); // true
console.log(null == undefined); // true

// Automatic type conversion -->  type coercion
console.log("5" + 5); // 55 -> second 5 becomes string
console.log("5" - 5); // 0 -> first 5 becomes number

// Other weird stuff
console.log("five" * 2 ); // NaN --> five cannot map to a number
console.log(false == 0); // true
console.log(true == 1); // true
console.log("string" * null); //NaN --> null becomes 0
console.log(8 * null); // 0 --> null becomes 0
console.log(null == 0);  // false even though above null became 0
console.log("" == false); // true --> :( why

// YAYY use === or !== to avoid type coercion
console.log(false === 0); // false;

// Logical operators --> left to right eval
// 0 , null and NaN are false

// || if the left is true, returns left or else right
// TODO : A bit confused : revise !
console.log(null || "notnull") // "notnull"
console.log("notnull" || null) // "notnull"

// && if the left is false, returns left or else right
console.log(null && "notnull") // null;
console.log("notnull" && null) // null;
console.log("null" && "notnull") // "notnull";