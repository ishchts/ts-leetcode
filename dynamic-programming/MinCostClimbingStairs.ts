function minCostClimbingStairs(cost: number[]): number {
    let n1 = cost[0];
    let n2 = cost[1];
    let ans = 0;

    for (let i = 2; i < cost.length; i += 1) {
        ans = cost[i] + Math.min(n1, n2);
        n1 = n2;
        n2 = ans
    }

    return Math.min(n1, n2);
};

const cost = [1,100,1,1,1,100,1,1,100,1];

console.log(minCostClimbingStairs(cost));

/*
function minCostClimbingStairs(cost: number[]): number {
    const dp = new Array(cost.length).fill(0);
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (let i = 2; i < dp.length; i += 1) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }

    return Math.min(dp[dp.length - 1], dp[dp.length - 2]);
};
*/