// This class represents an bi-directional graph
// using adjacency list representation
let V; // No. of vertices

// Pointer to an array containing adjacency lists
let adj;
V = 3;
adj = new Array();
for (let i = 0; i < V; i++)
    adj.push(new Array());


// const to add an edge to graph
const addEdge = (v, w) => {
    adj[v].push(w);
    adj[w].push(v);
}

// A BFS based const to check whether d is reachable from s.
const isReachable = (s, d) => {
    // Base case
    if (s == d)
        return true;

    // Mark all the vertices as not visited
    let visited = new Array(V).fill(false);


    // Create a queue for BFS
    let queue = new Array();

    // Mark the current node as visited and enqueue it
    visited[s] = true;
    queue.push(s);

    while (queue.length != 0) {

        // Dequeue a vertex from queue and print it
        s = queue.pop();

        // Get all adjacent vertices of the dequeued vertex s
        // If a adjacent has not been visited, then mark it
        // visited and enqueue it
        for (let i = 0; i < adj[s].length; i++) {

            // If this adjacent node is the destination node,
            // then return true
            if (adj[s][i] == d)
                return true;

            // Else, continue to do BFS
            if (!visited[adj[s][i]]) {
                visited[adj[s][i]] = true;
                queue.push(adj[s][i]);
            }
        }
    }

    // If BFS is complete without visiting d
    return false;
}

// Driver program

// Create a graph given in the above diagram
addEdge(0, 1);
addEdge(0, 2);
addEdge(1, 2);
addEdge(2, 0);

let source = 0, destination = 2;
if (isReachable(source, destination))
    console.log("\n There is a path from " + source + " to " + destination);
else
    console.log("\n There is no path from " + source + " to " + destination);

// Time complexity O(V+E)
// Space complexity O(V)

