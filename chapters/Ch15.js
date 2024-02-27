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
punchBtn.removeEventListener("click", click2);

// Access details about event -> event passed automatically
// Stopping event propagation to the parent element
const eventBtn = document.querySelector(".btn-w-data");
eventBtn.addEventListener("click", (evt) => {
    evt.stopPropagation();
    console.log(evt.target.dataset["something"]);
})

// Add listener on the outer element and use event.target for specificity
document.addEventListener("click", (event) => {
    if(event.target.nodeName === "BUTTON") {}
    console.log("button clicked is ", event.target.textContent);
})

//preventDefault ==> stops the browsers default behavior --> scrolling for example
// some events cant be intercepted using preventDefault

// Key events => keydown and keyup events
window.addEventListener("keydown", (event) => {
    if(event.key === "a") {
        eventBtn.style.display = "none";
    }
});
window.addEventListener("keyup", () => {
        eventBtn.style.display = "inline";
});

//text area and input fires "input events


//pointer events
//moues clicks ==> mousedown mouseup
// mouse movement ===> mousemove
// mouse up event followed by click event --> dbclick for double click
//clientX, clientY or pageX pageY to get the precise location of the event
// event.buttons --> sum of button number pressd --> 0 no buttons pressed for mouseevent

// touch events --> tocuhstart, touchmove, touchend

//"scroll" event

// focus and blur events on elements

// scroll focus and blur does not propagate to parent element handlers
// load event ==> window, any image link, external ref load --> does not propagate
//beforeunload --> before closing teh browser tab


//web workers --> their own global scopre

//setTimeout and clearTimeout

//cancelAnimationFrame

//setInterval and clearInterval to repeat something every xmilliseconds


// Debouncing event --> setting timeout to make sure not to respond too much to events that fire rapidly
