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
var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) {
    return null;
  } else if (!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  }

  let current = new ListNode(Math.min(l1.val, l2.val));
  if (l1.val < l2.val) {
    l1 = l1.next;
  } else {
    l2 = l2.next;
  }
  const head = current;
  while (l1 || l2) {
    if (!l1) {
      current.next = l2;
      return head;
    } else if (!l2) {
      current.next = l1;
      return head;
    }

    current.next = new ListNode(Math.min(l1.val, l2.val));
    current = current.next;

    if (l1.val < l2.val) {
      l1 = l1.next;
    } else {
      l2 = l2.next;
    }
  }

};
