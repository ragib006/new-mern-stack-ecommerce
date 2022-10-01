import User from '../models/userModel.js'
import Product from '../models/productModel.js'
import Order from '../models/orderModel.js'

import asyncHandler from 'express-async-handler'

import generateToken from '../utils/generateToken.js'

import bcrypt from 'bcryptjs'

import multer from 'multer'

import cloudinary from 'cloudinary'

//import APIFeatures from '../utils/apiFeature'


 //export const storage = multer.diskStorage({

    //  destination: (req, file, cb) => {

    //    cb(null, '../../frontend/public/images')

    //   },

    //    filename: (req, file, cb) =>{

    //    cb(null, file.originalname)

    //   }


//  })

//  export const upload = multer({ storage: storage })


//create product   

export const Mycreateproduct = asyncHandler( async (req,res) => {


   //  const result = await cloudinary.v2.uploader.upload(req.body.avater,{   


   //       folder:'avater',
   //       width:150,
   //       crop:"scale"

   //  })

   //  const {name,price,category,brand,countInStock,description,image} = req.body

       const product = new Product({

          name:req.body.name,
          price:req.body.price,
          user:req.myuser._id,
          image:req.body.image,

         // avater:{

         //    public_id:result.public_id,
         //    url:result.secure_url

         // },


          brand:req.body.brand,
          category:req.body.category,
          countInStock:req.body.countInStock,
          numReviews:0,
          description:req.body.description


       })

       const createproduct = await product.save()

       if(createproduct){

            res.json(createproduct)

       }else{


         res.status(404).json({message:'Product Not Found'})


       }



})







//localhost:5000/api/users/login
// user login

export const authUser = asyncHandler( async (req,res) => {

    const {email,password} = req.body

    const user = await User.findOne({email})

    if( user && (await user.matchPassword(password))){

         res.json({

             _id:user._id,
             name:user.name,
             email:user.email,
             isAdmin:user.isAdmin,
             token:generateToken(user._id)

         })

    }else{

       res.status(401).json({message:'Invalid Email And Password'})

    }


})


//localhost:5000/api/users/profile
//user profile

export const getUserProfile = asyncHandler( async (req,res) => {


      const user = await User.findById(req.myuser._id)
                                  // ata protected route a as a
      if(user){

          res.json({

            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin

          })

      }else{

             res.status(401).json({message:'User Not Found'})


      }


})


//localhost:5000/api/users/register
//user registration





export const registerUser = asyncHandler( async (req,res) => {

         const {name,email,password}= req.body

         if(!name || !email || !password){

           res.status(400).json({message:'Require All Field'})

          }


          const userExists = await User.findOne({email})

          if(userExists){

            res.status(400).json({message:'User Already Exist'})

          }else{


              const user = await User.create({

                  name,
                  email,
                  password:bcrypt.hashSync(password,10)

              })

               if(user){

                 res.json({

                     _id:user._id,
                     name:user.name,
                     email:user.email,
                     isAdmin:user.isAdmin,
                     token:generateToken(user._id)

                 })

               }else{


                 res.status(401).json({message:'Invalid User Data'})

               }


          }

         //res.status(200).json(req.body)


})



//localhost:5000/api/users/updateuserprofile
//updateUserprofine

export const UpdateUserProfile = asyncHandler( async (req,res) => {

         const {name,email,password}= req.body

         if(!name || !email || !password){

           res.status(400).json({message:'Require All Field'})

          }

             const user = await User.findById(req.myuser._id)

             if(user){

                 user.name = req.body.name || user.name
                 user.email = req.body.email || user.email

                 if(req.body.password){

                    user.password = bcrypt.hashSync(password,10)

                 }


                 const updateUser = await user.save()

                 res.json({

                     _id:updateUser._id,
                     name:updateUser.name,
                     email:updateUser.email,
                     isAdmin:updateUser.isAdmin,
                     password:updateUser.password,
                     token:generateToken(updateUser._id)

                 })


             }else{


               res.status(401).json({message:'User Not Found'})

             }



})


//localhost:5000/api/users/alluser
//show all users

