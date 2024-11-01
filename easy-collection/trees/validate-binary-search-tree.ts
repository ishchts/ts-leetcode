import TreeNode from "./index";

// [2,1,3]
const trees = new TreeNode(
    2,
    new TreeNode(1),
    new TreeNode(3)
)

function isValidBST(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    }

    const dfs = (node: TreeNode | null, min: number, max: number): boolean => {
        if (!node) {
            return true;
        }

        if (node?.val < max && node?.val > min) {
            return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
        }
    
        return false;
    }

    return dfs(root, -Infinity, Infinity);
};

console.log(isValidBST(trees));