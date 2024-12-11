import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();


const MONGOURI = process.env.MONGOURI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGOURI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  }
};

export default connectDB;
