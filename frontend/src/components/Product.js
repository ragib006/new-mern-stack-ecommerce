import React from 'react'
import Rating from './Rating'
import {Link} from 'react-router-dom'



const Product = ({ product }) => {

    return (

        <>


    <Rating/>


            <div className="card">


              

<img style={{height:'200px',width:'200px',padding: '15px 15px 15px 15px',marginLeft:'45px'}}  src={product.image}  className="card-img-top"/>


                    <div className="card-body">

                        <h5 className="card-title">{product.name}</h5>
                        <span className="card-title" style={{ fontSize: '18px' }}>Price</span><span className="card-title" style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '18px', }}>{product.price} TK</span>


                 {/* 



                         <h6>{product.rating} rating {product.numReview} review</h6>

                         <Rating value={product.rating} text={`${product.numReviews} reviews`}/>




                 */}


                       <p>
                        <Link to={`/product/${product._id}`} className="btn btn-primary" style={{ marginTop: '10px' }}>View Product</Link>
                       </p>
                    </div>


            </div>








        </>


    )


}



export default Product
