import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT_URL);
    console.log(`Database: OK`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
