function hasDeadlock(connections) {
  const n = connections.length;
  for (let i = 0; i < n; i++) {
    for (const edge of connections[i]) {
      if (checkEdges(connections, edge, n - 1)) return true;
    }
  }

  return false;
}

function checkEdges(con, pointer, visitsLeft) {
  if (visitsLeft === 0) return true;

  for (const edge of con[pointer]) {
    if (checkEdges(con, edge, visitsLeft - 1)) return true;
  }
  return false;
}

/*
for each connection in connections
    start pointer at connection
    for each edge in connection
        recursively check edges
        if we have visited n edges
            return true

return false

*/
