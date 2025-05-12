import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/library";

export const connectDB = async () =>{

try{
await mongoose.connect(MONGO_URI);

console.log("MongoDB connected!!!");


}catch(error){

console.error("MongoDB connect error:", error);

process.exit(1);
}
};

