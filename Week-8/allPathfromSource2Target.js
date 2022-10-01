let v;

let adjList;

// A directed graph using
// adjacency list representation
const Graph = (vertices) => {
    // initialise vertex count
    v = vertices;

    // initialise adjacency list
    initAdjList();
}

// utility method to initialise
// adjacency list
const initAdjList = () => {
    adjList = new Array(v);

    for (let i = 0; i < v; i++) {
        adjList[i] = [];
    }
}

// add edge from u to v
const addEdge = (u, v) => {
    // Add v to u's list.
    adjList[u].push(v);
}

// Prints all paths from
// 's' to 'd'
const printAllPaths = (s, d) => {
    let isVisited = new Array(v);
    for (let i = 0; i < v; i++)
        isVisited[i] = false;
    let pathList = [];

    // add source to path[]
    pathList.push(s);

    // Call recursive utility
    printAllPathsUtil(s, d, isVisited, pathList);
}

// A recursive const to print
// all paths from 'u' to 'd'.
// isVisited[] keeps track of
// vertices in current path.
// localPathList<> stores actual
// vertices in the current path
const printAllPathsUtil = (u, d, isVisited, localPathList) => {
    if (u == (d)) {
        console.log(localPathList + "\n");
        // if match found then no need to
        // traverse more till depth
        return;
    }

    // Mark the current node
    isVisited[u] = true;

    // Recur for all the vertices
    // adjacent to current vertex
    for (let i = 0; i < adjList[u].length; i++) {
        if (!isVisited[adjList[u][i]]) {
            // store current node
            // in path[]
            localPathList.push(adjList[u][i]);
            printAllPathsUtil(adjList[u][i], d,
                isVisited, localPathList);

            // remove current node
            // in path[]
            localPathList.splice(localPathList.indexOf
                (adjList[u][i]), 1);
        }
    }

    // Mark the current node
    isVisited[u] = false;
}

// Driver program
// Create a sample graph
Graph(4);
addEdge(0, 1);
addEdge(0, 2);
addEdge(2, 3);
addEdge(1, 3);

// arbitrary source
let source = 0;

// arbitrary destination
let destination = 3;

console.log(
    "Following are all different paths from "
    + source + " to " + destination + "\n");
printAllPaths(source, destination);

// Time complexity O(V^V)
// Space complexity O(V^V)



