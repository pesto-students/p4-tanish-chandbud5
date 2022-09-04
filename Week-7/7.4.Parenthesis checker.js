import { Stack } from "./Stack.js";

function parenthesisChecker(exp){
    // initializing stack
    let myStack = new Stack();
    
    // looping over expression
    let i = 0;
    while(exp.length > i){
        // if opening bracket then push to stack
        if(exp[i] == '(' || exp[i] == '[' || exp[i] == '{'){
            myStack.push(exp[i]);
        }
        // if closing bracket then check if bracket currently at top of stack matches or not
        // if we have corresponding opening bracket then pop from stack 
        else if(exp[i] == ')' && myStack.peek() == '('){
            myStack.pop();
        }
        else if(exp[i] == ']' && myStack.peek() == '['){
            myStack.pop();
        }
        else if(exp[i] == '}' && myStack.peek() == '{'){
            myStack.pop();
        }
        // in case of inconsistent brackets return false
        else
            return false;
        i++;
    }
    return true;
}

console.log(parenthesisChecker('([))'));
console.log(parenthesisChecker('([])'));
console.log(parenthesisChecker('[()]{}{([][()}'));

// Time Complexity - O(N) - where N is length of expression
// Space Complexity - O(N) - To store elements in stack

// Output -
// false
// true
// false