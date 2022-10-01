

import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {payOrder} from '../actions/productActions'

import axios from 'axios'

import Loader from '../components/Loder'
import Swal from 'sweetalert2'

import Header from '../components/Header'

import Footer from '../components/Footer'
import { PayPalButton } from "react-paypal-button-v2";


import { getOrderDetails } from '../actions/productActions'

import { ORDER_PAY_RESET } from '../constants/productConstants'

const CustomerOrderDetails = ({match,history}) => {

  const [sdkReady, setSdkReady] = useState(false)

  const orderId = match.params.id




 //const cart = useSelector(state => state.cart)

 // const {shippingAddress,paymentMethod,cartItems} = cart

  const userLogin = useSelector(state => state.userLogin)

    const {userInfo} = userLogin



  const orderPay = useSelector(state => state.orderPay)

    const {success:successpay,loading:loadingpay,error:errorpay} = orderPay







    const orderDetails = useSelector(state => state.orderDetails)

    const {loading:orderdetailsloading,order,error:ordertailserror} = orderDetails




const dispatch = useDispatch()

  




   if(!orderdetailsloading){

order.itemsPrice = order.orderItems.reduce((acc,item) =>

      acc + item.price * item.quantity,0

)




 order.itemsQuantity = order.orderItems.reduce((acc,item) =>

      acc + item.quantity,0


)


   }










useEffect(()=>{


  const addPayPaypalScript = async ()=>{   

    const {data:clientId} = await axios.get('/api/config/paypal')

//console.log(clientId)
    
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
    script.async = true

    script.onload = () => {  
         
       setSdkReady(true)
        
    }


    document.body.appendChild(script)


  }




if(!order || successpay){

dispatch({type:ORDER_PAY_RESET})

}








if(!order || successpay){   

   dispatch(getOrderDetails(orderId))


}else if(!order.isPaid){   

    if(!window.paypal){

         addPayPaypalScript()

    }else{

       setSdkReady(true)

    }


    

}





//addPayPaypalScript()





//if(!order){




//}




//console.log(orderId)

//console.log(order)

},[dispatch,history,orderId,successpay,order])




const successPaymentHandler = (paymentResult) => {  

console.log(paymentResult)


dispatch(payOrder(orderId,paymentResult))


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
    


  
 {orderdetailsloading ? <Loader/> : (

    <>

<div className="myproduct">






<div className="container" style={{marginTop:'20px'}}>
  
   <div className="aaaaa">
    <span style={{fontWeight:'bold',fontSize:'20px'}}>Order Id : </span><span style={{fontSize:'20px'}}>{order._id}</span>
   </div>



   <div className="row" style={{marginTop:'20px'}}>

      <div className="col-md-6">
        <h3>User Information</h3>
         
         <div className="aaa">
          <span style={{color:'black',fontWeight:'bold',fontSize:'17px'}}> Name : </span>   <span>{order.user.name}</span>
         </div>

          <div className="aaa">
          <span style={{color:'black',fontWeight:'bold',fontSize:'17px'}}>Email : </span>   <span>{order.user.email}</span>
         </div>
      </div>

      <div className="col-md-6">

        <h3>Shipping Information</h3>

           <div className="aaa">
          <span style={{color:'black',fontWeight:'bold',fontSize:'17px'}}> Name : </span>   <span>{order.shippingAddress.shippingname} </span>
         </div>

          <div className="aaa">
          <span style={{color:'black',fontWeight:'bold',fontSize:'17px'}}>Address : </span>   <span>{order.shippingAddress.address}</span>
         </div>

           <div className="aaa">
          <span style={{color:'black',fontWeight:'bold',fontSize:'17px'}}>City : </span>   <span>{order.shippingAddress.shippingcity}</span>
         </div>

          <div className="aaa">
          <span style={{color:'black',fontWeight:'bold',fontSize:'17px'}}>Post Code : </span>   <span>{order.shippingAddress.shippingpostalcode}</span>
         </div>

           <div className="aaa">
          <span style={{color:'black',fontWeight:'bold',fontSize:'17px'}}>Country : </span>   <span>{order.shippingAddress.shippingcountry}</span>
         </div>

             <div className="aaa">
          <span style={{color:'black',fontWeight:'bold',fontSize:'17px'}}>Division : </span>   <span>{order.shippingAddress.shippingdivision}</span>
         </div>
       
    </div>




 <div className="aaa">
          <span style={{color:'black',fontWeight:'bold',fontSize:'17px'}}>Payment Method : </span>   <span style={{fontWeight:'bold',color:'green'}}>{order.paymentMethod}</span>
         </div>




 <div className="aaa" style={{marginTop:'20px'}}>
      <span style={{color:'black',fontWeight:'bold',fontSize:'17px'}}>Payment Status : </span>   

      
      {order.isPaid ? <span className="bg-success"  style={{padding:'3px 7px 3px 7px',color:'white'}}>Order Is Paid {order.paidAt}</span> : <span className="bg-danger" style={{padding:'3px 7px 3px 7px',color:'white'}}>Pending</span>}



  </div>




 <div className="aaa" style={{marginTop:'20px'}}>
      <span style={{color:'black',fontWeight:'bold',fontSize:'17px'}}>Order Status : </span>   

      
      {order.isDelivered ? <span className="bg-success"  style={{padding:'3px 7px 3px 7px',color:'white'}}>Order Is Delivered {order.deliveredAt}</span> : <span className="bg-danger" style={{padding:'3px 7px 3px 7px',color:'white'}}>Pending</span>}



  </div>









    <div className="cart" style={{marginTop:'50px'}}>

        

               
               {order.orderItems.length === 0 ? <center><h2 style={{marginTop:'100px'}}> Your Cart Is Empty</h2></center> : (

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

                  {order.orderItems.map((item,index) =>(


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

     <>
       
        <h3>Order Summary</h3>

      <div className="row" style={{marginTop:'40px'}}>
      
  

       <div className="col-md-2">
         <p style={{fontWeight:'bold',color:'black',color:'green'}}>Total Item :</p>
         <p style={{fontWeight:'bold',color:'black',color:'green'}}>Sub Total :</p>

         <p style={{fontWeight:'bold',color:'black',color:'green'}}>Tax :</p>
         <p style={{fontWeight:'bold',color:'black',color:'green'}}>Shipping Cost :</p>
         <p style={{fontWeight:'bold',color:'black',color:'green'}}>Total :</p>

       </div>

        <div className="col-md-2">
           <p style={{fontWeight:'bold',color:'black'}}>{order.orderItems.length}</p>
              <p style={{fontWeight:'bold',color:'black'}}>{order.itemsPrice} TK</p>
        
         <p style={{fontWeight:'bold',color:'black'}}>{order.taxPrice} TK</p>
         <p style={{fontWeight:'bold',color:'black'}}>{order.shippingPrice} TK</p>
         <p style={{fontWeight:'bold',color:'black'}}>{order.totalPrice} TK</p>

         
      
        
       </div>




         <div className="col-md-4">
            

            {!order.isPaid && (   

               <>
                
                {loadingpay && <Loader/>}
                {!sdkReady ? <Loader/> : (  


              <PayPalButton amount = {order.totalPrice} onSuccess = {successPaymentHandler} />




                  )}


               </>

              )}
         
      
        
       </div>


       
      </div>



</>











    
  </div>



</div>

</div>


    </>

 )}



 <Footer/>

     </>
   )

}


export default CustomerOrderDetails
