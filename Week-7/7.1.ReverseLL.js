import {LinkedList} from './LinkedList.js';

// using 3 pointers prev, curr, nextNode
function reverseLinkedList(head){
    let prev = null, curr = head, nextNode = head.next;
    while(curr.next != null){
        // curr points to prev
        // then update all 3 to next location
        curr.next = prev;
        prev = curr;
        curr = nextNode;
        nextNode = nextNode.next;
    }
    head = prev;
    curr.next = head;
    head = curr;
    return head;
}


let myList = new LinkedList();
myList.arrayToList([2,3,4,5,6]);
myList.display();
myList.head = reverseLinkedList(myList.head);
myList.display();

// Time Complexity - O(N) - where N is number of elements in Linked List
// Space Complexity - O(1)

// Output -
// 6 5 4 3 2
// 2 3 4 5 6
