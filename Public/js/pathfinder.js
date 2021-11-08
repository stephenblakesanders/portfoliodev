// pathfinder visualization
console.clear();
const svg = document.querySelector("svg");

const svgns = "http://www.w3.org/2000/svg";

// change any value
var rx = 0;
var ry = 0;
let width = 900;
let height = 650;
let targets = 38;
const colorArray = ["#94c356", "#46a4cc", "#a63e4b"];

// figure the new svg width/height
const svgWidth = width * targets;
const svgHeight = height;

svg.setAttribute('width', `${svgWidth}`)
svg.setAttribute('height', `${svgHeight}`)
svg.setAttribute('viewbox', `0 0 ${svgWidth} ${svgHeight}`)

/* svg.setAttribute("width", `${svgWidth}`);
svg.setAttribute("height", `${svgHeight}`);
svg.setAttribute("viewbox", "0 0 " + svgWidth + " " + svgHeight); */

for (let i = 0; i < targets; i++) {
    let newRect = document.createElementNS(svgns, "rect");
    console.log("circle")
    newRect.setAttribute("x", rx + i * 30);
    newRect.setAttribute("y", "0");
    newRect.setAttribute("width", "25");
    newRect.setAttribute("height", "25");
    newRect.setAttribute("fill", "#5cceee");
    svg.appendChild(newRect);
}
