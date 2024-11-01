function coinChange(coins: number[], amount: number): number {
    const sumMoney = new Array(amount + 1).fill(Infinity);
    sumMoney[0] = 0;

    for (let i = 0; i < coins.length; i += 1) {
        const coin = coins[i];
        for (let j = coin; j < sumMoney.length; j += 1) {
            const current = sumMoney[j];
            const newRes = sumMoney[j - coin] + 1
            sumMoney[j] = Math.min(current, newRes);
        }
    }
    return sumMoney[amount] <= amount ? sumMoney[amount]: -1;
};

console.log(coinChange([1, 2, 5], 11));