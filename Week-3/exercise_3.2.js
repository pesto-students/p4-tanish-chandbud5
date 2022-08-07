function add(){
    return this.a + this.b;
}

// This function takes positional arguments
function add_subtract(x, y){
    console.log(this.a, "+", this.b, "=", this.a + this.b);
    return x - y;
}

// Two sample inputs
inputs_1 = {a: 45, b:23};
inputs_2 = {a: 32, b: 25};

// As it is not binded undefined will be printed
// because this will refer to global context
console.log(add());
// Binding add with sample inputs
let addBinded = add.bind(inputs_1);
console.log(addBinded());
// Once we bind it with an object it becomes permanent
let nestedBind = addBinded.bind(inputs_2);
console.log(nestedBind());
console.log(typeof addBinded);

// Calling add with sample input objects
// This is just executing function no permanent binding
let input1_call = add.call(inputs_1);
console.log(input1_call, typeof input1_call);
let input2_call = add.call(inputs_2);
console.log(input2_call);

// We are passing an object here and also the array of inputs 
// which will be given to positional arguments
input_arr = [35, 65];
let arr_apply_result = add_subtract.apply(inputs_1, input_arr);
console.log(arr_apply_result);