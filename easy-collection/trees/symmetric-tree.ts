import TreeNode from "./index";

//[1,2,2,3,4,4,3]
const trees = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(3),
        new TreeNode(4),
    ),
    new TreeNode(
        2,
        new TreeNode(4),
        new TreeNode(3),
    ),
);

function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) {
        return true;
    }

    const isMirror = (left: TreeNode | null, right: TreeNode | null): boolean => {
        if (left === null && right === null) {
            return true;
        }

        if (left?.val === right?.val) {
            return isMirror(left?.left ?? null, right?.right ?? null) && 
                isMirror(left?.right ?? null, right?.left ?? null);
        }

        return false;
    }
    
    return isMirror(root.left, root.right);
};

console.log(isSymmetric(trees));