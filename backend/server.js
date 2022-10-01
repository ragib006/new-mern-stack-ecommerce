import express from 'express'
import dotenv from 'dotenv'
import products from'./data/products.js'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'

import userRoutes from './routes/userRoutes.js'

import cloudinary from 'cloudinary'

import fileUpload from 'express-fileupload'


import bodyParser from 'body-parser'

dotenv.config()


const app = express()

connectDB()

app.use(express.json())


//app.use(bodyParser.urlencoded({ extended: true }))



//cloudinary.config({


 //  cloud_name:'ragibhasan006',
 //  api_key:'238356632142927',
 //  api_secret:'vGsu3N3gjg_DYy6-IImZQocNKIY'


//})



app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)




app.get('/api/config/paypal',(req,res) => {   

  res.send(process.env.PAYPAL_CLIENT_ID)

})

 //app.get('/api/products',(req,res)=>{
 // res.send('Api Running')
 //res.json(products)
 //})

//app.get('/api/product/:id',(req,res)=>{
// const product = products.find(p => p._id === req.params.id)
// res.json(product)
//})


//app.use((err,req,res,next)=>{

 // if(err){
     
  //   res.status(500).send(err.message)

//  }else{

  //   res.send("Yoo  Success")
//
 // }



//})





const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server Running On Port ${process.env.PORT}`))
