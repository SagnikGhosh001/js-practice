const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: ["A"],
  E: ["F"],
  F: [],
};

// //Print all nodes starting from "A"
// //dfs
// const dfs = (graph, start, visited = new Set()) => {
//   if (visited.has(start)) return;

//   console.log(start);
//   visited.add(start);
//   for (const adj of graph[start]) {
//     nodesStartingFrom(graph, adj, visited);
//   }
// };

// //bfs
// const bfs = (graph, start) => {
//   const visited = new Set();
//   const queue = [start];

//   while (queue.length !== 0) {
//     const current = queue.shift();
//     console.log(current);

//     for (const adj of graph[current]) {
//       if (!visited.has(adj)) {
//         visited.add(adj);
//         queue.push(adj);
//       }
//     }
//   }
// };

//Return all possible paths from "A" to "F"

const dfs = (
  graph,
  node,
  end,
  paths = [],
  currentPath = [],
  visited = new Set(),
) => {
  if (node === end) {
    paths.push([...currentPath, end]);
    return;
  }

  if (visited.has(node)) return;
  currentPath.push(node);
  visited.add(node);

  for (const adj of graph[node]) {
    dfs(graph, adj, end, paths, currentPath, visited);
  }

  currentPath.pop();
  visited.delete(node);
};

// [
//   ["A", "B", "E", "F"],
//   ["A", "C", "F"]
// ]
