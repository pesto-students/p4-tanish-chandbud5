let a = [-2, 1, -3, 4, -1, 2, 1, -5, 4] 

// Kadane's Algorithm
function max_sum_subarray(arr) {
    // we maintain 2 pointers curr denoting current sum and 
    // ans denoting maximum sum obtained till now
    let curr = 0, ans = 0;
    for(let i=0; i<arr.length; i++){
        curr = curr + arr[i];
        ans = curr < ans ? ans : curr;
        // if our current sum gets < 0 we don't need that subarray so we reset it to 0
        if(curr < 0)
            curr = 0;
    }
    return ans;
}

console.log(max_sum_subarray(a));

// Output - 6
// Time complexity - O(N) - where N is number of elements
// Space Complexity - O(1)