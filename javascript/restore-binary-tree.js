//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function restoreBinaryTree(inorder, preorder) {
  const root = new Tree(preorder.shift());
  const stack = [root];

  const positionMap = {};
  for (let i = 0; i < inorder.length; i++) {
    positionMap[inorder[i]] = i;
  }

  while (preorder[0] !== undefined) {
    const nextNode = new Tree(preorder.shift());
    const nextNodePosition = positionMap[nextNode.value];
    let checking = true;
    while (checking) {
      const currentRoot = stack[stack.length - 1];
      const currentRootPosition = positionMap[currentRoot.value];
      const previousRoot = stack[stack.length - 2];
      if (nextNodePosition < currentRootPosition) {
        currentRoot.left = nextNode;
        checking = false;
      } else if (!previousRoot || nextNodePosition < positionMap[previousRoot.value]) {
        stack.pop();
        currentRoot.right = nextNode;
        checking = false;
      } else {
        stack.pop();
      }
    }
    stack.push(nextNode);
  }

  return root;
}

/*
start at root node
add root to rootStack
loop through preorder
    set nextNode to be preorder[i]
    find nextNode in Inorder
    checking = true
    while checking
        set currentRoot to top of rootStack
        find currentRoot in Inorder
        if nextNode in Inorder is left of currentRoot
            nextNode is left child of currentRoot
            checking = false
        else if (nextNode in Inorder is right of currentRoot) and [left of previousRoot or there is no previousRoot]
            pop rootStack
            nextNode is right child of currentRoot
            checking - false
        else if (nextNode in Inorder is right of currentRoot) and (right of previousRoot)
            pop rootStack
    push nextNode to rootStack

nextNode:     6
currentRoot:  5
previousRoot: 3
rootStack:    3



*/
