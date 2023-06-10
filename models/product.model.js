const mongoose=require("mongoose")
const ProductSchema=mongoose.Schema({
    title:{type:String,required:true},
    image:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
     authorID:{type:String,required:true},
     author:{type:String,required:true}
})

const ProductModel=mongoose.model("User",ProductSchema)
module.exports={ProductModel}