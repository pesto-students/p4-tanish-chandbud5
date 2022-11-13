//connecting to database
const { ObjectId, MongoClient } = require('mongodb');
const uri = "mongodb+srv://chand:1234@nodetutorial.adgaqkr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });
(async () => {
    await client.connect();
    console.log("connected to DB");
})()

// list all expenses
async function viewAll(email) {
    try{
        const db = client.db("Pesto");
        const collection = db.collection("Expense");
        const query = { email: email };
        const result = await collection.find(query).toArray();
        return result;
    }
    catch(error){
        console.log(error);
    }
}

// add expense to database
async function add(type, amount, date, owner) {
    try{
        const db = client.db("Pesto");
        const collection = db.collection("Expense");
        const query = { email: owner, type: type, value: amount, date: date};
        const result = await collection.insertOne(query);
        return result;
    }
    catch(error){
        console.log(error);
    }
}

// delete expense by ID
async function deleteExpense(id){
    try{
        const db = client.db("Pesto");
        const collection = db.collection("Expense");
        const query = { _id: ObjectId(id)};
        const result = await collection.deleteOne(query);
        return result;
    }
    catch(error){
        console.log(error);
    }
}

// update expense
async function updateExpense(id, type, amount, date){
    try{
        const db = client.db("Pesto");
        const collection = db.collection("Expense");
        const query = { _id: ObjectId(id)};
        const result = await collection.updateOne(query, {$set:{ type: type, value: amount, date: date}});
        return result;
    }
    catch(error){
        console.log(error);
    }
}

// fetch particular expense record from id
async function getOne(id){
    try{
        const db = client.db("Pesto");
        const collection = db.collection("Expense");
        const query = { _id: ObjectId(id)};
        const result = await collection.findOne(query);
        return result;
    }
    catch(error){
        console.log(error);
    }
}

// filter expenses by ID
async function filterByDate(from, to, owner){
    try{
        const db = client.db("Pesto");
        const collection = db.collection("Expense");
        const query = { date: {$gte:from, $lte:to}, email: {$eq: owner}};
        const result = await collection.find(query).toArray();
        return result;
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {add, viewAll, deleteExpense, updateExpense, getOne, filterByDate}