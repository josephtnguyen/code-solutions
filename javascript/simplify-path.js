function simplifyPath(path) {
  const cmds = path.split('/');

  const pathStack = [];
  for (const cmd of cmds) {
    if (cmd === '.' || cmd === '') {
      continue;
    } else if (cmd === '..') {
      pathStack.pop();
    } else {
      pathStack.push(cmd);
    }
  }

  return '/' + pathStack.join('/');
}


/*
split the path into a series of commands
using the commands, create a pathStack
    <directory> pushes to the stack
    .. pops from the stack
    . or "" does nothing
join pathStack to get simplified stack
*/
