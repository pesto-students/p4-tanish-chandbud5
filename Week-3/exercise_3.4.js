function createStack() {
    let items = []
    // push item in stack
    function push(item){
        items.push(item);
    }
    // pop item in stack
    function pop(){
        items.pop();
    } 
    // print items in stack
    function print(){
        for(let i=0; i<items.length; i++){
            console.log(items[i]);
        }
    }
    return {push, pop, print};
}
const stack = new createStack();
stack.print();
console.log(stack.items); // prints undefined as the items cannot be accessed directly
// need to use methods to modify or read items
stack.push(10);
stack.push(5);
stack.print();
stack.pop();
stack.print();