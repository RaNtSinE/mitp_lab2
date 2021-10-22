let a = document.getElementsByClassName("A")[0];
let b = document.getElementsByClassName("B")[0];
let c = document.getElementsByClassName("C")[0];
let result = document.getElementsByClassName("Result")[0];
let resultX1 = document.getElementsByClassName("X1")[0];
let resultX2 = document.getElementsByClassName("X2")[0];

result.addEventListener("click", doCalculate)

function doCalculate()
{
        let result = findSolutions(a.value, b.value, c.value);

        resultX1.innerHTML = result[0];
        resultX2.innerHTML = result[1];
    }