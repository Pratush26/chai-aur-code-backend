import mongoose from 'mongoose'

export default async function ConnectDB() {
    try {
        const dbConnection = await mongoose.connect(`${process.env.DB_URL}chai-backend`)
        console.log(dbConnection)
        return dbConnection;
    } catch (error) {
        console.error("Error from DB : ", error);
    }
}