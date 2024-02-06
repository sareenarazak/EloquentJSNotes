//TODO: need to complete the chapter
// Creating regular expressions

exports.runChapter = function () {
    const aRegDog = new RegExp("dog");
    const aRegDog_1 = /dog1/;

// testing for match
    console.log(aRegDog_1.test("dog")); // false
    console.log(aRegDog.test("dog")); // true

// `\` is used for special characters \n --> new line \+ --> + sign
    const dogPlus = "dog+";
    console.log(/\+/.test(dogPlus)); //true

// `[]` for a set of characters
    console.log(/[0123456789]/.test("something 2222")); // true
    console.log(/[0-9]/.test("test nums 02")); // true

// \d -> any digit
    console.log(/\d/.test("12")); //true
    console.log(/\d/.test("not a digit")); //false

// \w
    console.log(/\w/.test("word")); //true;
    console.log(/\w/.test("12")); //false

//\s --> whitespace characters
    console.log(/\s/.test("\n")); //true
    console.log(/\s/.test("n")); // false

// \D --> not a digit
// \W --> not a letter
// \S --> a non white space char
};
