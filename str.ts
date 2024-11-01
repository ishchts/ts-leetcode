function sortColors(nums: number[]): void {
    const map: number[][] = [[], [], []];

    for (let i = 0; i < nums.length; i += 1) {
        map[nums[i]].push(nums[i]);
    }
    console.log('map', map);
};

const nums: number[] = [2,0,2,1,1,0];

sortColors(nums)
console.log('sortColors', nums);