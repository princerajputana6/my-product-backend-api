import mongoose from "mongoose";

export const connectDB = async () => {

    const { connection } = await mongoose.connect("mongodb+srv://biztreck:biztreck@biztreck.xvbxe4g.mongodb.net/")

    console.log(`Mongo DB is connected with ${connection.host}`);
}