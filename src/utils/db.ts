import 'dotenv/config'
import mongoose from 'mongoose'

const userName = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD

console.log(userName)
console.log(password)

const uri = `mongodb+srv://${userName}:${password}@cluster0.k2key.mongodb.net/todo?retryWrites=true&w=majority`

const dbConnection = async () => {
    try {
        mongoose.set('strictQuery', false)
        const db = await mongoose.connect(uri)
        console.log(
            `data base connected successfully ${db.connection.db.databaseName}`
        )
    } catch (err) {
        if (err instanceof Error) console.log(err)
    }
}

export default dbConnection
