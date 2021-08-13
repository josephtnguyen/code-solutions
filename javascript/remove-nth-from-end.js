/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (isNFromTail(head, n)) {
    return head.next;
  }

  let current = head;
  while (!isNFromTail(current.next, n)) {
    current = current.next;
  }
  current.next = current.next.next;
  return head;
};

function isNFromTail(node, n) {
  if (n === 1) {
    return node.next === null;
  }
  return isNFromTail(node.next, n - 1);
}
