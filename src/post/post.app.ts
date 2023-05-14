import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import postRoute from './infrastructure/routes/post.route'
import dbConnection from '../utils/db'


dbConnection()
const app = express()
const port = process.env.PORT_POST

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// * routes
app.use(postRoute)

app.listen(port, () => console.log(`Server on port ${port}`))

export default app



