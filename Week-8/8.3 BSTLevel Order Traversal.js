import { BinarySearchTree } from "./BinarySearchTree.js";

let sampleBST = new BinarySearchTree();
sampleBST.insert(5);
sampleBST.insert(8);
sampleBST.insert(2);
sampleBST.insert(1);
sampleBST.insert(3);
sampleBST.insert(12);
sampleBST.insert(20);

function levelOrder(root){
    let q = [];
    let temp = root;

    // add current node to the queue 
    q.push(temp);
    while(q.length > 0){

        // If current node has left and right elements then add them to queue
        if(temp.left != null){
            q.push(temp.left);
        }
        if(temp.right != null){
            q.push(temp.right);
        }
        // pop the current element and mark it as visited
        process.stdout.write(`${temp.data} `);
        q.shift();
        // new current element will be first element from queue
        temp = q[0];
    }
}

levelOrder(sampleBST.root);