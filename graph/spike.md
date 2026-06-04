# Cluedo Spike Problem Sheet

---

# Board Model

## Node Types

- **T (Tile)** — a walkable corridor cell that players move through
- **D (Door)** — a transition node that sits between a tile and a room
- **R (Room)** — a named location node where players can make accusations

## Connection Rules

- Tiles connect to other tiles
- Tiles connect to doors
- Doors connect to rooms
- Rooms are not pass-through nodes, meaning we cannot walk from one room
  directly into another

---

# Spike Concepts

These are the core ideas behind the coding problems. Worth reading through
before diving into the code.

## 1. Dice Movement Range

Given a starting tile and a dice roll of N, find every node a player can reach
in exactly N steps. This is the core movement mechanic and worth getting right
early.

## 2. Room Entry Validation

A player cannot jump directly from a tile into a room. The only valid path is
tile to door to room. Any move that skips the door should be rejected.

## 3. Cycle-Safe Pathfinding

When finding all possible paths through the graph, we need to make sure the
traversal does not loop forever. Tracking visited nodes is the key here.

## 4. Dynamic Blocking

Players or game events can block certain nodes mid-game. Our movement logic
needs to treat blocked nodes as impassable and route around them.

## 5. Shortest Path to a Room

Given a starting tile, find the shortest route to a target room using BFS. This
is useful for player hints and highlighting reachable rooms.

## 6. Board Validation

Before the game starts, we check that the board is in a valid state. This means
every room is reachable from the corridor, every door connects to both a tile
and a room, and no node is completely isolated.

## 7. Dice Path Counting

Given a start node and a step count N, count how many distinct paths exist that
are exactly N steps long. This is different from movement range because it
counts paths, not destinations.

## 8. Visibility

From a given node, find all nodes that are within a certain range. This can be
used for things like line-of-sight checks or UI highlighting.

## 9. State Explosion

As the dice roll increases, the number of possible paths grows very fast.
Understanding why this happens and how to prune or memoize our search is
important before we hit performance problems.

---

# Practice Map

```js
const graph = {
  T1: ["T2"],
  T2: ["T1", "T3", "D1"],
  T3: ["T2", "T4"],
  T4: ["T3", "T5", "D2"],
  T5: ["T4"],

  D1: ["T2", "R1"],
  D2: ["T4", "R2"],

  R1: ["D1"],
  R2: ["D2"],
};

const nodeTypes = {
  T1: "T",
  T2: "T",
  T3: "T",
  T4: "T",
  T5: "T",
  D1: "D",
  D2: "D",
  R1: "R",
  R2: "R",
};
```

**Blocked nodes:** a list of node names that are temporarily impassable. The
graph does not change. Blocked nodes are simply skipped during traversal.

---

# Coding Problems

---

## C1. Find All Reachable Nodes in N Steps

Write a function that takes a start node and a step count N and returns every
node that can be reached in exactly N steps. A path can revisit nodes, but only
the final position after exactly N steps counts. Do not include the start node
in the result.

```js
const reachableInNSteps = (graph, start, n) => {
  // your code here
};

// Expected
reachableInNSteps(graph, "T2", 2); // ["T1", "T4", "D1"]
```

---

## C2. Validate a Move Path

Write a function that takes an array of nodes representing a path and returns
true if every consecutive pair is directly connected in the graph. Also reject
any path that jumps directly from a tile to a room, skipping the door.

```js
const isValidPath = (graph, nodeTypes, path) => {
  // your code here
};

// Expected
isValidPath(graph, nodeTypes, ["T2", "D1", "R1"]); // true
isValidPath(graph, nodeTypes, ["T2", "R1"]); // false — skipped the door
isValidPath(graph, nodeTypes, ["T3", "D1"]); // false — T3 and D1 are not adjacent
```

---

## C3. Find All Paths Between Two Nodes

Write a function that returns all possible simple paths from a start node to an
end node. A simple path does not revisit any node.

```js
const findAllPaths = (graph, start, end) => {
  // your code here
};

// Expected
findAllPaths(graph, "T1", "R1");
// [["T1", "T2", "D1", "R1"]]
```

