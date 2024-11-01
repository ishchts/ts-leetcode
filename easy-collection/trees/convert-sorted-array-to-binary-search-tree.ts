import TreeNode from './index';

const nums = [-10,-3,0,5,9];

function sortedArrayToBST(nums: number[]): TreeNode | null {
    nums.sort((a, b) => a - b);

    const dfs = (nums: number[]): TreeNode | null => {
        if (!nums.length) {
            return null;
        }

        const indexmMiddle = Math.floor(nums.length / 2);

        const middle = nums[indexmMiddle];
        const left = nums.slice(0, indexmMiddle);
        const right = nums.slice(indexmMiddle + 1);

        return new TreeNode(
            middle,
            left.length > 0 ? dfs(left) : null,
            right.length > 0 ? dfs(right) : null,
        )
    }

    return dfs(nums);
};

console.log(sortedArrayToBST(nums));
console.log(sortedArrayToBST([1,3]));