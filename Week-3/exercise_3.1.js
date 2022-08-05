// Create Memoize function

function add(a, b){
    return a+b;
}

function tribonacci(a){
    if(a == 0)
        return 0;
    else if(a == 1 || a==2)
        return 1;
    else
        return tribonacci(a-1) + tribonacci(a-2) + tribonacci(a-3);
}

function facto(a){
    if(a <= 2)
        return a;
    else
        return a*facto(a-1);
}

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

console.log("Memoizing Add....");
timeTaken(() => addMemo(35000, 4005));
timeTaken(() => addMemo(35000, 4005));


console.log("Memoizing Tribonacci....");
timeTaken(() => tribonacciMemo(25));
timeTaken(() => tribonacciMemo(25));

console.log("Memoizing factorial....");
timeTaken(() => factoMemo(60));
timeTaken(() => factoMemo(60));