const express=require("express")
const dotenv=require("dotenv")
const cors=require("cors")
const { dbConnection } = require("./db")

const userRouter=require("./routers/userrouter.js")
const urlRouter = require("./routers/urlrouter")

const app=express()
app.use(express.json())
app.use(cors())
dotenv.config()
dbConnection()

const PORT=process.env.PORT


app.get("/",(req,res)=>{
    return res.status(200).json({message:"server condition is fine"})
})

app.use("/api",userRouter)
app.use("/api",urlRouter)

app.listen(PORT,()=>console.log(`server is running in this localhost:${PORT}`))

