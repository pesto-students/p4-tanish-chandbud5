function pair_difference(input, k) {
    // frequency is a map storing number of time element occured
    let frequency = new Map();
    for(let i=0; i<input.length; i++){
        if(frequency[input[i]])
            frequency[input[i]]++;
        else
            frequency[input[i]] = 1;
    }
    
    // iterate over complete array if input[i] - k exist in map then 
    // we can return 1/true else return 0/false 
    for(let i=0; i<input.length; i++){
        let req_number = input[i] - k;
        if(frequency[req_number])
        {
            return true;
        }
    }
    return false;
}

let input = [5, 10, 3, 2, 50, 80]
console.log(pair_difference(input, 78))
console.log(pair_difference([-10, 20], 30))

// Output - true
//          true

// Time Complexity - O(N) - where N is number of elements in input array
// Space complexity - O(N) - To store elements in map and achieve O(1) for search