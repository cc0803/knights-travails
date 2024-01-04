// Graph as adjacency list
let graph = new Map();

// Adding Notes
function addNode(position) {
	graph.set(position, []);
}

// Adding vertices
function addVertex(position, value) {
	graph.get(position).push(value);
}

// add all Notes to graph
let node;

for (let i = 0; i < 8; i++) {
	for (let k = 0; k < 8; k++) {
		node = String(i) + String(k);
		addNode(node);
	}
}

// Get all the keys from graph as an array
let keys = [...graph.keys()];

// Add vertices for each field
keys.forEach((key) => {
	let results = createPossibleVertices(key.split(""));

	for (let i = 0; i < results.length; i++) {
		addVertex(key, results[i]);
	}
});

console.log(graph);

function createPossibleVertices(point) {
	let x = Number(point[0]);
	let y = Number(point[1]);

	let possibilities = [];

	// Create all posibilites
	possibilities.push([x + 2, y + 1]);
	possibilities.push([x - 2, y + 1]);
	possibilities.push([x + 1, y + 2]);
	possibilities.push([x - 1, y + 2]);
	possibilities.push([x - 2, y - 1]);
	possibilities.push([x + 2, y - 1]);
	possibilities.push([x + 1, y - 2]);
	possibilities.push([x - 1, y - 2]);

	let results = [];

	// Filter the possibilities for all still on the board
	possibilities.forEach((possibilitie) => {
		if (
			possibilitie[0] >= 0 &&
			possibilitie[0] <= 7 &&
			possibilitie[1] >= 0 &&
			possibilitie[1] <= 7
		) {
			results.push(possibilitie);
		}
	});

	return results;
}

/* 
Using a BFS Algorithm to find the shortest path
--> Aditionally use aspects of Dijkstra's Algorithm 
Not using DFS because then one still needs 
another algorithm inorder to find the shortest
path among all paths.
*/

function searchPath(startingPoint, endpoint) {
	let visitedNodes = [];
	let distanceMap = new Map();
	let queue = [];
	let found = false;
	let connections = [];
	let lastNode;

	// enqueue startingpoint
	queue.push(startingPoint);

	// Add startingPoint to distanceMap

	while (!found) {
		// Get connections from first queued element
		connections = graph.get(queue[0].join(""));

		// Dequeue visited nodes and add them to visitedNodes array
		lastNode = queue.shift();
		visitedNodes.push(lastNode);

		// Iterate through all connections and enqueue them
		connections.forEach((con) => {
			if (con.join("") != endpoint.join("")) {
				queue.push(con);

				distanceMap.set(con.join(""), lastNode.join(""));
			} else {
				found = true;
			}
		});
	}

	distanceMap.set(startingPoint.join(""), "");
	return distanceMap;
}

let distanceMap = searchPath([1, 3], [3, 7]);
console.log(distanceMap);

function shortestPath(startNode, endNode) {}
