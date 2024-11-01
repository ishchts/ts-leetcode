function climbStairs(n: number): number {
    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 2;
    }

    let prev = 1;
    let current = 2;

    for (let i = 3; i < n + 1; i ++) {
        const newCurrent = current + prev;

        prev = current;
        current = newCurrent;
    }

    return current;
};

console.log(climbStairs(5));

// function maxProfit(prices: number[]): number {
//     let profit = 0;
//     let currentMin = prices[0];
  
//     for (let i = 1; i < prices.length; i++) {
//       const price = prices[i];
  
//       if (price - currentMin > profit) {
//         profit = price - currentMin;
//       }
      
//       currentMin = Math.min(currentMin, price)
  
//     }
  
//     return profit
//   };