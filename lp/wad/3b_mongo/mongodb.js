const {MongoClient} = require("mongodb");  //to import mongodb module
const url = "mongodb://localhost:27017"  //mongodb run on this port
const database = 'student';
const client = new MongoClient(url);

const dbConnect = async()=> {  //coz using await
    const result = await client.connect();  //connect will return the promise await is used to handle the promise
    const db = await result.db(database);   //fetch the collection from this database
    return db.collection('profile');
}

module.exports = dbConnect;