const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017';

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    // You can handle the error here, such as throwing an exception or performing other actions
  }
};

module.exports = connectToMongo;
