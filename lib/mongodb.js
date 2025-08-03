// lib/mongodb.js

// lib/mongodb.js

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("❌ MONGODB_URI is not set in environment variables");
  throw new Error("❌ Add MONGODB_URI to your environment variables");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
