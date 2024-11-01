function countBits(n: number): number[] {
    const dp: number[] = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        const asd = dp[i & (i - 1)] + 1;
        dp[i] = asd;
    }
  
    return dp;
};

const n: number = 5;

console.log(countBits(n));