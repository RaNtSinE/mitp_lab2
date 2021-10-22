function solveLinear(a, b)
{
    a = parseFloat(a);
    b = parseFloat(b);

    if (a === 0)
        return ["no", "no"];

    let x = -b / a;
    return [x, x];
}
