const express=require("express")
const app=express()
const {connection} =require("./db")
const { productRouter } = require("./routes/Product.router");
const { userRouter } = require("./routes/User.router");
const {auth}=require("./middlewares/authentication")
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("home Page")
})
app.use("/users",userRouter)

app.use(auth)

app.use("/products",productRouter)
app.listen(process.env.port,async()=>{
    try{
      await connection
      console.log("connected to the db")
    }catch(err){
      console.log(err)
      console.log("Not connected to the db")    
    }

    console.log("server running at the port")
  })