const { MongoClient } = require('mongodb')

const url = "mongodb://127.0.0.1:27017/"

//create an instance of MongoClient class and give the url to connect to mongoDB
const client = new MongoClient(url);

//create connection by using the .connect() method of MongoCLient and it returns a promise
async function connectToDB(){
    try{
        await client.connect();
        console.log("Connected to MongoDB")
        const db = client.db('shop')
        const coll = db.collection('comments')

        const doc = {name: "anshika", age: 21, gender: "female"}
        // const insert = coll.insertOne(doc)
        // if(insert)
        //     console.log("inserted the doc");
    }catch(e){
        console.log('Error connecting to DB');
    }
    finally{
        await client.close()
        console.log('connection closed');
    }
}

connectToDB()


    


