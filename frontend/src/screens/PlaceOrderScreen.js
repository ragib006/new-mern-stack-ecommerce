

import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {userInfo,updateUser} from '../actions/userActions'

import CheckoutStep from './CheckoutStep'

//import {USER_UPDATE_RESET} from '../constants/userConstants'
import Header from '../components/Header'

import Footer from '../components/Footer'

import Loader from '../components/Loder'
import Swal from 'sweetalert2'



//paypal data 

import axios from 'axios'



import { createOrder } from '../actions/productActions'


const PlaceOrderScreen = ({match,history}) => {


//paypalstate  

//const [sdkReady,setSdkReady] = useState(false)





  const cart = useSelector(state => state.cart)

  const {shippingAddress,paymentMethod,cartItems} = cart

  const userLogin = useSelector(state => state.userLogin)

  const {userInfo} = userLogin



  const orderCreate = useSelector(state => state.orderCreate)

  const {success,order,error} = orderCreate




  ////const orderPay = useSelector(state => state.orderPay)

   // const {success:successPay,error:errorPay,loading:loadingPay} = orderPay


  const orderDetails = useSelector(state => state.orderDetails)

  const {loading:orderdetailsloading,order:orderdetails,error:ordertailserror} = orderDetails


const dispatch = useDispatch()


//Calculate Price  

cart.itemsPrice = cart.cartItems.reduce((acc,item) =>

      acc + item.price * item.quantity,0

).toFixed(2)

//Calculate Total Quantity 


cart.itemsQuantity = cart.cartItems.reduce((acc,item) =>

      acc + item.quantity,0

)





//SHIPPING Price

cart.shippingPrice = (cart.itemsPrice > 100 ? 0 : 100).toFixed(2)

//Tax Price  
 const addDecimals = (num) => {  
   
    return (Math.round(num * 100) /100).toFixed(2)

 }


 cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))



//Total Price

cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)


//const productCreate = useSelector((state)=>state.productCreate)

//const {loading:loadingCreate,error:errorCreate,success:successCreate,product:createdproduct} = productCreate


//const productList = useSelector((state)=>state.productList)

//const {loading,products,error} = productList





useEffect(()=>{






  if(success){

   // history.push(`/order/${order._id}`)

history.push(`/customerorderdetails/${order._id}`)

  }

   // dispatch({type:PRODUCT_CREATE_RESET})

  // if(!userInfo){
  //   
  // }else{

 // history.push('/')

 //  }

  // if(successCreate){


   //       history.push('/allproduct')

   //   const Toast = Swal.mixin({
   //     toast: true,
   //     position: 'top-end',
   //     showConfirmButton: false,
   //     timer: 3000,
   //     timerProgressBar: true,
   //     didOpen: (toast) => {
   //       toast.addEventListener('mouseenter', Swal.stopTimer)
   //       toast.addEventListener('mouseleave', Swal.resumeTimer)
   //     }
   //   })

   //   Toast.fire({
   //     icon: 'success',
   //     title: 'Product Create successfully'
   //   })


 

   //}




},[history,success])


const placeOrderHandler = (e) => { 
 e.preventDefault();

 dispatch(createOrder({

     orderItems:cart.cartItems,
     shippingAddress:cart.shippingAddress,
     paymentMethod:cart.paymentMethod,
     itemsPrice:cart.itemsPrice,
     shippingPrice:cart.shippingPrice,
     taxPrice:cart.taxPrice,
     totalPrice:cart.totalPrice




 }))


}




  //const changeOnClick = (e) =>{   

      //  e.preventDefault();



