import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}
/// catching mongodb  connections 
let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;  ///optimization we made here by just returning 

  if (!MONGODB_URL) throw new Error("Missing MongoDb URL!");
/// create a new promised connection 
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "Imaginify",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  
  return cached.conn;
};
