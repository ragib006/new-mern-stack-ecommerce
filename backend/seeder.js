import mongoose from 'mongoose'

import dotenv from 'dotenv'

import users from './data/users.js'

import products from './data/products.js'

import User from './models/userModel.js'

import Order from './models/orderModel.js'

import Product from './models/productModel.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()


const importDate = async () =>{ 

      try {

         await Order.deleteMany()
         await Product.deleteMany()
         await User.deleteMany()

      const createUsers = await User.insertMany(users)

      const adminUser = await createUsers[0]._id

      const sampleProducts = products.map(product => {  

           return{...product, user: adminUser}

      })

      await Product.insertMany(sampleProducts)

      console.log('Data Import Successfully')

      process.exit(1)
          
      } catch (error) {

        console.log(error)
        process.exit(1)
          
      }

}



const destroydata = async () => {   

  try {

       await Order.deleteMany()
       await Product.deleteMany()
       await User.deleteMany()

       
      console.log('Product Delete Successfully')

      process.exit()


      
  } catch (error) {

    console.log(error)

    process.exit(1)
      
  }



}



if(process.argv[2] === '-d'){

    destroydata()

}else{

    importDate()

}