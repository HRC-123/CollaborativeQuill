import mongoose from 'mongoose';

const Connection = async(user='ramcharan',password='1234') => {
    const URL = `mongodb+srv://${user}:${password}@writewave.7j2pvet.mongodb.net/?retryWrites=true&w=majority&appName=WriteWave`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected Successfully');
    } catch (error) {
        console.log('Error while connecting to database', error);
    }
}

export default Connection;