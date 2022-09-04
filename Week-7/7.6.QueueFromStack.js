import { Stack } from "./Stack.js";

// Queue using 2 stacks
class Queue{
    // creating stacks
    constructor(){
        this.main = new Stack();
        this.auxiliary = new Stack();
    }
    // push directly to main stack in O(1)
    push(value){
        this.main.push(value);
    }
    // empty main stack to auxiliary stack and delete element 
    // at top of auxiliary then push all elements from auxiliary stack back to main stack
    // Time complexity - O(N) to transfer elements
    pop(){
        while(this.main.top >= 0){
            this.auxiliary.push(this.main.pop());
        }
        let val = this.auxiliary.pop();
        while(this.auxiliary.top >= 0){
            this.main.push(this.auxiliary.pop());
        }
        return val;
    }
    // Display elements in stacks
    display(){
        console.log("Main", this.main);
        console.log("Aux", this.auxiliary);
    }
}

// creating queue
let myQueue = new Queue();
// push elements to queue
myQueue.push(5);
myQueue.push(6);
myQueue.push(7);
// display elements in queue
myQueue.display();
// pop elements from queue
console.log(myQueue.pop());
console.log(myQueue.pop());
console.log(myQueue.pop());
console.log(myQueue.pop());

// Time Complexity - O(N): for pop and O(1) for push
// Space Complexity - O(1)

// Output - 
// Main Stack { arr: [ 5, 6, 7 ], top: 2 }
// Aux Stack { arr: [], top: -1 }
// 5
// 6
// 7
// -1