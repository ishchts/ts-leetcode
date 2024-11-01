
function maxProfit(prices: number[]): number {
    let buy = prices[0];
    let profit: number = 0;

    for (let i = 1; i < prices.length; i ++) {
        const sell = prices[i];

        if (sell - buy > profit) {
            profit = sell - buy;
        } else {
            buy = Math.min(sell, buy);
        }
    }

    return profit;
};

console.log('maxProfit22', maxProfit([7,1,5,3,6,4]));
