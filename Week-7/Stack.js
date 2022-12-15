class Stack{
    // creating array for stack and initialize top to -1
    constructor(){
        this.arr = [];
        this.top = -1;
    }
    // push element to stack and increment top pointer
    push(value){
        this.arr.push(value);
        this.top++;
    }
    // pop element from stack and decrement top pointer
    pop(){
        if(this.top < 0)
            return -1;
        let val = this.arr.pop();
        this.top--;
        return val;
    }
    // return the element at the top of stack
    peek(){
        if(this.top < 0)
            return -1;
        return this.arr[this.top];
    }
    // creating stack from given array
    arrToStack(values){
        for(let i = 0; i<values.length; i++){
            this.arr.push(values[i]);
            this.top++;
        }
    }
}

export {Stack}