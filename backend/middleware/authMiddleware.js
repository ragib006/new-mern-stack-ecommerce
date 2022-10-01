import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

import asyncHandler from 'express-async-handler'



const  protect = asyncHandler( async(req,res,next)=>{

//  let token

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

    try{

       let token

       token = req.headers.authorization.split(' ')[1]

       const decoded = jwt.verify(token,process.env.JWT_SECRET)

       req.myuser = await User.findById(decoded.id)

    //   console.log(decoded)

       next()



    }catch(error){


      res.status(401).json({message:'Not Found Aay Token'})


    }

  //  console.log('Token Found')

    // next()

  }else{

          //console.log('Not Token Found')

            res.status(401).json({message:'Not Found Any Token'})

  }




})


const admin = (req,res,next) => {

   if(req.myuser && req.myuser.isAdmin){

      next()

   }else{

     res.status(401).json({message:'Only Admin Can Access This'})


   }


}



export { protect,admin }
