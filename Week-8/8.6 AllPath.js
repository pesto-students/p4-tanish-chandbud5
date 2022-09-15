let graph = [[1,2],[3],[3],[]] 

var allPathsSourceTarget = function(adj_matrix) {
    // destination node
    const target = graph.length - 1;
    // all possible paths
    const ans = [];
    const DFS = (node,path) => {
        path.push(node);
        // if we reached target push that path to ans
        if(node === target) { 
            ans.push(path);
            return;
        }
        // take all nodes from graph[node] and run dfs from there
        for(let edge of graph[node]) {
            DFS(edge,[...path]);
        }
    }
    DFS(0,[]);
    return ans;
};

console.log(allPathsSourceTarget(graph))

// Output - [ [ 0, 1, 3 ], [ 0, 2, 3 ] ]
// Time complexity - O(n^2)
// Space Complexity - O(n) -- space used by stack in recurision otherwise O(1)
