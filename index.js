//alert('Im Working. Im JS');
//console.log('Im Working. Im JS again');

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