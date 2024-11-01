function subsets(nums: number[]): number[][] {
    const res: number[][] = [];

    const subset: number[] = [];

    const iter = (index: number): void => {
        if (index >= nums.length) {
            res.push([...subset]);
            return;
        }

        subset.push(nums[index]);
        iter(index + 1);

        subset.pop();
        iter(index + 1);
    }

    iter(0);

    return res;
};

const nums = [1, 2, 3];

console.log(subsets(nums));
