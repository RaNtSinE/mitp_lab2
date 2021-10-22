function doMath(expressions)
{
    let result = 0;
    let exit = false;

    while (!exit)
    {
        let highestPriority = 0;
        for (let i = 0; i < expressions.length; i++)
        {
            if (expressions[i].priority > highestPriority)
                highestPriority = expressions[i].priority;
        }

        let targetExpression = expressions.findIndex(expression => expression.priority === highestPriority)
        if (targetExpression !== -1)
        {
            let expression = expressions[targetExpression].str
            let firstPriorityOperators = 0;
            let secondPriorityOperators = 0;
            for (let j = 1; j < expression.length; j++)
            {
                if (expression[j] === "*" ||
                    expression[j] === "/")
                {
                    firstPriorityOperators++;
                }
                else if (expression[j] === "+" ||
                    (expression[j] === "-" && expression[j - 1] &&
                        !(expression[j - 1] === "/" || expression[j - 1] === "+" || expression[j - 1] === "*")))
                {
                    secondPriorityOperators++;
                }
            }

            while (firstPriorityOperators > 0)
            {
                for (let j = 0; j < expression.length; j++)
                {
                    if (expression[j] === "/" || expression[j] === "*")
                    {
                        let numbers = getNumbers(expression, j);
                        let result = 0;

                        if (expression[j] === "/")
                            result = doDivision(numbers[0], numbers[1]);
                        else
                            result = doMultiply(numbers[0], numbers[1]);

                        expression = expression.replace(numbers[2], result);
                        firstPriorityOperators--;
                        break;
                    }
                }
            }

            while (secondPriorityOperators > 0)
            {
                for (let j = 1; j < expression.length; j++)
                {
                    if (expression[j] === "+" || expression[j] === "-")
                    {
                        let numbers = getNumbers(expression, j);
                        result = doAddition(numbers[0], numbers[1]);

                        expression = expression.replace(numbers[2], result);
                        secondPriorityOperators--;
                        break;
                    }
                }
            }
            expressions[targetExpression] = {priority: expressions[targetExpression].priority, str: expression};
            expressions = doMerge(expressions, targetExpression)

        }

        let operations = 0;
        for (let j = 1; j < expressions[0].str.length; j ++)
        {
            if (expressions[0].str[j] === "*" ||
                expressions[0].str[j] === "-" ||
                expressions[0].str[j] === "+" ||
                expressions[0].str[j] === "/")
                operations++;
        }
        if (expressions.length === 1 && operations === 0)
            exit = true;
    }

    result = expressions;
    return result[0].str;
}
