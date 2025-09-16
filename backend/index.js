import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import chatbotRoutes from './routes/chatbot.route.js';
import cors from 'cors';

const app = express()
dotenv.config()
const port=process.env.PORT|| 3000

// middleware
app.use(express.json());
app.use(cors())

//database connect
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.log("connected to MongoDB")
}).catch((error)=>{
  console.log("Error connecting to MongoDB:",error)
})

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// Defining Routes
// app.use("/bot/v1/",chatbotRoutes)
app.use("/", chatbotRoutes)

app.listen(port, () => {
  console.log(`Example app listening on  port ${port}`)
})
