let button = document.querySelector("button");
let p = document.getElementById("example");

function handleButton() {
    someText = "Hello, world!";
    p.textContent = someText;
}

button.addEventListener("click", handleButton);