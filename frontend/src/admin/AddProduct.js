

import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {userInfo,updateUser} from '../actions/userActions'

import {USER_UPDATE_RESET} from '../constants/userConstants'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
//import products from '../products'
//import axios from 'axios'
import Loader from '../components/Loder'
import Swal from 'sweetalert2'

import {listProducts,createProduct} from '../actions/productActions'
import axios from 'axios'

import {PRODUCT_CREATE_RESET} from '../constants/productConstants'

const AddProduct = ({match,history}) => {

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



const productCreate = useSelector((state)=>state.productCreate)

const {loading:loadingCreate,error:errorCreate,success:successCreate,product:createdproduct} = productCreate


//const productList = useSelector((state)=>state.productList)

//const {loading,products,error} = productList



const productDelete = useSelector((state)=>state.productDelete)

const {success:successDelete} = productDelete

const userLogin = useSelector((state)=>state.userLogin)

const {userInfo} = userLogin



useEffect(()=>{

   // dispatch({type:PRODUCT_CREATE_RESET})

  // if(!userInfo.isAdmin){
   //    history.push('/login')
  // }

   if(successCreate){


          history.push('/allproduct')

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
        title: 'Product Create successfully'
      })


 

   }




},[successCreate,history])




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


               dispatch(createProduct(formData))


               console.log(formData)


   }




   return(
     <>



    <AdminHeader/>
    <AdminSidebar/>



      {loadingCreate ? <Loader/> : errorCreate ? (

        <h2>{errorCreate}</h2>

    ):(


<div className="myproduct">


              <form style={{width:'30%',margin:'20px auto',marginTop:'50px'}} onSubmit={changeOnClick} enctype="multipart/form-data">

            <center>
            <h3 style={{fontWeight:'bold',color:'green'}}>Add Product</h3>
            </center>

           <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Enter Name</label>
                    <input

                     type="text"
                     className="form-control"
                     id="exampleInputEmail1"
                     aria-describedby="emailHelp"
                     placeholder="Enter Product Name"
                      value = {name}
                      onChange = {(e) => setName(e.target.value)}
                      
                      required
                   


                     />

                 </div>



                    <div className="mb-3">
               <label for="exampleInputEmail1" className="form-label">Enter Price</label>
               <input

                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                   required
                placeholder="Enter Price"
                   value = {price}
                onChange = {(e) => setPrice(e.target.value)}

              


                />

            </div>



              <div className="mb-3">
               <label for="exampleInputEmail1" className="form-label">Enter Stock</label>
               <input

                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Stock"
                   required
                   value = {countInStock}
                onChange = {(e) => setCountInStock(e.target.value)}

              


                />

            </div>



              <div className="mb-3">
               <label for="exampleInputEmail1" className="form-label">Image</label>
               <input

                type="file"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enater Name"
                name = "image"
                 accept="images/*"
            

                 onChange = {onChangeFile}
                    required


                          

                />

            </div>




              <div className="mb-3">
               <label for="exampleInputEmail1" className="form-label">Category</label>
               <input

                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Category Name"
                value = {category}
                onChange = {(e) => setCategory(e.target.value)}
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
                placeholder="Enter Description"
                  value = {description}
                onChange = {(e) => setDescription(e.target.value)}
                   required

         


                ></textarea>

            </div>



 <div className="mb-3">
               <label for="exampleInputEmail1" className="form-label">Description</label>

       <select className="form-select" aria-label="Default select example" 

       value={brand} 

       onChange={(e) => setBrand(e.target.value)}>


 <option>Select</option> 
  {brands.map(brand => (  
       
<>
        
       <option key={brand} value={brand}>{brand}</option>
  
</>


    ))} 

</select>

 </div>




            <button type="submit" className="btn btn-primary" disabled={loadingCreate ? true : false} >Submit</button>


           </form>







</div>


  )}


 <AdminFooter/>

     </>
   )

}


export default AddProduct
