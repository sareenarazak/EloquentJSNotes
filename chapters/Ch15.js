// Adding event listeners

//on window --> clicking inside window prints hello

window.addEventListener("click", () => console.log("hello"));


const punchBtn = document.querySelector(".btn-btn");
// prints meh and hello --> since clicking on button is also clicking inside the window
// another thing to note is that meh prints first since that is the inner most element
punchBtn.addEventListener("click", () => console.log("meh"));

// using addEventListener is better if you wanna add multiple click events instead of
const click2 = () => console.log("second meh");
punchBtn.onclick = click2;
// to remove --> name the handler fn
punchBtn.removeEventListener("click", click2);

// Access details about event -> event passed automatically
// event.type holds the string value identifying the event




// Event propagation --> propagates outwards from children to parents --> if the parent has event handlers registered
// example --> above when we click on punchbutton both "meh" and "hello" printed - since window is a parent element of button

// Stopping event propagation to the parent element --> "hello" not printed
const eventBtn = document.querySelector(".btn-w-data");
eventBtn.addEventListener("click", (evt) => {
    evt.stopPropagation();
    console.log(evt.target.dataset["something"]);
});

// Add listener on the outer element and use event.target for specificity
document.addEventListener("click", (event) => {
    if(event.target.nodeName === "BUTTON") {}
    console.log("button clicked is ", event.target.textContent);
});




// Default actions
//preventDefault ==> stops the browsers default behavior --> scrolling for example
// some events cant be intercepted using preventDefault --> check Event.cancelable property
document.getElementById("cant-type").addEventListener("keydown", (event) => {
    event.preventDefault();
    console.log("no typing");
});


// Key events => keydown and keyup events
window.addEventListener("keydown", (event) => {
    // console.log("key pressed"); --> if you keep key pressed the event fires multiple times
    if(event.key === "a") {
        eventBtn.style.display = "none";
    }
    if(event.ctrlKey) console.log("control key pressed");
});

window.addEventListener("keyup", () => {
        eventBtn.style.display = "inline";
});

//text area and input fires "input events --> more in form chapter


//pointer events --> mouse/trackpad and touch screen
//moues clicks ==> mousedown mouseup --> elements immediately below the click
// mouse movement ===> mousemove
// mouse up event followed by click event --> dbclick for double click
//clientX, clientY or pageX pageY to get the precise location of the event

// mousemove can be used to track the mouse position
const doggoBox = document.getElementById("doggo");

// TODO : Add a background image of doggo and mousemove repeat
doggoBox.addEventListener("mousedown", (event) => {

    if(event.button === 0) { // left mouse button
        doggoBox.style.backgroundImage = 'url("../images/inji.png")';
        doggoBox.style.backgroundSize = "100px";
        doggoBox.style.backgroundRepeat = "no-repeat";
        window.addEventListener("mousemove", repeatDoggo);
        event.preventDefault();
    }
});

function repeatDoggo(event) {
    if(event.buttons === 0) {
        window.removeEventListener("mousemove", repeatDoggo);
    } else {

        doggoBox.style.backgroundRepeat = "repeat";
    }
}


// touch events --> tocuhstart when finger touches screen, touchmove ==> while moving finger pressed on screen,
// touchend --> when finger lifts off the screen

//"scroll" event

// focus and blur events on elements
const focusEx = document.getElementById("text-focus");
focusEx.addEventListener("focus", () => {
    focusEx.value = "hi";
});

// scroll focus and blur does not propagate to parent element handlers
// load event ==> window, any image link, external ref load --> does not propagate
//beforeunload --> before closing teh browser tab

//web workers --> their own global scope --> used for time consuming tasks that can run in the background
const worker1  = new Worker("./ch15worker.js")
const worker2  = new Worker("./ch15worker.js")
worker1.postMessage("hello");
worker2.postMessage("world");

worker1.onmessage = (event) => {
    console.log(event.data);
}


worker2.onmessage = (event) => {
    console.log(event.data);
}

//setTimeout and clearTimeout

let count = 0;
//setInterval and clearInterval to repeat something every xmilliseconds
let countup = setInterval(() => {
    if(count === 10) {
        clearInterval(countup);    }
    else {
        count++;
        console.log(`count is ${count}`);
    }
}, 100);
// Debouncing event --> setting timeout to make sure not to respond too much to events that fire rapidly
