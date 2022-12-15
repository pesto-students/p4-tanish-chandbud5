function createIncrement() {
    let count = 0; // Declaring count
    function increment() { 
        count++;
    }
    let message = `Count is ${count}`; // message string decalred to 'Count is 0'
    function log() {
        console.log(message);
    }
    return [increment, log];
}
const [increment, log] = createIncrement();
increment(); // Incrementing count
increment();
increment();
log(); // It will log 'Count is 0'

// It is logging count is 0 because everytime on increment 
// count is being updated but the string message is not being updated
// after updating count. It is same as it was previously when declaration
// So when we log message it gives the value it is containing previously.