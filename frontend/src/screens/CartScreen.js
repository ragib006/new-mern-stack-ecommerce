
import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'

import { addToCart,removeItemToCart } from '../actions/cartActions'
import Header from '../components/Header'
import Footer from '../components/Footer'

const CartScreen = () => {

     const dispatch = useDispatch()
    const {cartItems} = useSelector(state => state.cart)


    const increaseQty = (id,quantity,stock) => {

       const newQty = quantity + 1

       if(newQty > stock) return

       dispatch(addToCart(id,newQty))

    }


    const decreaseQty = (id,quantity) => {

         const newQty = quantity - 1

       if(newQty <= 0) return

           dispatch(addToCart(id,newQty))

    }


    const removeCartItemHandler = (id) => {


  dispatch(removeItemToCart(id))


    }




   return(

         <>

         <Header/>
            <div className="container" style={{marginTop:'50px'}}>


               {cartItems.length === 0 ? <center><h2> Your Cart Is Empty</h2></center> : (

                  <>

                  <center>
                     <span style={{fontWeight:'bold',color:'green',fontSize:'25px'}}>Cart Product</span>
                  </center>

                     <span className={{float:'right'}}>
                     <span style={{marginTop:'20px',marginLeft:'70px',fontWeight:'bold'}}>Total Product : </span><span style={{marginTop:'20px',fontWeight:'bold',color:'green'}}>{cartItems.length}</span>
                     </span>


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
                          <th scope="col">Action</th>
                          </tr>
                          </thead>
                          <tbody>

                  {cartItems.map((item,index) =>(


                    <tr key={item.product}>

                      <td style={{paddingTop:'32px'}}>{index +1}</td>
                 <td><img style={{height:'50px',width:'50px'}}  src={item.image}  className="card-img-top"/></td>



                     <td style={{paddingTop:'32px'}}>{item.name}</td>

                    <td style={{paddingTop:'32px'}} >{item.price} TK</td>
                    <td style={{paddingTop:'26px'}}>

                    <span><button className="btn btn-success btn-sm" style={{float: 'left', marginTop: '4px' }} onClick={()=>decreaseQty(item.product,item.quantity)} >-</button></span>
                    <input type="number" className="form-control count" value={item.quantity} style={{ width: '70px', float: 'left', marginLeft: '10px', marginRight: '10px' }} />
                    <span><button className="btn btn-success btn-sm" style={{  marginTop: '4px' }} onClick={() => increaseQty(item.product,item.quantity,item.countInStock)} >+</button></span>




                    </td>
                      <td style={{paddingTop:'32px',fontWeight:'bold'}}>{item.price * item.quantity} TK</td>
                      <td style={{paddingTop:'32px',paddingLeft:'22px'}}>


                      <i className="fas fa-trash" style={{fontSize:'20px',color:'blue'}} onClick={() => removeCartItemHandler(item.product)}></i>


                      </td>
                    </tr>




                  ))}




                          </tbody>
                    </table>
                </div>

                  </>


               )}



            </div>

         <Footer/>
         </>

   )



}

export default CartScreen
