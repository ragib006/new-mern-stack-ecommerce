//import express from 'express'

import Product from '../models/productModel.js'

import asyncHandler from 'express-async-handler'

import User from '../models/userModel.js'
import Order from '../models/orderModel.js'

//all product show
export const getProducts = asyncHandler( async (req,res) => {



  //const pageSize = 4

  //const page = Number(req.query.pageNumber) || 1


  const keyword = req.query.keyword ? {  

      name:{
          
          $regex:req.query.keyword,
          $options:'i'


      }


  }:{}

   
  // const count = await Product.countDocuments({...keyword })
  // const products = await Product.find({ ...keyword }).limit(pageSize).skip(pageSize * (page -1))


  const products = await Product.find({ ...keyword })

   setTimeout(()=> {

      res.json(


        products
       // page,
       // pages:Math.ceil(count/pageSize)


      )

   },1000)

})



//specephic or single  product show

export const getProductById = asyncHandler( async (req,res) => {

    const product = await Product.findById(req.params.id)

    if(product){

      setTimeout(()=> {
        // res.json(products)
           res.json(product)

      },1000)

    }

    else{

        res.status(404).json({ message:'Product Not Found'})

    }


 })















//all product show
export const getmyProducts = asyncHandler( async (req,res) => {


 // const products = await Product.find({})



  res.status(400).json(5)

 //  setTimeout(()=> {

  //    res.json(


   //     products
       // page,
       // pages:Math.ceil(count/pageSize)


  //    )

  // },1000)

})






//all product show
export const LL = asyncHandler( async (req,res) => {


 // const products = await Product.find({})




 //  setTimeout(()=> {

  //    res.json(


   //     products
       // page,
       // pages:Math.ceil(count/pageSize)


  //    )

  // },1000)

})



//localhost:5000/api/users/alluser
//show all users

export const Ragib = asyncHandler( async(req,res)=>{


  try{


          const getallorder = await Product.find();

          res.status(200).json(getallorder)



  }catch(error){


res.status(401).json({message:error})



  }


 // console.log('hello')

  //const product = await Product.find()




 //  if(user){

  //      res.json(user)

  // }else{

  //  res.status(401).json({message:'User Not Found'})

   //}



})