function townJudge(edges, n){
    // created degree matrix with all elements as 0 for nodes 1 to n 
    let degree = Array(n+1).fill(0);

    // for every edge i,j we decrement degree of i and increment deg of j
    for(let i=0; i<edges.length; i++){
        degree[edges[i][0]]--;
        degree[edges[i][1]]++;
    }
    let judge = -1;
    // as nodes are from 1 to n discarded the first element
    degree.shift();
    // we check it there is any node with its degree = n-1 which means its all are connected to it but its connected to none
    for(let i=0; i<degree.length; i++){
        if(n-1 === degree[i])
            judge = i+1;
    }
    return judge;
}

let trust1 = [[1,3], [2,3]];
let trust2 = [[1,3], [2,3], [3,1]];
let trust3 = [[1,2]];

console.log(townJudge(trust1, 3));
console.log(townJudge(trust2, 4));
console.log(townJudge(trust3, 2));

// Output - 
// 3
// -1
// 2

// Time complexity - O(n)
// Space Complexity - O(n) -- calculate and store degree