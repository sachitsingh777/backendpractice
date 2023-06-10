const express=require("express")
const { ProductModel } = require("../models/post.model")
const productRouter=express.Router()

productRouter.get("/",async(req,res)=>{
    try{
         const {title}=req.query
         const {authorID}=req.body
         let search={}
         if(title){
            search.device=title
         }

         if(authorID){
            search.authorID=authorID
         }

     const product=await ProductModel.find(search)
     res.status(200).send(product)
    }catch(err){
        res.status(400).send({err:err.message})
    }
})
productRouter.post("/create",async(req,res)=>{
    try{
        const product=new ProductModel(req.body)
        await product.save()
        res.status(200).send({"msg":"product has been Added"})
    }catch(err){
        res.status(400).send({"err":err.message})
    }
})


productRouter.patch("update/:postID",async(req,res)=>{
    const {postID}=req.params
    const post=await ProductModel.findOne({_id:postID})

     try{
        if(req.body.authorID!==post.authorID){
            res.status(200).send({"msg":"you are not authorized"})
        }else{
            await ProductModel.findByIdAndUpdate({_id:postID},req.body)
            res.status(200).send({"msg":`the product has been updated by id:${postID}`})
        }
     }catch(err){
        res.status(400).send({"err":err.message})
     }

})

productRouter.patch("delete/:postID",async(req,res)=>{
    const {postID}=req.params
    const post=await ProductModel.findOne({_id:postID})

     try{
        if(req.body.authorID!==post.authorID){
            res.status(200).send({"msg":"you are not authorized"})
        }else{
            await ProductModel.findByIdAndDelete({_id:postID},req.body)
            res.status(200).send({"msg":`the product has been deleted by id:${postID}`})
        }
     }catch(err){
        res.status(400).send({"err":err.message})
     }

})


module.exports={productRouter}