// 3 Functions doing task and returning promise
async function doTask1(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Task 1 Done");
        }, 1000);
    })
}

async function doTask2(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Task 2 Done");
        }, 3000);
    })
}

async function doTask3(){
    return await new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Task 3 Done");
        }, 2000);
    })
}

// generator doing task yielding promise
async function* myGenerator(){
    while(true){
        yield doTask1()
        .then(console.log)
        .catch(console.error);
        yield doTask2()
        .then(console.log)
        .catch(console.error);
        yield doTask3()
        .then(console.log)
        .catch(console.error);
    }
}


let genObj = myGenerator();
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
