import express from 'express'

import Product from '../models/productModel.js'

import asyncHandler from 'express-async-handler'

const router  = express.Router()

import {getProducts,getProductById,Ragib} from '../controllers/productController.js'



//localhost:5000/api/products
// get all products

router.get('/',getProducts)

//localhost:5000/api/products/ragibhasan
router.get('/ragibhasan',Ragib)



//localhost:5000/api/products/4364fdgfd



// get single products

router.get('/:id',getProductById)

 export default router
