class Square extends Equation
{
    constructor()
    {
        super();
    }

    solve(a, b, c)
    {
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);
        let discriminant = b * b - 4 * a * c;
        if (discriminant < 0)
            return ["no", "no"];

        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        return [x1, x2];
    }

}
