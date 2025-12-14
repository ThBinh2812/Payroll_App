import mongoose from "mongoose";

let cached = global.mongoose || { conn: null, promise: null };
global.mongoose = cached;

export default async function connectDB() {
  if (cached.conn) return cached.conn;

  cached.promise = mongoose.connect(process.env.MONGO_URI);
  cached.conn = await cached.promise;

  return cached.conn;
}
