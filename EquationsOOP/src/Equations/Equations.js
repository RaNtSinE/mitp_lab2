class Equations
{

    constructor()
    {
        this.linear = new Linear();
        this.square = new Square();
    }

    findSolutions(a, b, c)
    {
        let result = [0, 0];
        if (parseFloat(a) === 0)
            result = this.linear.solve(b, c);
        else
            result = this.square.solve(a, b, c);

        return result;
    }

}
