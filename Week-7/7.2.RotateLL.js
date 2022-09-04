import { LinkedList } from "./LinkedList.js";

// rotate k elements from linked list
function rotateLL(head, k){
    let kth = head, newHead = null, tail = head;

    // maintain pointer at k elements kth
    // pointer at k+1 position newHead (as all elements before it will go to back of linked list)
    // tail and head for back and front of linked list
    while(tail.next != null){
        if(k-- > 0)
            kth = tail;
        tail = tail.next;
    }

    // kth's next points to null as it will be last element
    // tail's next points to head
    // newHead will be head
    newHead = kth.next;
    kth.next = null;
    tail.next = head;
    head = newHead;
    return head;
}


let myList = new LinkedList();
myList.arrayToList([2,4,7,8,9]);
myList.display();
myList.head = rotateLL(myList.head, 3);
myList.display();

// Time Complexity - O(N) - where N is number of elements in Linked List
// Space Complexity - O(1)

// Output -
// 9 8 7 4 2
// 4 2 9 8 7
