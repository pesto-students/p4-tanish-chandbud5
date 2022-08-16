class myPromise{
    constructor(callback){
        this.promiseChain = [];
        this.handleError = () => {};
        callback(this.onReject, this.onReject);
    }

    then(onResolve){
        this.promiseChain.push(onResolve);
        return this;
    }
    catch(handleError){
        this.handleError = handleError;
        return this;
    }

    onResolve(value){
        let storedVal = value;
        try{
            this.promiseChain.forEach((nextFunction) => {
                storedVal = nextFunction(storedVal);
            })
        }
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
    let num = Math.floor(Math.random() * 10);
    return new myPromise((resolve, reject) => {
        if(num % 5 != 0)
            resolve(num + " Resolved");
        else
            reject(num + " Rejected");
    })
}

let prom = getNumber().then((onResolve) => {
    console.log(onResolve);
}).catch((onReject)=>{
    console.log(onReject);
})
