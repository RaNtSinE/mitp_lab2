class Linear extends Equation
{
    constructor()
    {
        super();
    }

    solve(a, b)
    {
        a = parseFloat(a);
        b = parseFloat(b);

        if (a === 0)
            return ["no", "no"];

        let x = -b / a;
        return [x, x];
    }

}
