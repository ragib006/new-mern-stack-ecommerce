import React, { useEffect} from 'react'
import Product from '../components/Product'

//import Paginate from '../components/Paginate'


import {useDispatch,useSelector} from 'react-redux'
import {listProducts} from '../actions/productActions'
//import products from '../products'
//import axios from 'axios'
import Loader from '../components/Loder'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
const Home = ({match}) => {


//const pageNumber = match.params.pageNumber || 1


const keyword = match.params.keyword






   const dispatch = useDispatch()
   const productList = useSelector(state => state.productList)

   const {loading,error,products} = productList


  useEffect(() => {

    dispatch(listProducts(keyword))

  },[dispatch,keyword])



  useEffect(()=>{

    const Hoteldetails = async () => {  

   // setLoading(true)

    try{

   const res = await axios.get('/api/products');

    

   console.log(res)
   
    // Sethoteldetails(res.data)


     }catch(error){

     // setError(error)

     console.log('error')

     }



  
   }
  
   
  Hoteldetails();


    


},[])












    return (
        <>
        <Header/>







{loading ? <Loader/> : error ? (




 





    <h2>{error}</h2>

):(

  <>




<div className="container" style={{marginTop:'20px'}}>
    
       

       <img style={{width:'100%',height:'400px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1663840345/slider-2_2611962c-5502-4138-98b6-7cf1bfb4aae2_hyjljp.jpg" alt="Not found"/>


</div>

            <div className="container" style={{ marginTop: '30px', marginBottom: '50PX' }}>
                <div className="row">

                    <center>
                      <p style={{fontWeight:'bold',color:'green',fontSize:'27px'}}>Latest Product</p>
                    </center>


                    {products && products.map(product => (

                        <div className="col-md-3">

                              <Product product={product} />

                        </div>

                    ))}

                </div>


          


            </div>

    </>


            )}




    <Footer/>

        </>

    )

}

export default Home
