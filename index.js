const express=require("express")
const app=express()
const {connection} =require("./db")


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