export const getUsers = asyncHandler( async(req,res)=>{

  const user = await User.find({})


   if(user){

        res.json(user)

   }else{

    res.status(401).json({message:'User Not Found'})

   }

//  setTimeout(()=> {



  //},1000)

})



//localhost:5000/api/users/deleteuser/:// IDEA:
//deleteuser

export const deleteUser = asyncHandler(async(req,res)=>{

       const user = await User.findById(req.params.id)

       if(user){

          await user.remove()

          res.json({messaage:'User Delete Successfully'})


       }else{


         res.status(404).json({message:'User Not Found'})


       }


})




//localhost:5000/api/users/userinformation/:id


export const userInfo = asyncHandler(async(req,res)=>{

       const user = await User.findById(req.params.id)

       if(user){

        res.json(user)

       }else{


         res.status(404).json({message:'User Not Found'})


       }


})



////localhost:5000/api/users/updateuser/:id

export const UpdateUser = asyncHandler( async (req,res) => {

         const {name,email,password}= req.body

         if(!name || !email || !password){

           res.status(400).json({message:'Require All Field'})

          }

             const user = await User.findById(req.params.id)

             if(user){

                 user.name = req.body.name || user.name
                 user.email = req.body.email || user.email

                 user.isAdmin = req.body.isAdmin

                 if(req.body.password){

                    user.password = bcrypt.hashSync(password,10)

                 }


                 const updateUser = await user.save()

                 res.json({

                     _id:updateUser._id,
                     name:updateUser.name,
                     email:updateUser.email,
                     isAdmin:updateUser.isAdmin,
                     password:updateUser.password,


                 })


             }else{


               res.status(401).json({message:'User Not Found'})

             }



})





//localhost:5000/api/users/deleteproduct/:id
//deleteproduct

export const deleteProduct = asyncHandler(async(req,res)=>{

       const product = await Product.findById(req.params.id)

       if(product){

          await product.remove()

          res.json({messaage:'Product Delete Successfully'})


       }else{


         res.status(404).json({message:'Product Not Found'})


       }


})




//localhost:5000/api/users/createproduct
//deleteproduct

export const createProduct = asyncHandler(async(req,res)=>{

      // const product = await Product.findById(req.params.id)

       const product = new Product({

          name:req.body.name,
          price:req.body.price,
          user:req.myuser._id,
          image:req.body.image,
          brand:req.body.brand,
          category:req.body.category,
          countInStock:req.body.countInStock,
          numReviews:0,
          description:req.body.description


       })

       const createproduct = await product.save()

       if(createproduct){

            res.json(createproduct)

       }else{


         res.status(404).json({message:'Product Not Found'})


       }





})













//imageupload module

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //cb(null, './myupload')
     cb(null, 'frontend/public/images')
  },


  filename: function (req, file, cb) {

  cb(null,file.originalname);


  },



})

export const upload = multer({ storage: storage })




//localhost:5000/api/users/updateproduct/:id
//deleteproduct

export const updateProduct = asyncHandler(async(req,res)=>{

    const {name,price,description,image,brand,category,countInStock} = req.body

       const product = await Product.findById(req.params.id)


       if(product){

              product.name = req.body.name
              product.price = req.body.price
              product.description = req.body.description
              product.image = req.file.originalname
              product.brand = req.body.brand
              product.category = req.body.category
              product.countInStock = req.body.countInStock


             const updatedProduct = await product.save()

        
              // if(updatedProduct){  

                  // res.status(404).json({message:'Product Update Successfully'})
             //  }
             res.json(updatedProduct)

            //  else{


                  //  res.status(404).json({message:'Product Not Update Successfully'})

           //   }
        
            
         
      


       }else{


         res.status(404).json({message:'Product Not Found'})


       }





})


///create product








export const MycreateProduct = asyncHandler(async(req,res)=>{




   //   console.log(req.file)

   //   res.status(200).json({

        
   //     success:'Success'


   //   })
    

      const product = new Product({

         name:req.body.name,
         price:req.body.price,
         user:req.myuser._id,
         image:req.body.image,
         brand:req.body.brand,
         category:req.body.category,
         countInStock:req.body.countInStock,
         numReviews:0,
         description:req.body.description


      })

      const createproduct = await product.save()

      if(createproduct){

           res.json(createproduct)

      }else{


        res.status(404).json({message:'Product Not Found'})


      }





})




