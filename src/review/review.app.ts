<<<<<<< HEAD
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import reviewRoute from './infrastructure/routes/review.route'
import dbConnection from '../utils/db'


dbConnection()
const app = express()
const port = process.env.PORT_REVIEW

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// * routes
app.use(reviewRoute)

app.listen(port, () => console.log(`Server on port ${port}`))

export default app



=======
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import reviewRoute from './infrastructure/routes/review.route'
import dbConnection from '../utils/db'

dbConnection()
const app = express()
const port = process.env.PORT_POST

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// * routes
app.use(reviewRoute)

app.listen(port, () => console.log(`Server on port ${port}`))

export default app
>>>>>>> 452c12968e773914fdb978a569c50051cf4fb598
