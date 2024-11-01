function generateParenthesis(n: number): string[] {
    const result: string[] = [];
    
    const dfs = (
        comb: string,
        openBracket: number,
        closeBracket: number,
        stack: number
        ) => {
        if (n * 2 === comb.length) {
            stack -= 1;
            result.push(comb);
            return;
        }

        if (openBracket < n) {
            dfs(comb + '(', openBracket + 1, closeBracket, stack + 1);
        }

        if (closeBracket < openBracket) {
            dfs(comb + ')', openBracket, closeBracket + 1, stack + 1);
        }

    }

    dfs('', 0, 0, 0);
    return result;    
};

console.log(generateParenthesis(3));

