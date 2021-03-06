import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import { routes } from "./routes/wall.routes";

dotenv.config();
const app=express()




const port=process.env.PORT || 8080;
app.set("port",port)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const mongoseUrl=process.env.MONGODB_URL as string
app.use('/bgmi',routes)
app.use('/',(req,res)=>{
    return res.send("Working")
})

mongoose.connect(mongoseUrl,{
    useUnifiedTopology:true,
    useNewUrlParser:true
},()=>{
    console.log(`database connected`)
})
app.listen(app.get("port"),()=>{
    console.log(`App is WOrking at ${app.get("port")}`)
})