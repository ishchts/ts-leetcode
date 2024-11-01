function twoSum(nums: number[], target: number): number[] {
    const hash: Record<string, number> = {};

    for (let i = 0; i < nums.length; i += 1) {
        const diff = target - nums[i];

        if (hash[nums[i]] !== undefined) {
            console.log('hash', hash);
            return [hash[nums[i]], i];
        }

        hash[diff] = i;
    }
    console.log('hash', hash);
    return [];
};

console.log('twoSum', twoSum([3,2,4], 6));