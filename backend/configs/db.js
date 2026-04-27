import mongoose from "mongoose";


const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("DB Connected");
    })

    try {
        const baseUri = process.env.MONGODB_URI;
        if (!baseUri) throw new Error('MONGODB_URI is not set');
        await mongoose.connect(baseUri);
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        throw error;
    }

}

export default connectDB;
