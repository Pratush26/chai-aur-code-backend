import mongoose from 'mongoose'

export default async function ConnectDB() {
    try {
        await mongoose.connect(`${process.env.DB_URL}chai-backend`)
    } catch (error) {
        console.error("Error from DB : ", error);
    }
}