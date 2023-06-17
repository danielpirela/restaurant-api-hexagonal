import 'dotenv/config'
import mongoose from 'mongoose'

const userName = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD

const uri = `mongodb+srv://${userName}:${password}@cluster0.k2key.mongodb.net/restaurant?retryWrites=true&w=majority`

const dbConnection = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(uri)
    } catch (err) {
        if (err instanceof Error) console.log(err)
    }
}

export default dbConnection
