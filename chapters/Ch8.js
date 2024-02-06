// use strict to get some help with error finding
exports.runChapter = function () {
    function notStrict() {
        count = 10; // no `let` or `const` keyword
        console.log(count);
    }

    notStrict(); // no error

    function strict() {
        "use strict"
        /**
         * Uncaught ReferenceError: countStrict is not defined
         *     at strict (Ch8.js:11:17)
         *     at Ch8.js:14:1
         * strict @ Ch8.js:11
         * (anonymous) @ Ch8.js:14
         * @type {number}
         */
            // countStrict = 10 ;
        let countStrict = 10;
        console.log(countStrict);
    }

    strict();

// "use strict" other uses -->
// 1. if constructor function called without new
// 2. stops you from declaring multiple function arguments with the same name
    function speak(arg1, arg1, arg1) {
        console.log(arg1 + arg1 + arg1);
    }

    speak("dog", "says", "woof"); // woofwoofwoof

    function strictSpeak() {
        "use strict";

        /**
         * Uncaught SyntaxError: Duplicate parameter name not allowed in this context (at Ch8.js:36:32)
         * @param arg1
         * @param arg2
         * @param arg2
         */
        // function speak(arg1, arg2, arg2) {
        return function (arg1, arg2, arg3) {
            console.log(arg1 + arg2 + arg3);
        }
    }

    strictSpeak()("dog", "says", "woof");

//Exception handling --> throwing error and propagating to top function call

    function throwingErrorSample() {
        let bestDoggo = prompt("who is the best doggo");
        if (bestDoggo !== "inji") {
            throw new Error("wrong answer . Best doggo is inji");
        }
        console.log("You got that right ");
    }

    try {
        //  throwingErrorSample();
    } catch (error) {
        console.log("Sorry!  " + error);
    }
// Code clean up --> //finally
    try {
        // throwingErrorSample();
    } catch (error) {
        console.log("Sorry!  " + error);
    } finally {
        console.log("its alright");
    }

// UHH - no selective exception catching
// solution is to check instance + make custom exceptions
    class NewError extends Error {
    };

    function sampleNewError(isNew) {
        if (isNew) {
            throw new NewError("testing ");
        } else {
            throw Error("not new error");
        }
    }

    try {
        sampleNewError(true);
    } catch (error) {
        if (error instanceof NewError) console.log("this is a new error ");
    }
};
