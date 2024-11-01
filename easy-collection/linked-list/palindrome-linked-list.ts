import ListNode from './index';

function isPalindrome(list: ListNode | null): boolean {

    let head = list;
    let arr: number[] = [];

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    let y = 0;
    for (let i = arr.length - 1; i >= 0; i --) {
        if (arr[i] !== arr[y]) {
            return false
        }
        console.log('arr', arr[i], arr[y])
        y += 1;
    }
    return true;
};

//const list = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
const list = new ListNode(1, new ListNode(2, new ListNode(1)));

console.log('isPalindrome', isPalindrome(list));