---

## C4. Shortest Path Using BFS

Write a function that returns the shortest path between two nodes using BFS.
Return the path as an array of node names. If no path exists, return null.

```js
const shortestPath = (graph, start, end) => {
  // your code here
};

// Expected
shortestPath(graph, "T1", "R2");
// ["T1", "T2", "T3", "T4", "D2", "R2"]
```

---

## C5. Reachability With Blocked Nodes

Write a function that checks if a target node is reachable from a start node
given a set of blocked nodes. Blocked nodes should be completely skipped during
traversal.

```js
const isReachable = (graph, start, target, blocked) => {
  // your code here
};

// Expected
isReachable(graph, "T1", "R2", ["T3"]); // false — T3 is the only bridge to that side
isReachable(graph, "T1", "R1", ["T3"]); // true  — R1 is still reachable via T2 and D1
```

---

## C6. Count Paths in Exactly N Steps

Write a function that counts how many distinct paths exist from a start node to
an end node in exactly N steps. A path can revisit nodes.

```js
const countPathsInNSteps = (graph, start, end, n) => {
  // your code here
};

// Expected
countPathsInNSteps(graph, "T2", "T4", 2); // 1  — only T2->T3->T4
countPathsInNSteps(graph, "T2", "T2", 2); // 3  — T2->T1->T2, T2->T3->T2, T2->D1->T2
```

---

## C7. Find Nodes Within Visibility Range

Write a function that returns all nodes reachable within a given range from a
start node. Unlike C1, this includes nodes reachable in any number of steps up
to the range, not just exactly N steps.

```js
const visibleNodes = (graph, start, range) => {
  // your code here
};

// Expected
visibleNodes(graph, "T2", 2); // ["T1", "T3", "D1", "T4", "R1"]
// T1, T3, D1 are 1 step away
// T4 and R1 are 2 steps away
```

---

## C8. Validate the Entire Board

Write a function that checks three things: every room has at least one door
connected to it, every door connects to both a tile and a room, and no node is
isolated. Return an empty array if the board is valid, or a list of error
strings describing each problem found.

```js
const validateBoard = (graph, nodeTypes) => {
  // your code here
};

// Expected
validateBoard(graph, nodeTypes); // []

validateBoard({ T1: ["T2"], T2: [] }, { T1: "T", T2: "T" });
// ["T1 lists T2 as neighbour but T2 does not list T1"]
```

---

## C9. Detect Critical Node

Write a function that takes a single node name and returns true if removing that
node splits the graph into two or more disconnected sections. These are the
bottleneck nodes we need to watch for.

```js
const isCriticalNode = (graph, node) => {
  // your code here
};

// Expected
isCriticalNode(graph, "T3"); // true  — removing T3 cuts off T4, T5, D2, R2
isCriticalNode(graph, "T1"); // false — removing T1 only isolates itself
```

---

## C10. Find All Rooms Reachable From a Position

Write a function that returns all rooms a player can reach from a given start
node, respecting blocked nodes. This is useful for showing a player which rooms
are currently accessible.

```js
const reachableRooms = (graph, start, blocked, nodeTypes) => {
  // your code here
};

// Expected
reachableRooms(graph, "T1", [], nodeTypes); // ["R1", "R2"]
reachableRooms(graph, "T1", ["T3"], nodeTypes); // ["R1"]
```

---

## C11. Find All Doors Connected to a Room

Write a function that returns all door nodes directly connected to a given room.
This is useful when a player wants to exit a room and we need to show them which
doors they can leave from.

```js
const doorsOfRoom = (graph, room, nodeTypes) => {
  // your code here
};

// Expected
doorsOfRoom(graph, "R1", nodeTypes); // ["D1"]
doorsOfRoom(graph, "R2", nodeTypes); // ["D2"]
```

---

## C12. Check if Two Players Will Collide

Write a function that takes two intended paths and returns true if both players
will occupy the same node at the same step. Step 0 is the starting position.

