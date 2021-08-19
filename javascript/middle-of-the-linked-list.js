/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let currentNode = head;
  let middleNode = head;
  let updateMiddle = false;
  while (currentNode) {
    if (updateMiddle) {
      middleNode = middleNode.next;
      updateMiddle = false;
    } else {
      updateMiddle = true;
    }
    currentNode = currentNode.next;
  }
  return middleNode;
};
