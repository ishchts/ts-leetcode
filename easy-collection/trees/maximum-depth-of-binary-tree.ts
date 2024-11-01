import TreeNode from './index';

// [3,9,20,null,null,15,7]
const trees = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(
        20,
        new TreeNode(15),
        new TreeNode(7),
    ),
)

function maxDepth (trees: TreeNode | null): number {
    if (!trees) {
        return 0;
    }

    return 1 + Math.max(maxDepth(trees?.left), maxDepth(trees?.right))
}

console.log(maxDepth(trees));