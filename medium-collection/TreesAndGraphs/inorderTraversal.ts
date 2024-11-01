import TreeNode from '../../easy-collection/trees/index';

function inorderTraversal(root: TreeNode | null): number[] {
    const stack: TreeNode[] = [];
    const result: number[] = [];

    while(root !== null || stack.length > 0) {
        if (root !== null) {
            stack.push(root);
            root = root.left;
        } else {
            const node = stack.pop();
            if (node) {
                result.push(node.val);
                root = node.right;
            }
        }
    }

    return result;
};

const tree = new TreeNode(
    1,
    null,
    new TreeNode(
        2,
        new  TreeNode(3),
        null,
    ),
);

console.log('tree', inorderTraversal(tree));
