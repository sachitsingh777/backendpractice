const validator=(req,res,next)=>{
    const {name,email,password,gender}=req.body

    if(!name||!email||!password||!gender){
        res.send({err: "Few fields are missing, cannot process the request"})
    }

   

    next()
}
module.exports={validator}