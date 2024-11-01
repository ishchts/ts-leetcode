function fib(n: number, memo: number[] = [0, 1, 1]): number {
    if (n <= 1) {
        return n;
      }
    
      const dp: number[] = new Array(n + 1);
      dp[0] = 0;
      dp[1] = 1;
    
      for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
      }
    
      return dp[n];
};

const n: number = 0;

console.log(fib(n));

// function fib(n: number): number {
//     if (n <= 1) {
//       return n;
//     }
  
//     const dp: number[] = new Array(n + 1);
//     dp[0] = 0;
//     dp[1] = 1;
  
//     for (let i = 2; i <= n; i++) {
//       dp[i] = dp[i - 1] + dp[i - 2];
//     }
  
//     return dp[n];
// };