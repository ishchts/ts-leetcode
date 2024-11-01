import ListNode from '../../easy-collection/linked-list';

const list1 = new ListNode(
    2,
    new ListNode(
        4,
        new ListNode(
            3
        )
    )
);

const list2 = new ListNode(
    5,
    new ListNode(
        6,
        new ListNode(
            4
        )
    )
)

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 === null && l2 === null) {
        return null;
    }

    const finish = new ListNode();

    const iter = (list1: ListNode | null, list2: ListNode | null, remainder: number, result: ListNode): ListNode => {
        if (list1 === null && list2 === null) {
            if (remainder > 0) {
                result.next = new ListNode(remainder);
            }
            if (finish.next) {
                return finish.next;
            }
        }

        const newValue = (list1?.val ?? 0) + (list2?.val ?? 0) + remainder;

        const value = newValue >= 10 
            ? newValue - 10
            : newValue;
        
        result.next = new ListNode(value)
        return iter(list1?.next ?? null, list2?.next || null, newValue >= 10 ? 1 : 0, result.next);
    }

    return iter(l1, l2, 0, finish);
};

console.log('list', addTwoNumbers(list1, list2));
