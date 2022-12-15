// Create Memoize function

function add(a, b){
    return a+b;
}

// High complexity function to calculate nth tribonacci
function tribonacci(a){
    if(a == 0)
        return 0;
    else if(a == 1 || a==2)
        return 1;
    else
        return tribonacci(a-1) + tribonacci(a-2) + tribonacci(a-3);
}

// Calculates factorial of a number
function facto(a){
    if(a <= 2)
        return a;
    else
        return a*facto(a-1);
}

// Memoization - Create a map check if input key exist or not
// If exist then retrun the same value from cache
// Else compute the value using function and add it to cache
function memoize(func){
    const cache = new Map();
    return function(...args){
        const key = args.toString();
        if(cache.has(key)){
        }
        else{
            let result = func(...args);
            cache.set(key, result);
        }
        return cache.get(key);
    };
}

function timeTaken(fn){
    console.time();
    fn();
    console.timeEnd();
}

let tribonacciMemo = memoize(tribonacci);
let factoMemo = memoize(facto);
let addMemo = memoize(add);

timeTaken(() => addMemo(35000, 4005));
timeTaken(() => addMemo(35000, 4005));

timeTaken(() => tribonacciMemo(25));
timeTaken(() => tribonacciMemo(25));

timeTaken(() => factoMemo(60));
timeTaken(() => factoMemo(60));