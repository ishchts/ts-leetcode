import ListNode from '../index';

function middleNode(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next?.next || null;
    }

    return slow;
};