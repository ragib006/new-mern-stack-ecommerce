import express from 'express'

import User from '../models/userModel.js'

import asyncHandler from 'express-async-handler'

import Product from '../models/productModel.js'

const router  = express.Router()

import {

	authUser,
	getUserProfile,
	registerUser,
	UpdateUserProfile,
	getUsers,
	deleteUser,
	userInfo,
	UpdateUser,
	deleteProduct,
	createProduct,
	updateProduct,
	MycreateProduct,
	upload,
	addOrderItems,
	getOrderById,
	Adminallorder,
	updateOrderToPaid,
	CustomerOrderInProfile,
	deleteOrder,
	OrderDelivered,
	Countallorderalluserallproduct

} from '../controllers/userController.js'

import {protect,admin} from '../middleware/authMiddleware.js'

import multer from 'multer'


import path from 'path'

import {getProducts,getProductById,getmyProducts,LL} from '../controllers/productController.js'





router.get('/abc',LL)
//localhost:5000/api/product
router.get('/product',getmyProducts)

//localhost:5000/api/users/login
// user login
router.post('/login',authUser)

//localhost:5000/api/users/profile
//user profile
router.get('/profile',protect,getUserProfile)

//localhost:5000/api/users/updateuserprofile
//updateUserprofine
router.put('/updateuserprofile',protect,UpdateUserProfile)

//localhost:5000/api/users/register
//user register

router.post('/register',registerUser)

// loca
//localhost:5000/api/products/4364fdgfd
// get single products

//admin route
//localhost:5000/api/users/alluser
//all user show
router.get('/alluser',protect,admin,getUsers)

//deleteUser
//admin route
//localhost:5000/api/users/deleteuser/:id
router.delete('/deleteuser/:id',protect,admin,deleteUser)

//userInfo

//localhost:5000/api/users/deleteuser/:id
router.get('/userinformation/:id',protect,admin,userInfo)

//UpdateUser
//localhost:5000/api/users/updateuser/:id
router.put('/updateuser/:id',protect,admin,UpdateUser)

//deleteroduct
//localhost:5000/api/users/deleteproduct/:id
router.delete('/deleteproduct/:id',protect,admin,deleteProduct)

//createProduct
//localhost:5000/api/users/createproduct
//router.post('/createproduct',protect,admin,createProduct)

//updateProduct
//localhost:5000/api/users/updateproduct/:id
router.put('/updateproduct/:id',upload.single('image'),protect,admin,updateProduct)


//localhost:5000/api/users/createmyproduct
 router.post('/createmyproduct',protect,admin,MycreateProduct)

//addOrderItems
//localhost:5000/api/users/createorder

router.post('/createorder',protect,addOrderItems)


//customerorderdetails
//localhost:5000/api/users/customerorderdetails/:id

//router.get('/orderinformation/:id',protect,Customerorderdetails)

//Admin order details
//localhost:5000/api/users/orderinformation/:id
router.get('/orderinformation/:id',protect,getOrderById)

//Adminallorder
//localhost:5000/api/users/adminallorder
router.get('/adminallorder',protect,admin,Adminallorder)

//updateOrderToPaid
//localhost:5000/api/users/customerorderpay/:id/pay
router.put('/customerorderpay/:id/pay',protect,updateOrderToPaid)


//CustomerOrderInProfile
//localhost:5000/api/users/customerordershowinprofile/:id
router.get('/customerordershowinprofile',protect,CustomerOrderInProfile)

//deleteOrder
//localhost:5000/api/users/orderdelete/:id
router.delete('/orderdelete/:id',protect,deleteOrder)

//orderdelivered
//localhost:5000/api/users/orderdelivered/:id
router.put('/orderdelivered/:id',OrderDelivered)


//Countallorderalluserallproduct
//localhost:5000/api/users/countallorderalluserallproduct
router.get('/countallorderalluserallproduct',Countallorderalluserallproduct)


//const storage = multer.diskStorage({
//  destination: function (req, file, cb) {
    //cb(null, './myupload')
 //    cb(null, 'frontend/public/images')
//  },


 // filename: function (req, file, cb) {

 // cb(null,file.originalname);


//  },



//})

//const upload = multer({ storage: storage })

 






 router.post('/up',upload.single('image'),function(req,res){

    

      console.log(req.file)

      res.status(200).json({

        
        success:'Success'


      })





   })







 export default router
