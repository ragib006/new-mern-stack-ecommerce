
import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Rating from '../components/Rating'
import axios from 'axios'
//import products from '../products'
import Loader from '../components/Loder'

import {listProductDetails} from '../actions/productActions'

import { addToCart } from '../actions/cartActions'

import Header from '../components/Header'

import Footer from '../components/Footer'

const ProductScreen = ({ match,history }) => {

  const [quantity,setQuantity] = useState(1)



   const dispatch = useDispatch()

   const productDetails = useSelector(state => state.productDetails)

   const {loading,error,product} = productDetails

      useEffect(()=>{

      dispatch(listProductDetails(match.params.id))

  },[dispatch,match])

 // const product = products.find(p => p._id === match.params.id)

  //console.log(product)


const increaseQty = () => {

   const count = document.querySelector('.count')

    if(count.valueAsNumber >= product.countInStock) return

           const qty = count.valueAsNumber + 1
           setQuantity(qty)

}


const decreaseQty = () => {

  const count = document.querySelector('.count')

   if(count.valueAsNumber <= 1) return

          const qty = count.valueAsNumber - 1
          setQuantity(qty)


}


     const addToCartItem = () => {


           dispatch(addToCart(match.params.id,quantity))
           history.push('/cart')


     }







  return (
    <>

    <Header/>

    

    { loading ? <Loader/> : error ? (

         <h2>{error}</h2>

    ):(

                <>

                <div className="container">

                  <div className="row">

                    <div className="col-md-6">

                      <div style={{ marginTop: '100px'}}>
                      

                        <img style={{height:'300px',width:'300px',border:'1px solid pink'}}  src={product.image}  className="card-img-top" alt="Notfound"/>

                      </div>
                    </div>

                    <div className="col-md-6">

                      <div style={{ marginTop: '100px' }}>

                        <div style={{ marginBottom: '10px' }}>
                          <span style={{ fontWeight: 'bold', color: 'black', fontSize: '20px' }}>Product Name : </span> <span style={{ fontWeight: 'bold', color: 'green', marginLeft: '10px', fontSize: '20px' }}>{product.name}</span>
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                          <span style={{ fontWeight: 'bold', color: 'black', fontSize: '20px' }}>Price : </span> <span style={{ fontWeight: 'bold', color: 'green', marginLeft: '10px', fontSize: '20px' }}>{product.price} TK</span>
                        </div>



                        {/*  



                        <div style={{ marginBottom: '10px' }}>

                          <Rating value={product.rating} text={`${product.numReviews} reviews`} />

                        </div>



                        */}



                        { product.countInStock > 0 ?


                          <div style={{ marginTop: '20px', marginBottom: '20px' }}>

                               <span><button className="btn btn-success btn-sm" style={{float: 'left', marginTop: '4px' }}  onClick={decreaseQty} >-</button></span>
                               <input type="number" className="form-control count" value={quantity} style={{ width: '70px', float: 'left', marginLeft: '10px', marginRight: '10px' }} />
                               <span><button className="btn btn-success btn-sm" style={{  marginTop: '4px' }} onClick={increaseQty} >+</button></span>


                          </div>




                       : (

                         <>
                         </>


                       )}








                        <div style={{marginTop:'10px' }}>

                          {product.countInStock > 0 ?

                           <>
                           <span style={{ fontWeight: 'bold',fontSize: '20px' }}>Status : </span>  <span style={{color:'green',fontWeight:'bold'}}>In Stock</span>


                             <div style={{marginTop:'10px' }}>

                                 <button className="btn btn-primary" onClick={addToCartItem}>Add To Cart </button>

                             </div>




                           </>
                          : (

                            <>

                            <span style={{ fontWeight: 'bold',fontSize: '20px' }}>Status : </span>  <span style={{color:'white',backgroundColor:'red',padding:'0px 7px 0px 7px'}}>Out Of Stock</span>

                            </>

                          )}


                        </div>











                        <div style={{ marginTop: '30px' }}>
                           <p style={{fontWeight:'bold',color:'green',fontSize:'20px',marginBottom:'20px'}}>Description</p>
                          <p style={{textAlign:'justify'}}>{product.description}</p>

                        </div>





                      </div>

                    </div>
                  </div>



                </div>



                </>


    )}


    <Footer/>


    </>


  )


}


export default ProductScreen
