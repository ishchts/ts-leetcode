function rob(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0];
    }

    if (nums.length === 2) {
        return Math.max(...nums);
    }


    let prevMaxSum = nums[0];
    let curMaxSum = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i ++) {
        console.log('prevMaxSum', prevMaxSum);
        console.log('curMaxSum', curMaxSum);
        let nextMaxSum = Math.max(nums[i] + prevMaxSum, curMaxSum);
        console.log('nextMaxSum', nextMaxSum);
        prevMaxSum = curMaxSum;
        curMaxSum = nextMaxSum;
    }

    return curMaxSum;
};

const nums = [1,2,3,1]; // 4
const nums2 = [2,1,1,2]; //4

// console.log('rob', rob(nums));
// console.log('rob nums2', rob(nums2));
console.log('rob nums3', rob([1,3,1,3,100])); // 12
// console.log('rob nums4', rob([2,7,9,3,1])); // 12
// console.log('rob nums4', rob([0])); // 0

// prev 1
// cur 3
// next 1 + prev, cur