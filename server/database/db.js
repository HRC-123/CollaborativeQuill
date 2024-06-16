import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const Connection = async() => {
    const URL = process.env.URL;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected Successfully');
    } catch (error) {
        console.log('Error while connecting to database', error);
    }
}

export default Connection;