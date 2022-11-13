const { ObjectId, MongoClient } = require('mongodb');

const uri = "mongodb+srv://chand:1234@nodetutorial.adgaqkr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });
(async () => {
    await client.connect();
    console.log("connected to DB");
})()

async function viewAll() {
    try{
        const db = client.db("Pesto");
        const collection = db.collection("Income");
        const query = { email: "chandbud5@gmail.com"};
        const result = await collection.find(query).toArray();
        return result;
    }
    catch(error){
        console.log(error);
    }
}

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

async function filterByDate(from, to){
    try{
        const db = client.db("Pesto");
        const collection = db.collection("Income");
        const query = { date: {$gte:from, $lte:to}};
        const result = await collection.find(query).toArray();
        return result;
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {add, viewAll, deleteincome, updateincome, getOne, filterByDate}