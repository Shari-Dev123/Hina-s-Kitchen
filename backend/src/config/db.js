import mongoose from "mongoose";

export default async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MonogoDb is Conected");
    } catch (error) {
        console.error("MonogDB error", error.message);
        process.exit(1);
    }
}