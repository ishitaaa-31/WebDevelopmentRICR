import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // cache memory ki process  jisme env hai se mongo uri lana hai
    

    console.log(
    //   "MongoDB connected :",
    //   conn.connection.host,
    //   ":",
    //   conn.connection.port
    //   to avoid spaces due to comma 

    `MongoDB connected at: ${conn.connection.host} : ${conn.connection.port}`
    );
    console.log("Database name :", conn.connection.name);
    
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectDB;
