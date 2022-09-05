// Linked list node
class Node{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    // insert at front in a linked list
    insert(value) {
        let newNode = new Node(value);
        if(this.head == null)
            this.head = newNode;
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
    // Print all elements of the linked list
    display(){
        let temp = this.head;
        while(temp != null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
    // creating Linked List from given array
    arrayToList(arr){
        for(let i = 0; i < arr.length; i++){
            this.insert(arr[i]);
        }
    }
}

export {LinkedList}