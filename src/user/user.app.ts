import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import userRoute from './infrastructure/routes/user.route'
import dbConnection from '../utils/db'

dbConnection()
const app = express()
const port = process.env.PORT_USER

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// * routes
app.use(userRoute)

app.listen(port, () => console.log(`Server on port ${port}`))

export default app
