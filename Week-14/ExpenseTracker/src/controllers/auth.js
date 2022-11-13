const crypto = require('crypto');
const { ObjectId, MongoClient } = require('mongodb');

const uri = "mongodb+srv://chand:1234@nodetutorial.adgaqkr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });
(async () => {
    await client.connect();
    console.log("connected to DB");
})()

function createHash(password){
    const hash =  crypto.pbkdf2Sync(password, "0", 
        1000, 64, `sha512`).toString(`hex`);
    return hash;
}

async function signin(email, password){
    try{
        passwordHash = createHash(password);
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
}

async function signup(email, password, name){
    try{
        const db = client.db("NodeTuts");
        const collection = db.collection("Test");
        const doc = { email: email, password: createHash(password), name: name };
        const result = await collection.insertOne(doc);
        return result
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {signin, signup};