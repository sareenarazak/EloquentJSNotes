// For images and drawing
// option 1 svg --> original descriptions are preserved --> changeable / movable
const circle = document.querySelector("circle");
// this fixes the radius
circle.setAttribute("cx","20");

// option 2 canvas element --> applies change as soon as they are drawn and does not remember
const canvas = document.querySelector("canvas");
// to get a drawing surface
const canvasContext = canvas.getContext("2d");
canvasContext.strokeText("I am a text inside canvas", 10, 20 );
canvasContext.moveTo(0, 10);

// draws line
canvasContext.lineTo()