//Add Order


export const addOrderItems = asyncHandler(async(req,res)=>{   

  const {orderItems,shippingAddress,paymentMethod,itemsPrice,taxPrice,shippingPrice,totalPrice} = req.body
   
   if(orderItems && orderItems.length === 0){
       
     res.status(404).json({message:'No Order Item'})

   }else{

       
       const order = new Order({   


       orderItems,
       user:req.myuser._id,
       shippingAddress,
       paymentMethod,
       itemsPrice,
       taxPrice,
       shippingPrice,
       totalPrice


       })

      const createdOrder = await order.save()

     // if(createOrder){

       res.status(200).json(createdOrder)

    //  }else{

         // res.status(404).json({message:'Order Unscussessfull'})


    //  }





   }


})


//Customer order Details


//export const Customerorderdetails = asyncHandler(async (req,res) => {   

 // const order = await Order.findById(req.params.id).populate('orderItems.product').populate('user','name email')
  //.populate('user','name email')

 // if(order){

  //  res.json(order)

 // }else{

 //   res.status(404).json({message:'Not Found Any Order'})
 // }



//})















//Admin show order Details


export const getOrderById = asyncHandler(async (req,res) => {   

  const order = await Order.findById(req.params.id).populate('orderItems.product').populate('user','name email')
  //.populate('user','name email')

  if(order){

    res.json(order)

  }else{

    res.status(404).json({message:'Not Found Any Order'})
  }



})



//Admin show all order   




//localhost:5000/api/users/alluser
//show all users

export const Adminallorder = asyncHandler( async(req,res)=>{

  const order = await Order.find({}).populate('orderItems.product').populate('user','name email')


   if(order){

        res.json(order)

   }else{

    res.status(401).json({message:'Order Not Found'})

   }

//  setTimeout(()=> {



  //},1000)

})




//update order pay   



export const updateOrderToPaid = asyncHandler(async (req,res) => {   

  const order = await Order.findById(req.params.id)
  

  if(order){

    order.isPaid = true
    order.paidAt = Date.now()
    order.paymentResult = {   

        id:req.body.id,
        status:req.body.status,
        update_time:req.body.update_time,
        email_address:req.body.payer.email_address

    }

    const updateOrder = await order.save()

     res.json(updateOrder)

  }else{

    res.status(404).json({message:'Not Found Any Order'})
  }



})



//customer order details on profile page   




export const CustomerOrderInProfile = asyncHandler(async (req,res) => {   

  const order = await Order.find({user : req.myuser._id})

  
   if(order){

        res.json(order)

   }else{

    res.status(401).json({message:'Order Not Found'})

   }

  



})



//localhost:5000/api/users/orderdelete/:id
//deleteproduct

export const deleteOrder = asyncHandler(async(req,res)=>{

       const order = await Order.findById(req.params.id)

       if(order){

         await order.remove()

         res.json({messaage:'Order Delete Successfully'})

       // res.json(order)


       }else{


         res.status(404).json({message:'Order Not Found'})


       }


})




//order Delivered




export const OrderDelivered = asyncHandler(async (req,res) => {   

  const order = await Order.findById(req.params.id)
  

  if(order){

       order.isDelivered = true
       order.deliveredAt = Date.now()
 

      const updateOrder = await order.save()

       res.json(updateOrder)

    //res.json(order)

  }else{

    res.status(404).json({message:'Not Found Any Order'})
  }



})













//count Admin Dashboard




export const Countallorderalluserallproduct = asyncHandler(async (req,res) => {   

      try{
       
   


         const user = await User.countDocuments()
         const product = await Product.countDocuments()
         const order = await Order.countDocuments()

         res.status(200).json({
                  
                    allproduct:product,
                    alluser:user,
                    allorder:order,

        })


      }catch(error){

         res.status(404).json(error)

      }


})