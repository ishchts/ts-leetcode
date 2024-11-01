function maxSubArray(nums: number[]): number {
    let maxSum = nums[0];
    let sum = nums[0];

    for (let i = 1; i < nums.length; i ++) {
        const num = nums[i];
        if (num > num + sum) {
            sum = num;
        } else {
            sum = num + sum;
        }

        if (sum > maxSum) {
            maxSum = sum;
        }
    };

    return maxSum;
};

console.log('maxSubArray', maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));