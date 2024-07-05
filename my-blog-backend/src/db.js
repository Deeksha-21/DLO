import { MongoClient } from 'mongodb';

let db;

async function connectToDb(cb) {
    const client = new MongoClient(`mongodb+srv://rdeeksha21:AiBSmBBF7UuKU2Xe@cluster0.tfvozbp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    await client.connect();
    db = client.db('react-blog-db');
    cb();
}

export {
    db,
    connectToDb,
};