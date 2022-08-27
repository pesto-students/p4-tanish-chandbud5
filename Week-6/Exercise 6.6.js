function Sum3_Closest(nums, target) {
    let difference = 9999999, ans;
    if(nums.length < 3)
        return ans;
    
    // Sorting the input
    nums.sort(function(a, b){
        return a-b;
    });
    
    // iterate over the array
    for(let i=0; i<nums.length; i++){
        // just to not consider duplicates
        if(i > 0 && nums[i] === nums[i-1])
            continue;
        let j = i+1, k = nums.length - 1;
        
        // From i+1 to n-1 we will check sum of 3 elements that is closest to target
        // If we find the target then return target else return closest sum
        // j and k used for itterating
        // ans stores the closest sum and diff stores the minimum difference we achieved
        while(j < k){
            let sum = nums[i] + nums[j] + nums[k];
            if(sum == target)
                return target;
            else if(Math.abs(sum - target) < difference)
            {
                difference = Math.abs(sum - target);
                ans = sum;
            }
            // if sum is more compared to target then decrement end index as the nums is sorted sum will get 
            // reduced, similarly if sum is smaller then increment j which is start index
            if(sum > target)
                k--;
            else
                j++;
        }
    }
    return ans;
};

console.log(Sum3_Closest([-1, 2, 1, 4], 1));
console.log(Sum3_Closest([4,0,5,-5,3,3,0,-4,-5],-2));

// Time Complexity - O(N^2) where N is length of input array
// Space complexity - O(1)