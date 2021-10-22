class Multiply extends Operation
{

    constructor()
    {
        super();
    }

    doOperation(a, b)
    {
        return parseFloat(a) * parseFloat(b);
    }

}