//dispatch(saveShippingAddress({shippingname,address,shippingcity,shippingpostalcode,shippingcountry,shippingdivision}))


 //  history.push('/payment')
 
       // console.log(shippingdivision)

        //const formData = new FormData();

             //  formData.set("name",name);
             //  formData.set("price",price);
             //  formData.set("countInStock",countInStock);
              // formData.set("brand",brand);
              // formData.set("category",category);
              // formData.set("description",description);
              // formData.set("image",fileName);


              // dispatch(createProduct(formData))


               //console.log(formData)


   //}




   return(
     <>



    <Header/>
  


    <CheckoutStep step1 step2 step3 step4/>


<div className="myproduct">






<div className="container" style={{marginTop:'20px'}}>


   <div className="row">

      <div className="col-md-6">
        <h3>User Information</h3>
         
         <div className="aaa">
          <span style={{color:'black',fontWeight:'bold',fontSize:'17px'}}> Name : </span>   <span>{userInfo.name} </span>
         </div>

          <div className="aaa">
          <span style={{color:'black',fontWeight:'bold',fontSize:'17px'}}>Email : </span>   <span>{userInfo.email} </span>
         </div>
      </div>


      <div className="col-md-6">

        <h3>Shipping Information</h3>

           <div className="aaa">
          <span style={{color:'black',fontWeight:'bold',fontSize:'17px'}}> Name : </span>   <span>{shippingAddress.shippingname} </span>
         </div>

          <div className="aaa">
          <span style={{color:'black',fontWeight:'bold',fontSize:'17px'}}>Address : </span>   <span>{shippingAddress.address}</span>
         </div>

           <div className="aaa">
          <span style={{color:'black',fontWeight:'bold',fontSize:'17px'}}>City : </span>   <span>{shippingAddress.shippingcity}</span>
         </div>

          <div className="aaa">
          <span style={{color:'black',fontWeight:'bold',fontSize:'17px'}}>Post Code : </span>   <span>{shippingAddress.shippingpostalcode}</span>
         </div>

           <div className="aaa">
          <span style={{color:'black',fontWeight:'bold',fontSize:'17px'}}>Country : </span>   <span>{shippingAddress.shippingcountry}</span>
         </div>

             <div className="aaa">
          <span style={{color:'black',fontWeight:'bold',fontSize:'17px'}}>Division : </span>   <span>{shippingAddress.shippingdivision}</span>
         </div>
       </div>


   </div>


    
         <div className="aaa">
          <span style={{color:'black',fontWeight:'bold',fontSize:'17px'}}>Payment Method : </span>   <span style={{fontWeight:'bold',color:'green'}}>{paymentMethod}</span>
         </div>


  


    <div className="cart">

        

               
               {cartItems.length === 0 ? <center><h2 style={{marginTop:'100px'}}> Your Cart Is Empty</h2></center> : (

                  <>

                  <center>
                     <span style={{fontWeight:'bold',color:'green',fontSize:'25px'}}>Cart Product</span>
                  </center>

                     


               <div style={{marginTop:'50px'}}>
                    <table className="table">
                          <thead>
                          <tr>
                          <th scope="col">Sl</th>
                          <th scope="col">Image</th>
                          <th scope="col">Name</th>
                          <th scope="col">Price</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Total</th>
                        
                          </tr>
                          </thead>
                          <tbody>

                  {cartItems.map((item,index) =>(


                    <tr key={item.product}>

                      <td style={{paddingTop:'20px'}}>{index +1}</td>
                    <td><img style={{height:'50px',width:'50px'}}  src={item.image}  className="card-img-top"/></td>


                     <td style={{paddingTop:'22px'}}>{item.name}</td>

                    <td style={{paddingTop:'22px'}} >{item.price} TK</td>

                      <td style={{paddingTop:'22px'}} >{item.quantity}</td>
                
                      <td style={{paddingTop:'22px',fontWeight:'bold'}}>{item.price * item.quantity} TK</td>
                 
                    </tr>




                  ))}




                          </tbody>
                    </table>
                </div>

                  </>


               )}


    </div>





   <div className="djfd"style={{marginTop:'40px'}}>
       



     {cartItems.length === 0 ? (    

       ''


     ) : (


     <>
       
        <h3>Order Summary</h3>

      <div className="row" style={{marginTop:'40px'}}>
      
  

       <div className="col-md-2">
        <p style={{fontWeight:'bold',color:'black',color:'green'}}>Total Item :</p>
         <p style={{fontWeight:'bold',color:'black',color:'green'}}>Total Quantity :</p>
         <p style={{fontWeight:'bold',color:'black',color:'green'}}>Sub Total :</p>
         <p style={{fontWeight:'bold',color:'black',color:'green'}}>Shipping Cost :</p>
         <p style={{fontWeight:'bold',color:'black',color:'green'}}>Tax :</p>
            <p style={{fontWeight:'bold',color:'black',color:'green'}}>Total :</p>
       </div>

        <div className="col-md-2">
         <p style={{fontWeight:'bold',color:'black'}}>{cartItems.length}</p>
         <p style={{fontWeight:'bold',color:'black'}}>{cart.itemsQuantity}</p>
         <p style={{fontWeight:'bold',color:'black'}}>{cart.itemsPrice} Taka</p>
         <p style={{fontWeight:'bold',color:'black'}}>{cart.shippingPrice} Taka</p>
         <p style={{fontWeight:'bold',color:'black'}}>{cart.taxPrice} Taka</p>
         <p style={{fontWeight:'bold',color:'black'}}>{cart.totalPrice} Taka</p>
        
       </div>


       
      </div>


{error &&  <span>{error}</span>}
 
  <button className="btn btn-success" disabled={cart.cartItems === 0 } onClick={placeOrderHandler} >Place order</button>


</>


   )}
               

         




    
  

           
    


      </div>















   </div>


</div>











  


 <Footer/>

     </>
   )

}


export default PlaceOrderScreen
