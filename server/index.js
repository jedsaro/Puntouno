import express from 'express'
import morgan from 'morgan'
import { frontend_location } from './settings.js'
import taskRoutes from './routes/routes.js'

const PORT = 4000

const app = express()

app.use(morgan('dev'));

app.use(taskRoutes)
app.use(express.static(frontend_location))

app.listen(PORT)
console.log(`Server Running ${PORT}`)