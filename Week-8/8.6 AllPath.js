import { Graph } from "./Graph.js";

let graph = [[1,2],[3],[3],[]] 

// function createAdj(graph){
//     let size = graph.length;
//     let g = new Graph(size);
//     let adj_matrix = g.adj_matrix;
//     for(let i=0; i<size; i++){
//         for(let j=0; j<graph[i].length; j++){
//             adj_matrix[i][graph[i][j]] = 1;
//         }
//     }
//     return adj_matrix;
// }
// let adj_matrix = createAdj(graph);

var allPathsSourceTarget = function(adj_matrix) {
    const target = graph.length - 1;
    
    const res = [];
    
    const DFS = (node,path) => {
        
        path.push(node);
        if(node === target) { 
            res.push(path);
            return;
        }
        for(let edge of graph[node]) {
            DFS(edge,[...path]);
        }
    }
    DFS(0,[]);
    return res;
};

// console.log(adj_matrix);
console.log(allPathsSourceTarget(graph))