/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

  let carry = Math.floor((l1.val + l2.val) / 10);
  let value = (l1.val + l2.val) % 10;
  const added = new ListNode(value);
  let current = added;
  l1 = l1.next;
  l2 = l2.next;
  while (l1 || l2) {
    if (l1 !== null && l2 !== null) {
      value = (l1.val + l2.val + carry) % 10;
      carry = Math.floor((l1.val + l2.val + carry) / 10);
      l1 = l1.next;
      l2 = l2.next;
    } else if (l1 !== null && l2 === null) {
      value = (l1.val + carry) % 10;
      carry = Math.floor((l1.val + carry) / 10);
      l1 = l1.next;
    } else if (l1 === null && l2 !== null) {
      value = (l2.val + carry) % 10;
      carry = Math.floor((l2.val + carry) / 10);
      l2 = l2.next;
    }
    current.next = new ListNode(value);
    current = current.next;
  }
  if (carry) {
    current.next = new ListNode(carry);
  }
  return added;
};
