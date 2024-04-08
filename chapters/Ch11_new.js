export function ch11 () {
    // Async programming using callbacks
    // Make a function that takes a function as argument. Set up logic to call the callback fun after taks is done
    // example

    function doAsyncWork(input, cb) {
        // do async work with input --> like maybe a fetch call
        console.log(input);
        cb("Success");
        // Uncomment this and comment above line to see reject test 1 and test 2
        //setTimeout(() => cb("Success"), 2000);
    }

    doAsyncWork("hello world", (message) => console.log(`Call back function executed with message ${message}`));

    // Performing a series of async actions --> more error prone due to multiple callbacks

    // PROMISES //
    // async function immediately returns an object of type `Promise`
    // Two ways of creating Promise
    // 1. `.resolve` --> immediately resolves
    // step that creates a promise --> this could be a call to a function that returns a promise
    let promise1 = Promise.resolve("any value here");

    //step that registers the callback when the promise is resolved
    // this function will be called even if the promise is resolved by the time you register the callback
    promise1.then(value => console.log(`got this message : ${value}`));

    // 2. Promise constructor
    function promiseUsingConstructor() {
        // Promise constructor takes in executor(a callback function)  that has two inputs
        // both inputs are functions
        // 1. resolve function --> to be called when promise is resolved
        // 2. reject function --> to be called when rejected

        return new Promise((resolve, reject) => {
            //do some async action
            try {

                doAsyncWork("from promise constructor", message => resolve(message));

                // Test 1
                // both this line and the one from .catch is executed
                // console.log("Calling reject function");
                //  reject("This won't get executed");  /*since calling resolve means promise resolved*/

                // Test 2
                // this causes the catch block to execute and reject function to be call
                //throw new Error("error thrown so catch can execute");

            } catch (err) {
                console.log("Inside catch due to test 2");
                reject(err);
            }
        });
    }

     // here we are actually registering resolve and reject functions
     promiseUsingConstructor().then(console.log).catch(err => console.log(`error from promise is ${err}`));

    // Chaining then resolve functions --> register multiple callback functions and for each chain the input is output from previous resolve
    promiseUsingConstructor()
        .then(console.log)
        .then(() => {
            console.log("second log");
            return 10;
        })
        .then(prevOutput => console.log(`returned from prev resolver ${prevOutput}`));

    // you can also register the catch / reject resolver in the then call
    promiseUsingConstructor().then(
        (message => console.log(`reject handler as second param example : ${message}`)), // resolve
            err => console.log(`error from promise is ${err}`) //reject function
    );

    // calling resolve / reject function means any subsequent resolve reject calls are ignored

 }
