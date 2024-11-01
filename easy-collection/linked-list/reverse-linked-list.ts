import ListNode from './index';

const head = [1,2,3,4,5];

const node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
// 1 -> 2 -> 3 -> 4 -> 5
// null <- 1 <- 2 <- 3 <- 4 <- 5


function reverseList(head: ListNode | null): ListNode | null {
    let prev = null;
    let curr = head;
    let next = null;

    while (curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
};
console.log('node', reverseList(node));
