import ListNode from './index';

const listNode1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const listNode2 = new ListNode(1, new ListNode(3, new ListNode(4)));

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const iter = (node1: ListNode | null, node2: ListNode | null): ListNode | null => {
        if (node1 === null || node2 === null) {
            const node = node1 ?? node2 ?? null;
            return node;
        }

        let value: number = 0;
        if (node1.val <= node2.val) {
            value = node1.val;
            node1 = node1.next;
        } else {
            value = node2.val;
            node2 = node2.next;
        }

        return new ListNode(value, iter(node1, node2));
        
    }

    const merged = iter(list1, list2);

    return merged;
};

console.log('mergeTwoLists', JSON.stringify(mergeTwoLists(listNode1, listNode2)));

/*
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null || list2 === null) {
        return list1 || list2;
    }

    let merged = new ListNode(0);
    let result = merged;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            merged.next = list1;
            list1 = list1.next;
        } else {
            merged.next = list2;
            list2 = list2.next;
        }

        merged = merged.next;
    }

    if (list1) {
        merged.next = list1;
    }

    if (list2) {
        merged.next = list2;
    }

    return result.next;
};
*/

let a: any = { value: 1, next: { value: 2, next: null } };
const b: any = a;

a = a.next;
// @ts-ignore
console.log('b', b);
console.log('a', a);
