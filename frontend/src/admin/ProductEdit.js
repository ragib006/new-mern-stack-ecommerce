

import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {userInfo,updateUser} from '../actions/userActions'
import {listProductDetails,updateProduct} from '../actions/productActions'


import {PRODUCT_UPDATE_RESET} from '../constants/productConstants'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
//import products from '../products'
//import axios from 'axios'
import Loader from '../components/Loder'
import Swal from 'sweetalert2'




const ProductEdit = ({match,history}) => {

  const productId = match.params.id

      const [name,setName] = useState('')
      const [price,setPrice] = useState(0)
      const [countInStock,setCountInStock] = useState(0)
      const [brand,setBrand] = useState('')
      const [category,setCategory] = useState('')
      const [description,setDescription] = useState('')
      const [fileName,setFileName] = useState('')



const brands = [

     'Myntra',
     'Snapdeal',
     'Shopclues',
     'Flipkart',
     'Home Shop',
     'Amazon',
     'Firstcry',
     'Jabong',
     'Dkny',
     'Sony'


]



   const dispatch = useDispatch()

   //const userInformation = useSelector((state)=>state.userInformation)
   //const {loading,error,userinformation} = userInformation

   const productDetails = useSelector((state)=>state.productDetails)
   const {loading,error,product} = productDetails

   const productUpdate = useSelector((state)=>state.productUpdate)
   const {loading:loadingUpdate,error:errorUpdate,success:successUpdate} = productUpdate

  // const userUpdate = useSelector((state)=>state.userUpdate)
  // const {loading:loadingUpdate,error:errorUpdate,success:successUpdate} = userUpdate




useEffect(()=>{



 //dispatch(listProductDetails(productId))

   if(successUpdate){

      
       dispatch({type:PRODUCT_UPDATE_RESET})

       const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Product Update Successfully'
      })

       history.push('/allproduct')






    }else{

    if(product){

     // dispatch(listProductDetails(productId))
        
        if(product && product._id !== productId){

             dispatch(listProductDetails(productId))

        }else{

         setName(product.name)
         setPrice(product.price)
         setCountInStock(product.countInStock)
         setBrand(product.brand)
         setCategory(product.category)
         setDescription(product.description)
         setFileName(product.fileName)



        }



  }

            




    }







},[product,productId,successUpdate,PRODUCT_UPDATE_RESET,listProductDetails])



   const onChangeFile = e =>{ 

   setFileName(e.target.files[0]);

   }


   const changeOnClick = (e) =>{   

        e.preventDefault();

        const formData = new FormData();

               formData.set("name",name);
               formData.set("price",price);
               formData.set("countInStock",countInStock);
               formData.set("brand",brand);
               formData.set("category",category);
               formData.set("description",description);
               formData.set("image",fileName);


         dispatch(updateProduct(productId,formData))

          //  console.log(productId)
           //  console.log(description)


   }




// const submitHandler = (e) => {

  // e.preventDefault()

  
  // dispatch(updateProduct({ 

  //  _id:productId,
  //  name,
  //  price,
  //  image,
  //  countInStock,
  //  category,
  //  brand,
  //  description

  //}))




 //}
//




   return(
     <>

     <AdminHeader/>
     <AdminSidebar/>





   {loadingUpdate ? <Loader/> : (

         <>




         <div className = "aaa">

         <form style={{width:'30%',margin:'20px auto',marginTop:'50px'}} onSubmit={changeOnClick} enctype="multipart/form-data">

            <center>
            <h3 style={{fontWeight:'bold',color:'green'}}>Edit Product</h3>
            </center>

            { errorUpdate && <div className="alert alert-success alert-dismissible fade show" role="alert">
           <strong>{errorUpdate}</strong>
           <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
           </div>}




            <div className="mb-3">
               <label for="exampleInputEmail1" className="form-label">Enter Name</label>
               <input

                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enater Name"
                value = {name}
                onChange = {(e) => setName(e.target.value)}


                />

            </div>

              <div className="mb-3">
               <label for="exampleInputEmail1" className="form-label">Enter Price</label>
               <input

                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enater Name"
                value = {price}
                onChange = {(e) => setPrice(e.target.value)}


                />

            </div>


           


              <div className="mb-3">
               <label for="exampleInputEmail1" className="form-label">Category</label>
               <input

                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enater Name"
                value = {category}
                onChange = {(e) => setCategory(e.target.value)}


                />

            </div>


           <div className="mb-3">
               <label for="exampleInputEmail1" className="form-label">Description</label>

              <select className="form-select" aria-label="Default select example" 

               value={brand} 

               onChange={(e) => setBrand(e.target.value)}>


            
               {brands.map(brand => (  
       
               <>
        
                <option key={brand} value={brand}>{brand}</option>
  
              </>


             ))} 

          </select>

          </div>



             <div className="mb-3">
               <label for="exampleInputEmail1" className="form-label">Image</label>

        

               {product ? 

                  <>

                   <img style={{border:'1px solid pink',height:'50px',width:'50px',margin:'10px 10px'}}  src={"/images/" + product.image} />
                  </>

                : (

                 <p>Image Not Found</p>

                    )}
             
               <input

                type="file"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enater Name"
                name = "image"
                accept="images/*"
                
               // onChange={(e) => setFileName(e.target.value)}

               onChange = {onChangeFile}
                 required

                
                          

                />

            </div>


             <div className="mb-3">
               <label for="exampleInputEmail1" className="form-label">Description</label>
               <textarea

                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
                  value = {description}
                onChange = {(e) => setDescription(e.target.value)}
                   required

         


                ></textarea>

            </div>

         




         



            <button type="submit" className="btn btn-primary">Update</button>


           </form>



         </div>




         </>


    )}




        






  







     </>
   )

}


export default ProductEdit
