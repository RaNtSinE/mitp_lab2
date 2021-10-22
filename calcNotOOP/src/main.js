let text = document.getElementsByClassName("Calculator")[0];
let result = document.getElementsByClassName("Result")[0];
let realResult = document.getElementsByClassName("RealResult")[0];

result.addEventListener("click", doCalculate)
let parts = [];

function doCalculate() {
    parts = parseBrackets(text.value)
    realResult.innerHTML = doMath(parts);
}
