class myPromise{
    // constructor will execute the callback
    constructor(callback){
        this.promiseChain = [];
        this.handleError = () => {};
        callback(this.onReject, this.onReject);
    }

    // then handler adds promise to promiseChain
    then(onResolve){
        this.promiseChain.push(onResolve);
        return this;
    }
    // catch handler to handle errors
    catch(handleError){
        this.handleError = handleError;
        return this;
    }
    // onResolve
    onResolve(value){
        let storedVal = value;
        try{
            // computing values and executing then handler from promise chain
            this.promiseChain.forEach((nextFunction) => {
                storedVal = nextFunction(storedVal);
            })
        }
        // In case something breaks while executing promisChain
        catch (err){
            this.promiseChain = [];
            this.onReject(err);
        }
    }
    onReject(err){
        console.log(err);
    }
}

function getNumber() {
    // generating number
    let num = Math.floor(Math.random() * 10);
    // creating promise resolve / reject
    return new myPromise((resolve, reject) => {
        if(num % 5 != 0)
            resolve(num + " Resolved");
        else
            reject(num + " Rejected");
    })
}

// attaching handlers to promise
let prom = getNumber().then((onResolve) => {
    console.log(onResolve);
}).catch((onReject)=>{
    console.log(onReject);
})

// Output -
// 4 Resolved
// 5 Rejected