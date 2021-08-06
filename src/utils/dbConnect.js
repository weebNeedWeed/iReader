import mongoose from "mongoose";
import Book from "./../models/Book";
import Chapter from "./../models/Chapter";
import User from "./../models/User";
import Category from "./../models/Category";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.log(MONGODB_URI);
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.*",
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useFindAndModify: false,
      useCreateIndex: true,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;

  // create models
  Book;
  Chapter;
  Category;
  User;

  return cached.conn;
}

export default dbConnect;
