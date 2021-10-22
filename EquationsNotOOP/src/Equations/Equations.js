function findSolutions(a, b, c)
{
    let result = [0, 0];
    if (parseFloat(a) === 0)
        result = solveLinear(b, c);
    else
        result = solveSquare(a, b, c);

    return result;
}
