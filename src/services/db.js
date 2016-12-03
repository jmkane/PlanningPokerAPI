import { MongoClient } from 'mongodb';

const MONGO_URI = 'mongodb://localhost:27017/Poker';
console.log(MONGO_URI);
const db = MongoClient.connect(MONGO_URI);

export default db;
