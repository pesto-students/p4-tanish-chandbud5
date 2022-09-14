import { Graph } from "./Graph.js";

let sampleGraph = new Graph(6);
let edges = [[0,1],[3,5],[5,4],[4,3],[2,5]]

// created graph with given edges
sampleGraph.createGraph(edges);

// we want to find path from u to v
function isPath(adj_matrix, u, v, visited){
    if(adj_matrix[u][v] == 1)
        return true;
    
    let traverse = [];
    visited[u] = true;
    // we will push all the neighbours of u to a traverse array
    for(let i=0; i<adj_matrix.length; i++){
        if(visited[i] === false && adj_matrix[u][i] === 1)
            traverse.push(i);
    }
    
    // for each element in traverse array we try to find path from there to v
    while(traverse.length != 0){
        let result = isPath(adj_matrix, traverse[0], v, visited);
        if(result === true)
            return result
        traverse.shift();
    }
    return false;
}

let visited = [false, false, false, false, false, false,]
console.log(isPath(sampleGraph.adj_matrix, 5, 1, visited));