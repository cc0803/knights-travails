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
	let arr;

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

function searchPath(startingPoint, Endpoint) {
	let visitedNodes = [];
	let queue = [];
	let distanceMap = new Map();
	let found = false;

	while (!found) {
		graph.get(startingPoint).forEach();
	}
}

// Creating Object for distanceMap
function createPathTableObject(shortest, previous) {
	return {
		shortestPath: shortest,
		previousNode: previous,
	};
}
