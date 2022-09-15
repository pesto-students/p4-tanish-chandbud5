import { BinarySearchTree } from "./BinarySearchTree.js";

let sampleBST = new BinarySearchTree();
sampleBST.insert(5);
sampleBST.insert(8);
sampleBST.insert(2);
sampleBST.insert(1);
sampleBST.insert(3);
sampleBST.insert(12);
sampleBST.insert(20);

function inorder(root, result = []){
    if(root === null)
        return result;
    else{
        inorder(root.left, result);
        result.push(root.data);
        inorder(root.right, result);
    }
    return result;
}

function isSorted(result){
    for(let i=0; i<result.length-1; i++){
        if(result[i] > result[i+1])
            return false;
    }
    return true;
}

function isValidBST(root){
    // find the inorder of BST if its sorted then its valid BST
    let inord = inorder(root);
    return isSorted(inord);
}

console.log(isValidBST(sampleBST.root));
sampleBST.root.right.data = -1;
console.log(isValidBST(sampleBST.root));

// Output - 
// true
// false
 
// Time Complexity - O(n)
// Space complexity - O(1)