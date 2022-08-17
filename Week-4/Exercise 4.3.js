// Creating fibonacci object
let fibonacci = {
    a: 0,
    b: 1,
    // limit tells how many numbers in fibonacci series to print
    limit: 0,
    count: 0,

    // Creating iterator object
    [Symbol.iterator]() {
        return this;
    },

    // next method returns next number in fibonacci series
    next(){
        // computing next number in fibonacci series
        if(this.count > 1){
            temp = this.a + this.b;
            this.a = this.b;
            this.b = temp;
            this.count++;
            return {value: this.b, done: this.limit < this.count}
        }
        // second number in fibonacci series
        else if(this.count == 1){
            this.count++;
            return {value: this.b, done: false};
        }
        // first number in fibonacci series
        else{
            this.count++;
            return {value: this.a, done: false};
        }
    },
}

// set number of elements to print in fibonacci series 
fibonacci.limit = 11;

// for of loop to get next element in fibonacci series
for (const i of fibonacci){
    console.log(i);
}

// Output - 
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55