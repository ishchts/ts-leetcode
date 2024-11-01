import TreeNode from "./index";

const trees = new TreeNode(
    3,
    new TreeNode(
        9,
    ),
    new TreeNode(
        20,
        new TreeNode(
            15,
        ),
        new TreeNode(
            7,
        ),
    ),
);

const trees2 = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(
            4,
        ),
    ),
    new TreeNode(
        3,
        null,
        new TreeNode(
            5,
        ),
    ),
);

function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) {
        return [];
    }

    const result: number[][] = [];

    const traversal = (node: TreeNode | null, level: number): void => {
        if (node === null) {
            return;
        }

        if (!result[level]) {
            result[level] = [];
        }

        if (node.val !== null) {
            result[level].push(node.val);
        }

        traversal(node.left, level + 1)
        traversal(node.right, level + 1);
    }
    traversal(root, 0);

    return result;
};

console.log('levelOrder', levelOrder(trees));
console.log('levelOrder2', levelOrder(trees2));


