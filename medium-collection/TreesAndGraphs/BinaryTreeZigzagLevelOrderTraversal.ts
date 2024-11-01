import TreeNode from '../../easy-collection/trees/index';

const tree = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(
        20,
        new TreeNode(15),
        new TreeNode(7),
    ),
);

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    const stack = [];
    const result = [];

    while(root !== null || stack.length > 0) {
        
    }

    return result;
};

const res = zigzagLevelOrder(tree);
console.log('res', res);