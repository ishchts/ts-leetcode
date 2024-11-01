function generate(numRows: number): number[][] {
    let ans: number[][] = [];

    for (let i = 0; i < numRows; i += 1) {
        const prevAr = ans[i - 1];

        if (prevAr) {
            let prev: number = 0;
            let current: number = 0;
            let res: number[] = [];

            for (let y = 0; y < i + 1; y += 1) {
                current = prevAr[y] ?? 0;
                res.push(prev + current);
                prev = current;
            }

            ans.push(res);
        } else {
            ans.push([i + 1]);
        }
    }

    return ans;
};

console.log('generate', generate(5));