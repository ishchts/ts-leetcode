/*

Two Pointers algorithm. Two Pointers algorithm - это алгоритм, который использует два указателя, обычно начало и конец массива или строкового значения,
которые движутся вместе или в разных направлениях, в зависимости от задачи.

*/
// [-1, -1, -4, 0, 1, 2]

const isEqual = (a: number[], b: number[]): boolean => {
    return !!a.length && !!b.length && a.every((el, index) => a[index] === b[index])
}

function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i += 1) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        const rootEl = nums[i];
        for (let leftIndex = i + 1, rightIndex = nums.length - 1; leftIndex < rightIndex;) {
            const leftPoint = nums[leftIndex];
            const rightPoint = nums[rightIndex];
            const sum = rootEl + leftPoint + rightPoint;

            if (sum < 0) {
                leftIndex += 1;
            }

            if (sum > 0) {
                rightIndex -= 1;
            }

            if (sum === 0) {
                const newEl = [rootEl, leftPoint, rightPoint];
                if (!isEqual(newEl, (result[result.length - 1] ?? []))) {
                    result.push(newEl);
                }
                leftIndex += 1;
                rightIndex -= 1;
            }
        }
    }

    return result;
};

console.log('threeSum', threeSum([-2,0,0,2,2]));