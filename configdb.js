import mongoose from 'mongoose';

const connectDB = async (dbURI) => {
  try {
    const connection = await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected`);
    return connection;
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1); 
  }
};

export default connectDB;
