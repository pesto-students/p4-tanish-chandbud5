const crypto = require('crypto');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://chand:1234@nodetutorial.adgaqkr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });

function createHash(password){
    const hash =  crypto.pbkdf2Sync(password, "0", 
        1000, 64, `sha512`).toString(`hex`);
    return hash;
}

async function signin(email, password){
    try{
        passwordHash = createHash(password);
        await client.connect();
        const db = client.db("NodeTuts");
        const collection = db.collection("Test");
        const query = { email: email};
        const result = await collection.findOne(query);
        
        if(result['password'] == passwordHash){
            console.log("Login successfull");
            return result;
        }
        else{
            return "Unsuccessful Login";
        }

    }
    catch (error) {
        console.log(error);
    }
    finally {
        await client.close();
    }
}

async function signup(email, password, name){
    try{
        await client.connect();
        const db = client.db("NodeTuts");
        const collection = db.collection("Test");
        const doc = { email: email, password: createHash(password), name: name };
        const result = await collection.insertOne(doc);
        return result
    }
    catch (error) {
        console.log(error);
    }
    finally {
        await client.close();
    }
}

module.exports = {signin, signup};