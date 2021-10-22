class Calculator {

    constructor() {

        this.text = document.getElementsByClassName("Calculator")[0];
        this.result = document.getElementsByClassName("Result")[0];
        this.realResult = document.getElementsByClassName("RealResult")[0];

        this.result.addEventListener("click", this.doCalculate.bind(this))
        this.parser = new Parser();
        this.parts = [];
        this.operations = new Operations();
    }

    doCalculate() {
        this.parts = this.parser.parseBrackets(this.text.value)
        this.realResult.innerHTML = this.operations.doMath(this.parts);
    }

}

new Calculator();