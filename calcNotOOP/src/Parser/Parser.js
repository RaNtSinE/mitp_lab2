function parseBrackets(expression) {
    let result = [];
    let str = this.giveString(expression, 0, ["(", ")"], 1);
    let priority = 1;
    result.push(str)
    for (let i = 0; i < expression.length; i++)
    {
        switch (expression[i]) {
            case "(":
            case ")":
                if (expression[i] === "(")
                    priority++;
                else
                    priority--;
                let string = this.giveString(expression, i + 1, ["(", ")"], priority);
                if (string && string.str)
                {
                    priority = string.priority;
                    result.push(string);
                }

                break;
            default:
                break;
        }
    }

    return result;
}

function getNumbers(expression, target) {
    let result = [];

    let exit = false;
    let left = target;
    let right = target;
    let leftLength = -1;
    let rightLength = -1;
    while (!exit)
    {
        left--;
        leftLength++;
        if (expression[left] === "*" ||
        expression[left] === "+" ||
        expression[left] === "/" ||
        expression[left] === "-" ||
        !expression[left])
        {
            exit = true;
        }
    }

    exit = false;

    while (!exit)
    {
        right++;
        rightLength++;
        if ((expression[right] === "*" ||
            expression[right] === "+" ||
            expression[right] === "/" ||
            expression[right] === "-" ||
            !expression[right]) && rightLength > 0)
        {
            exit = true;
        }
    }

    let addition = 1;

    if (expression[target] === "-")
    {
        target--;
        rightLength++;
        addition--;
    }

    if (expression[0] === "-")
    {
        left--;
        leftLength++;
    }

    result = [expression.substr(left + 1, leftLength),
        expression.substr(target + 1, rightLength),
        expression.substr(left + 1, rightLength + leftLength + addition)]
    return result
}

function giveString(string, start, delimiters, priority) {
    let i = start;
    let result = "";
    while (string[i])
    {
        for (let j = 0; j < delimiters.length; j++)
        {
            if (string[i] === delimiters[j])
            {
                return {priority: priority, str: result};
            }
        }
        if (string[i] !== ' ')
            result+=string[i];
        i++;
    }

    return {priority: priority, str: result};
}

// 1 + 2 * (3 - 2 / 2 * (2 + 2)) + (2 - 1)
