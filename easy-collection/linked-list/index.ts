class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

const head = new ListNode(
  4,
  new ListNode(
    5,
    new ListNode(
      1,
      new ListNode(
        9
      )
    )
  )
);

const nodes: number = 5;

// function deleteNode(root: ListNode | null): void {
//   const nextEl = root.next
//   root.val = nextEl.val
//   root.next = nextEl.next
// };

function deleteNode(node: ListNode | null): void {
  if (!node) {
    return
  }

  if (!node.next) {
    return
  }

  if (node.next.val === nodes) {
    node.next = node.next.next;
  }
  
  deleteNode(node.next)
};

// deleteNode(head);
// console.log(head);

export default ListNode;