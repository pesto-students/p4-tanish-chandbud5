let vowels = ['a', 'e', 'i', 'o', 'u']

// check if given character is vowel or not
function isVowel(char){
    return vowels.indexOf(char) > -1;
}

function vowelCount(input){
    // initializing map
    let frequency_map = new Map();
    vowels.forEach((x) => {
        frequency_map[x] = 0;
    })
    // iterating over string and if particular char is vowel 
    // then increment its count in frequency_map
    for(let x of input){
        // converting all character to lower case 
        // so 'a' and 'A' are treated as same
        let char = x.toLowerCase();
        if(isVowel(char)){
            frequency_map[char]++;
        }
    }
    return frequency_map;
}

console.log(vowelCount("Aeio aEIo"));
console.log(vowelCount("The quick brown fox jumps over the lazy dog"));

// Output -
// Map(0) { a: 2, e: 2, i: 2, o: 2, u: 0 }
// Map(0) { a: 1, e: 3, i: 1, o: 4, u: 2 }