import dotenv from "dotenv"
import { app } from "./app.js";
import ConnectDB from "./db/dbConnect.js";
dotenv.config({ path: './.env' })

ConnectDB()
    .then(() => app.listen(process.env.PORT || 8000, () => console.log(`⚙️ Server is running at port : ${process.env.PORT}`)))
    .catch((err) => console.log("MONGO db connection failed !!! ", err))