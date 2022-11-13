const { ObjectId, MongoClient } = require('mongodb');

const uri = "mongodb+srv://chand:1234@nodetutorial.adgaqkr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });
(async () => {
    await client.connect();
    console.log("connected to DB");
})()

async function viewAll() {
    try{
        const db = client.db("NodeTuts");
        const collection = db.collection("Stocks");
        const query = { email: "chandbud5@gmail.com"};
        const result = await collection.find(query).toArray();
        return result;
    }
    catch(error){
        console.log(error);
    }
}

async function add(stock, value, owner) {
    try{
        const db = client.db("NodeTuts");
        const collection = db.collection("Stocks");
        const query = { email: owner, stock: stock, value: value};
        const result = await collection.insertOne(query);
        return result;
    }
    catch(error){
        console.log(error);
    }
}

async function deleteStock(id){
    try{
        const db = client.db("NodeTuts");
        const collection = db.collection("Stocks");
        const query = { _id: ObjectId(id)};
        const result = await collection.deleteOne(query);
        return result;
    }
    catch(error){
        console.log(error);
    }
}

async function updateStock(id, stock, value){
    try{
        const db = client.db("NodeTuts");
        const collection = db.collection("Stocks");
        const query = { _id: ObjectId(id)};
        const result = await collection.updateOne(query, {$set:{stock: stock, value: value}});
        return result;
    }
    catch(error){
        console.log(error);
    }
}

async function getOne(id){
    try{
        const db = client.db("NodeTuts");
        const collection = db.collection("Stocks");
        const query = { _id: ObjectId(id)};
        const result = await collection.findOne(query);
        return result;
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {add, viewAll, deleteStock, updateStock, getOne}