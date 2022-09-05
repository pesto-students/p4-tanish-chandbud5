import {Stack} from './Stack.js';

function nextGreater(arr){
    let myStack = new Stack();
    let result = [];
    myStack.push(-1);
    for(let i=arr.length-1; i>=0; i--){
        if(myStack.peek() > arr[i]){
            result.unshift(myStack.peek());
        }
        else{
            while(myStack.peek() <= arr[i] && myStack.top > -1)
                myStack.pop();
            result.unshift(myStack.peek());
        }
        myStack.push(arr[i]);
    }
    return result;
}

console.log(nextGreater([1,3,2,4]));
console.log(nextGreater([6, 8, 0, 1, 3]));

// Time Complexity - O(N) - N elements in array
// Space Complexity - O(N) - To store elements in Stack

// Output -
// [ 3, 4, 4, -1 ]
// [ 8, -1, 1, 3, -1 ]