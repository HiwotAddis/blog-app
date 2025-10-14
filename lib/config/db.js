import mongoose from "mongoose";

let isConnected = false;

export const ConnectDB = async () => {
    if (isConnected) return;

    // Prefer env vars; fall back to the existing URI in code for local dev
    const uri = process.env.MONGODB_URI ;
    const dbName = process.env.MONGODB_DBNAME || 'blog-app';

    await mongoose.connect(uri, { dbName });
    isConnected = true;
    console.log(`DB Connected -> ${mongoose.connection.name}`);
}