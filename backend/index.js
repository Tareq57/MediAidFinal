import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"

import authRoutes from "./Routes/auth.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

// Change later
const corsOptions = {
    origin: true
}

mongoose.set('strictQuery', false)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("MongoDB connected")
    } catch (err) {
        console.log("Failed to connect to MongoDB")
    }
}

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

app.use("/api/auth", authRoutes)

app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`)
})