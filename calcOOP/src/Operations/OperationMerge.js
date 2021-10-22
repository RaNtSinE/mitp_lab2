
class OperationMerge
{

    doMerge(expressions, targetExpression)
    {
        let leftMerge = false;
        let rightMerge = false;

        if (targetExpression> 0 && expressions[targetExpression].priority === expressions[targetExpression - 1].priority + 1)
            leftMerge = true;
        if (targetExpression + 1 < expressions.length && expressions[targetExpression].priority === expressions[targetExpression + 1].priority + 1)
            rightMerge = true;

        if (leftMerge && targetExpression > 0)
        {
            expressions[targetExpression - 1] = {
                priority: expressions[targetExpression - 1].priority,
                str: expressions[targetExpression - 1].str + expressions[targetExpression].str
            };
            expressions.splice(targetExpression, 1);
            targetExpression--;
        }
        if (rightMerge && targetExpression < expressions.length)
        {
            expressions[targetExpression + 1] = {
                priority: expressions[targetExpression + 1].priority,
                str: expressions[targetExpression].str + expressions[targetExpression + 1].str
            };
            expressions.splice(targetExpression, 1);
        }

        return expressions;

        // return parseFloat(a) - parseFloat(b);
    }
}
