class Solution {
    origin: number[];
    nums: number[];
    constructor(nums: number[]) {
        this.origin = [...nums];
        this.nums = nums;
    }

    reset(): number[] {
        return this.origin;
    }

    shuffle(): number[] {
        for (let index = this.nums.length - 1; index >= 0; index --) {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            [this.nums[index], this.nums[randomIndex]] = [this.nums[randomIndex], this.nums[index]];
        }

        return this.nums;
    }
}

const solution = new Solution([1, 2, 3]);

for (let i = 0; i < 10; i++) {
    console.log('solution', solution.shuffle());
    console.log('solution reset', solution.reset());
}
