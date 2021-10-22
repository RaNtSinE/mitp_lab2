class Calculator {

    constructor() {

        this.a = document.getElementsByClassName("A")[0];
        this.b = document.getElementsByClassName("B")[0];
        this.c = document.getElementsByClassName("C")[0];
        this.result = document.getElementsByClassName("Result")[0];
        this.resultX1 = document.getElementsByClassName("X1")[0];
        this.resultX2 = document.getElementsByClassName("X2")[0];

        this.result.addEventListener("click", this.doCalculate.bind(this))
        this.equations = new Equations();
    }

    doCalculate() {
        let result = this.equations.findSolutions(this.a.value, this.b.value, this.c.value);

        this.resultX1.innerHTML = result[0];
        this.resultX2.innerHTML = result[1];
    }

}

new Calculator();