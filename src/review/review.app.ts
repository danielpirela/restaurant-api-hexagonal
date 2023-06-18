import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import reviewRoute from './infrastructure/routes/review.route'
import dbConnection from '../utils/db'

dbConnection()
const app = express()
const port = 3004

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// * routes
app.use(reviewRoute)

app.listen(port)

export default app
