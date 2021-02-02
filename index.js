//alert('Im Working. Im JS');
//console.log('Im Working. Im JS again');
/*
const calculator = {
    plus: function (a, b) {
        return a + b;
    }
}

const value = calculator.plus(5, 5);
console.log(value);


const title = document.getElementById("title");
console.log(title);

title.innerHTML = "Hi"

title.style.color = "red";

document.title = "Changed";

function handleResize(event) {
    console.log(event);
}
window.addEventListener("resize", handleResize);

function handleClick() {
    title.style.color = "blue";
}

title.addEventListener("click", handleClick);


const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function init() {
    title.style.color = BASE_COLOR;
}

function handleClick() {
    if (title.style.color === BASE_COLOR)
        title.style.color = OTHER_COLOR;
    else
        title.style.color = BASE_COLOR;
}

init();
title.addEventListener("click", handleClick);
// mouthenter 도 가능

*/
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if (!hasClass)
        title.classList.add(CLICKED_CLASS);
    else
        title.classList.remove(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}

init();