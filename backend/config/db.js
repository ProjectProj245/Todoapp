const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully!');
  } catch (error) {
    console.error('Database connection error:', error.message);
    console.error('Make sure your MongoDB URI and IP whitelist are set correctly.');
    process.exit(1);
  }
};

module.exports = connectDB;
