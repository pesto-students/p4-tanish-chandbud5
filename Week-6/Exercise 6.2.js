function spiral_order(input) {
    let start_row = 0, end_row = 0, start_col = 0, end_col = 0;    
    end_row = input.length - 1;
    end_col = input[0].length - 1;
    let answer = []
    while(start_row <= end_row && start_col <= end_col){
        // iterating first row going left to right
        for(let i=start_col; i<=end_col; i++){
            answer.push(input[start_row][i]);
        }
        start_row++;
    
        // iterating last column going top to bottom
        for(let i=start_row; i<=end_row; i++){
            answer.push(input[i][end_col]);
        }
        end_col--;
        
        // iterating last row from right to left
        for(let i=end_col; i>=start_col; i--){
            answer.push(input[end_row][i]);
        }
        end_row--;
        
        // iterating first column going bottom to top
        for(let i=end_row; i>=start_row; i--){
            answer.push(input[i][start_col]);
        }
        start_col++;
    }
    return answer;
}

let input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(spiral_order(input));
console.log(spiral_order([[1,2,3], [4,5,6], [7,8,9], [10,11,12]]));

// Output - 
// [1, 2, 3, 6, 9, 8, 7, 4, 5]
// [1,  2,  3, 6, 9, 12, 11, 10, 7, 4, 5, 8]

// Time Complexity - O(N^2) - N is number of element in row
// Space complexity - O(1)
// We are using array just to store ans so ultimately its O(1)