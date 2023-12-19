// Chessboard fields
let fields = [
	[0, 0],
	[0, 1],
	[0, 2],
	[0, 3],
	[0, 4],
	[0, 5],
	[0, 6],
	[0, 7],
	[1, 0],
	[1, 1],
	[1, 2],
	[1, 3],
	[1, 4],
	[1, 5],
	[1, 6],
	[1, 7],
	[2, 0],
	[2, 1],
	[2, 2],
	[2, 3],
	[2, 4],
	[2, 5],
	[2, 6],
	[2, 7],
	[3, 0],
	[3, 1],
	[3, 2],
	[3, 3],
	[3, 4],
	[3, 5],
	[3, 6],
	[3, 7],
	[4, 0],
	[4, 1],
	[4, 2],
	[4, 3],
	[4, 4],
	[4, 5],
	[4, 6],
	[4, 7],
	[5, 0],
	[5, 1],
	[5, 2],
	[5, 3],
	[5, 4],
	[5, 5],
	[5, 6],
	[5, 7],
	[6, 0],
	[6, 1],
	[6, 2],
	[6, 3],
	[6, 4],
	[6, 5],
	[6, 6],
	[6, 7],
	[7, 0],
	[7, 1],
	[7, 2],
	[7, 3],
	[7, 4],
	[7, 5],
	[7, 6],
	[7, 7],
];

// Graph as adjacency list
let graph = new Map();

// Adding Notes
function addNote(position) {
	graph.set(position, []);
}

// Adding vertices
function addVertex(position, value) {
	graph.get(position).push(value);
}

// add all Notes to graph
fields.forEach((element) => {
	addNote(element);
});

// Add vertices for each field
fields.forEach((field) => {
	let results = createPossibleVertices(field);
	for (let i = 0; i < results.length; i++) {
		addVertex(field, results[i]);
	}
});

console.log(graph);

function createPossibleVertices(point) {
	let x = point[0];
	let y = point[1];

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

console.log(createPossibleVertices([3, 3]));
