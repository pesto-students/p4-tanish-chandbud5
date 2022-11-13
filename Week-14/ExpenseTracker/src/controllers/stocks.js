const {client} = require('../../index')
const { ObjectId } = require('mongodb');

async function viewAll() {
    try{
        await client.connect();
        const db = client.db("NodeTuts");
        const collection = db.collection("Stocks");
        const query = { email: "chandbud5@gmail.com"};
        const result = await collection.find(query).toArray();
        return result;
    }
    catch(error){
        console.log(error);
    }
    finally{
        await client.close();
    }
}

async function add(stock, value, owner) {
    try{
        await client.connect();
        const db = client.db("NodeTuts");
        const collection = db.collection("Stocks");
        const query = { email: owner, stock: stock, value: value};
        const result = await collection.insertOne(query);
        return result;
    }
    catch(error){
        console.log(error);
    }
    finally{
        await client.close();
    }
}

async function deleteStock(id){
    try{
        await client.connect();
        const db = client.db("NodeTuts");
        const collection = db.collection("Stocks");
        const query = { _id: ObjectId(id)};
        const result = await collection.deleteOne(query);
        return result;
    }
    catch(error){
        console.log(error);
    }
    finally{
        await client.close();
    }
}

async function updateStock(id, stock, value){
    try{
        await client.connect();
        const db = client.db("NodeTuts");
        const collection = db.collection("Stocks");
        const query = { _id: ObjectId(id)};
        const result = await collection.updateOne(query, {$set:{stock: stock, value: value}});
        return result;
    }
    catch(error){
        console.log(error);
    }
    finally{
        await client.close();
    }
}

async function getOne(id){
    try{
        await client.connect();
        const db = client.db("NodeTuts");
        const collection = db.collection("Stocks");
        const query = { _id: ObjectId(id)};
        const result = await collection.findOne(query);
        return result;
    }
    catch(error){
        console.log(error);
    }
    finally{
        await client.close();
    }
}

module.exports = {add, viewAll, deleteStock, updateStock, getOne}