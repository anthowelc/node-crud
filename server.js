import express from 'express'
import mongoose from 'mongoose'
import roomRoutes from './routes/index.js'
import dotenv from 'dotenv'
dotenv.config()

const PORT = 3000

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

app.use(roomRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
