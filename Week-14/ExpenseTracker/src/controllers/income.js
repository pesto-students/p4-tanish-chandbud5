// connecting to database
const { ObjectId, MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI
const client = new MongoClient(uri, { useUnifiedTopology: true });
(async () => {
    await client.connect();
    console.log("connected to DB");
})()

// return all income records for user
async function viewAll(email) {
    try{
        const db = client.db("Pesto");
        const collection = db.collection("Income");
        const query = { email: email};
        const result = await collection.find(query).toArray();
        return result;
    }
    catch(error){
        console.log(error);
    }
}

// add income record
async function add(type, amount, date, owner) {
    try{
        const db = client.db("Pesto");
        const collection = db.collection("Income");
        const query = { email: owner, type: type, value: amount, date: date};
        const result = await collection.insertOne(query);
        return result;
    }
    catch(error){
        console.log(error);
    }
}

// delete income record
async function deleteincome(id){
    try{
        const db = client.db("Pesto");
        const collection = db.collection("Income");
        const query = { _id: ObjectId(id)};
        const result = await collection.deleteOne(query);
        return result;
    }
    catch(error){
        console.log(error);
    }
}

// update income record
async function updateincome(id, type, amount, date){
    try{
        const db = client.db("Pesto");
        const collection = db.collection("Income");
        const query = { _id: ObjectId(id)};
        const result = await collection.updateOne(query, {$set:{ type: type, value: amount, date: date}});
        return result;
    }
    catch(error){
        console.log(error);
    }
}

// fetch particular income record using ID
async function getOne(id){
    try{
        const db = client.db("Pesto");
        const collection = db.collection("Income");
        const query = { _id: ObjectId(id)};
        const result = await collection.findOne(query);
        return result;
    }
    catch(error){
        console.log(error);
    }
}

// Filtering and querying records by date
async function filterByDate(from, to, owner){
    try{
        const db = client.db("Pesto");
        const collection = db.collection("Income");
        const query = { date: {$gte:from, $lte:to}, email: {$eq: owner}};
        const result = await collection.find(query).toArray();
        return result;
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {add, viewAll, deleteincome, updateincome, getOne, filterByDate}