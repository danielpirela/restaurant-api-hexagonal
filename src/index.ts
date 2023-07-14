import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import userRoute from './user/infrastructure/routes/user.route'
import reviewRoute from './review/infrastructure/routes/review.route'
import dbConnection from './utils/db'

dbConnection()
const app = express()
const port = process.env['PORT'] || 3000

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use(reviewRoute)
app.use(userRoute)

app.listen(port)
