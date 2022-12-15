import { LinkedList } from "./LinkedList.js";

// creating a loop in linked list after k elements
function createLoop(head, k){
    let kth = head, newHead = null, tail = head;
    while(tail.next != null){
        if(k-- > 0)
            kth = tail;
        tail = tail.next;
    }
    tail.next = kth;
}

// detect loop in linked list
// if loop exist return true else false
function detectLoop(head){
    let slow = head, fast = head.next;
    // 2 pointers slow and fast if they meet at some point we have a loop 
    // else no loop detected if we reach end of linked list
    while(slow != fast && slow != null && fast != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    if(slow == fast)
        return true;
    else
        return false;
}


let myList = new LinkedList();
myList.arrayToList([2,3,4,5,6]);
console.log((detectLoop(myList.head)));
createLoop(myList.head, 3);
console.log((detectLoop(myList.head)));

// Time Complexity - O(N) - where N is number of elements in Linked List
// Space Complexity - O(1)

// Output -
// false
// true