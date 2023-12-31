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

	// Filter the possibilities for all still on the board
	return possibilities.filter(isInRange);
}

function isInRange(value) {
	if (value[0] >= 0 && value[0] <= 7 && value[1] >= 0 && value[1] <= 7) {
		return value;
	}
}

/* 
Using a BFS Algorithm to find the shortest path
--> Aditionally use aspects of Dijkstra's Algorithm 
Not using DFS because then one still needs 
another algorithm inorder to find the shortest
path among all paths.
*/

function searchPath(startingPoint, endpoint) {
	let distanceMap = new Map();
	let queue = [];
	let found = false;
	let connections = [];
	let visited = new Map();
	let lastNode;

	// enqueue startingpoint
	queue.push(startingPoint);

	// Add startingPoint to distanceMap

	while (!found) {
		// Get connections from first queued element
		connections = graph.get(queue[0].join(""));

		// Dequeue visited nodes and add them to visitedNodes array
		lastNode = queue.shift();

		// Iterate through all connections and enqueue them
		connections.forEach((con) => {
			if (con.join("") != endpoint.join("")) {
				// Check, if node was already visited
				if (!visited.has(con.join(""))) {
					distanceMap.set(con.join(""), lastNode.join(""));
					visited.set(con.join(""), "");
				}

				queue.push(con);
			} else {
				distanceMap.set(con.join(""), lastNode.join(""));
				found = true;
			}
		});
	}

	distanceMap.set(startingPoint.join(""), "");
	return distanceMap;
}

function shortestPath(startingPoint, endNode) {
	let distanceMap = searchPath(startingPoint, endNode);

	let previous = endNode.join("");
	let arr = [];

	do {
		arr.push(previous);
		previous = distanceMap.get(previous);
	} while (previous != "" && arr.length <= 64);

	// Log output as in example
	console.log(`=> You made it in ${arr.length} moves! Here is your path:`);

	for (let i = arr.length - 1; i >= 0; i--) {
		// logging the route and converting to Integers
		console.log(Array.from(arr[i], Number));
	}
}

shortestPath([0, 0], [7, 0]);
