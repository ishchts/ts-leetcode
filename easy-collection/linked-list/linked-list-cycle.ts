import ListNode from './index';

const head = [3,2,0,-4];

// function hasCycle(head: ListNode | null): boolean {
//     let node  = head;
//     const values = new Map();
//     while (node) {
//         if (values.get(node)) {
//             return true;
//         } else {
//             values.set(node, node);
//         }
//         node = node.next;
//     }

//     return false;
// };

function hasCycle(head: ListNode | null): boolean {
    let fast = head;
    let slow = head;

    while (slow && fast?.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast?.val === slow?.val) {
            return true
        }
    }

    return false;
};