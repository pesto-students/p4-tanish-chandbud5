class Graph{
    constructor(n){
        // create n*n adjacency matrix with no edges
        this.adj_matrix = [];
        for(let i=0; i<n; i++){
            this.adj_matrix.push([]);
            for(let j=0; j<n; j++){
                this.adj_matrix[i].push(0);
            }
        }
    }
    createGraph(arr){
        // for every edge in arr we modify the adjacency matrix
        for(let i=0; i<arr.length; i++){
            let u = arr[i][0], v = arr[i][1];
            this.adj_matrix[u][v] = 1;
            this.adj_matrix[v][u] = 1;
        }
    }
    createDirectedGraph(arr){
        // creating directed graph [u,v] indicate edge from u to v, 
        // but v to u may or may not exist
        for(let i=0; i<arr.length; i++){
            let u = arr[i][0], v = arr[i][1];
            this.adj_matrix[u][v] = 1;
        }
    }
    dfs(source, visited, path){
        let aux = [];
        visited.add(source);
        path.push(source)
        for(let i=0; i<this.adj_matrix.length; i++){
            if(!visited.has(i) && this.adj_matrix[source][i] == 1){
                aux.push(i);
            }
        }
        console.log(path);
        while(aux.length !=0 ){
            this.dfs(aux[aux.length-1], visited, path);
            aux.pop();
        }
    }
}

export {Graph}