```js
const willCollide = (pathA, pathB) => {
  // your code here
};

// Expected
willCollide(["T1", "T2", "T3"], ["T3", "T2", "T1"]); // true  — both at T2 on step 1
willCollide(["T1", "T2"], ["T3", "T4"]); // false
```

---

## C13. Find the Nearest Room

Write a function that takes a start node and returns the closest room by number
of steps, along with the full path and the step count.

```js
const nearestRoom = (graph, start, nodeTypes) => {
  // your code here
};

// Expected
nearestRoom(graph, "T1", nodeTypes);
// { room: "R1", path: ["T1", "T2", "D1", "R1"], steps: 3 }
```

---

## C14. Get All Valid Exit Tiles From a Room

When a player is inside a room and wants to move out, return all tiles they can
step onto after exiting through any connected door.

```js
const exitTiles = (graph, room, nodeTypes) => {
  // your code here
};

// Expected
exitTiles(graph, "R1", nodeTypes); // ["T2"]
exitTiles(graph, "R2", nodeTypes); // ["T4"]
```

---

## C15. Check if Board is Fully Connected

Write a function that returns true if every node in the graph can reach every
other node. If any node is isolated or cut off, return false.

```js
const isFullyConnected = (graph) => {
  // your code here
};

// Expected
isFullyConnected(graph); // true

const brokenGraph = { ...graph, T5: [] };
isFullyConnected(brokenGraph); // false — T5 has no neighbours
```

---

## C16. Find All Tiles Adjacent to a Room

Write a function that returns all tile nodes that are exactly one door away from
a given room. These are the tiles a player needs to be standing on in order to
enter that room on their next move.

```js
const tilesAdjacentToRoom = (graph, room, nodeTypes) => {
  // your code here
};

// Expected
tilesAdjacentToRoom(graph, "R1", nodeTypes); // ["T2"]
tilesAdjacentToRoom(graph, "R2", nodeTypes); // ["T4"]
```

---

## C17. Shortest Path Avoiding a Specific Node Type

Write a function that finds the shortest path from start to end but skips all
nodes of a given type. If no such path exists, return null.

```js
const shortestPathAvoidingType = (graph, start, end, nodeTypes, avoidType) => {
  // your code here
};

// Expected
shortestPathAvoidingType(graph, "T1", "T5", nodeTypes, "D");
// ["T1", "T2", "T3", "T4", "T5"] — full tile path, no doors needed

shortestPathAvoidingType(graph, "T1", "R1", nodeTypes, "T");
// null — every route to R1 passes through at least one tile
```

---

## C18. Reachable Rooms Per Player

Given a list of player positions and a set of blocked nodes, return a map of
each player position to the list of rooms they can currently reach.

```js
const allPlayersReachableRooms = (graph, players, blocked, nodeTypes) => {
  // your code here
};

// Expected
allPlayersReachableRooms(graph, ["T1", "T5"], ["T3"], nodeTypes);
// { T1: ["R1"], T5: ["R2"] }
```

---

## C19. Detect Isolated Nodes After Multiple Blocks

Write a function that takes a list of blocked nodes and returns any nodes that
become completely unreachable from the rest of the unblocked graph as a result.

```js
const isolatedNodes = (graph, blocked) => {
  // your code here
};

// Expected
isolatedNodes(graph, ["T2", "T4"]); // ["T1", "T3", "T5", "D1", "D2", "R1", "R2"]
isolatedNodes(graph, ["T3"]); // [] — the graph splits but neither side is fully isolated
```

---

## C20. Trace All Nodes a Player Passes Through in a Turn

Given the full path a player takes in one turn as an ordered array of node
names, return every node they pass through including start and end. This is
useful for triggering events on intermediate nodes, not just the final
destination.

```js
const traceFullPath = (graph, path) => {
  // your code here
};

// Expected
traceFullPath(graph, ["T1", "T2", "T3", "T4"]); // ["T1", "T2", "T3", "T4"]
traceFullPath(graph, ["T2", "D1", "R1"]); // ["T2", "D1", "R1"]
```
