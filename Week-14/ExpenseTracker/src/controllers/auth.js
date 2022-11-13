// hash the password
const crypto = require('crypto');

// Connect to database
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://chand:1234@nodetutorial.adgaqkr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });
(async () => {
    await client.connect();
    console.log("connected to DB");
})()

// creating hash
function createHash(password){
    const hash =  crypto.pbkdf2Sync(password, "0", 
        1000, 64, `sha512`).toString(`hex`);
    return hash;
}

// sign in user and match credentials with database
async function signin(email, password){
    try{
        passwordHash = createHash(password);
        const db = client.db("Pesto");
        const collection = db.collection("Users");
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

// signup add user into database
async function signup(email, password, name){
    try{
        const db = client.db("Pesto");
        const collection = db.collection("Users");
        const doc = { email: email, password: createHash(password), name: name };
        const result = await collection.insertOne(doc);
        return result
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {signin, signup};