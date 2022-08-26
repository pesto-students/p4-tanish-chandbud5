input = [2, 0, 1, 0, 1, 0];

// sort_012 we fill zeros from front and twos from end so by default ones get in between
function sort_012(input) {
    // 2 pointers zeros and twos
    // zeros indicate last occurence of zero, twos indicate first occurence of two
    let zeros = -1, twos = input.length;
    // Iteration 0 to twos as after twos all elements will be 2 no need to sort
    for(let i=0; i<twos; i++){
        // if input[i] is 0 then swap with zero++ index
        if(input[i] == 0){
            zeros++;
            [input[i], input[zeros]] = [input[zeros], input[i]];
        }
        // if inputp[i] is 2 then swap with two-- index
        else if(input[i] == 2){
            twos--;
            [input[i], input[twos]] = [input[twos], input[i]];
            i--;
        }
        // if input[i] is 1 do nothing
    }
    return input;
}

console.log(sort_012(input));

