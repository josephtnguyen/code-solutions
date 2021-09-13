function singlePointOfFailure(connections) {
  const n = connections.length;
  let points = 0;

  for (let i = 0; i < n; i++) {
    const node = connections[i];
    for (let j = i + 1; j < n; j++) {
      if (node[j]) {
        if (!pathFound(connections, {}, j, j, i, n)) points++;
      }
    }
  }

  return points;
}

function pathFound(con, visited, broken, j, i, checksLeft) {
  const n = con.length;
  const nextNode = con[j];
  visited[j] = true;

  if (checksLeft === 0) return false;

  for (let a = 0; a < n; a++) {
    if (nextNode[a] && !visited[a]) {
      if (a === i) {
        if (j === broken) continue;
        return true;
      }
      if (pathFound(con, visited, broken, a, i, checksLeft - 1)) return true;
    }
  }

  return false;
}

/*
for each node in connections
    for each nextNode in the node that is in front of node (so no double counting)
        recursively check nextNodes
        see if a path can be found to node that does not go from nextNode to node
                if node can be found from nextNode's other connections
                    return true
                if n connections have been traversed
                    return false
            increment points if no pathFound

return points
*/
