/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  //not ideal
  if (!root) {
    return root;
  }

  let level = [root];
  while (true) {
    const nextLevel = [];
    for (let i = 0; i < level.length; i++) {
      const current = level[i];
      const next = level[i + 1];
      if (next) {
        current.next = next;
      }
      nextLevel.push(current.left);
      nextLevel.push(current.right);
    }
    if (nextLevel[0] === null) {
      break;
    }
    level = nextLevel;
  }
  return root;
};
