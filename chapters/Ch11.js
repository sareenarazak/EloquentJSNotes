export function ch11() {
    // Js is single threaded --> it executes line by line

    // Promises
    // create a promise
    let newPromise = Promise.resolve("new promise");

    // to get the result of promise ==> .then
    newPromise.then(message => console.log(`Logging promise line 9 ${message}`));

    // if we give a promise as an input the same promise is returned
    let newPromisePromise = Promise.resolve(newPromise);
    console.log(newPromise === newPromisePromise); // true

    // calling .then on a promise returns another promise
    // with time out the promise resolves
    console.log("Setting time out, then also logging");
    console.log(newPromise.then(() => {
        setTimeout(() => {
        }, 500);
    }));


    // fetch promise example
    const correctURL = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
    const errorURL ="https://md.github.io";
    const fetchPromise = fetch(`${correctURL}`);

    //const fetchPromise = fetch(`${errorURL}`);

    console.log("logging fetch promise");
    console.log(fetchPromise);

    fetchPromise.then((response) => {
        if (!response.ok) {
            throw new Error(`http response is not ok : ${response.status}`);
        }
        return response.json();
    }).then( (data) => {
        for (let d of data) {
            console.log(`${d.name}`);
        }
    }).catch((error) => {
        console.error(`Error thrown from fetch ${error}`);
    });
    console.log("Started request…");

    // to parallelly execute and resolve a bunch ofd promies

    const fetchPromise1 = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    const fetchPromise2 = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
    );
    const fetchPromise3 = fetch(
        "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
    );
    const errorPromise = fetch(
        "something://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
    );

    Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
        .then((responses) => {
            for (const response of responses) {
                console.log(`${response.url}: ${response.status}`);
            }
        })
        .catch((error) => {
            console.error(`Failed to fetch: ${error}`);
        });

    // fails since one of them failed
    Promise.all([fetchPromise1, fetchPromise2, errorPromise])
        .then((responses) => {
            for (const response of responses) {
                console.log(`${response.url}: ${response.status}`);
            }
        })
        .catch((error) => {
            console.error(`Failed to fetch: ${error}`);
        });

    const fetchPromise4 = fetch(
        "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
    );
    const errorPromise1 = fetch(
        "something://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
    );

    // only need one to succeed
    Promise.any([fetchPromise4, errorPromise1])
        .then((response) => {
            // since we use any there is only one response
            // for (const response of responses) {
                console.log(`${response.url}: ${response.status}`);

        })
        .catch((error) => {
            console.error(`Failed to fetch: ${error}`);
        });


    // ****** ASYNC AWAIT ********* //
    // Instead of using promise.then syntax
    async function myAsyncFunction() {
        try {
            const response = await fetch(correctURL);
            if(!response.ok) {
                throw new Error(`HTTP error : ${response.status}`);
            }
            console.log("THIS IS FROM THE ASYNC AWAIT FETCH");
            const datas = await response.json();
            for(let data of datas) {
                console.log(data.name);
            }
        } catch (error) {
            console.error(`Error thrown during fetch or json call ${error}`);
        }
    }
    myAsyncFunction().then({});


    // Constructing promises
    // new Promise and the resolve reject as input

    function alarm(person, delay) {
        return new Promise((resolve, reject) => {
            if(delay < 0) {
                throw new Error("Delay should be positive");
            }
            setTimeout(() => {
                resolve(`Hello good morning ${person}`);
            }, delay);
            });
    }

    alarm("Inji", -1).then(message => console.log(`${message}`))
        .catch(error => console.log(`error is ${error}`));

    alarm("Sareena", 1000).then((result) => console.log(result));

    // Using async await

    async function waitOnAlarm () {
        const result = await alarm("Greg", 200);
        console.log(result);
    }
    waitOnAlarm().then(() => {});

    // Generators add star next to the function keyword
    // frozen at the start until we iterate on it
    function* generateRandomNumbers(n) {
        while(n >= 0) {
            n--;
            yield Math.random()
        }
    }

    for (let num of generateRandomNumbers(5)) {
        console.log(num);
    }
}

