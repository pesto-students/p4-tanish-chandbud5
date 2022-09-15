import {BinarySearchTree} from './BinarySearchTree.js';

// Creating tree and inserting nodes 
let sampleBST = new BinarySearchTree();
sampleBST.insert(5);
sampleBST.insert(8);
sampleBST.insert(2);
sampleBST.insert(1);
sampleBST.insert(3);
sampleBST.insert(12);
sampleBST.insert(20);

function maxDepth(root){
    let depth = 0;
    if(root === null)
        return -1;
    
    // max depth = max depth from left and right + 1
    depth = Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    return depth;
}

console.log(maxDepth(sampleBST.root));

// Output - 3 
// Time Complexity - O(n)
// Space complexity - O(1)