import React, { useState,useEffect} from 'react'
import Product from '../components/Product'
import {useDispatch,useSelector} from 'react-redux'
import {listProducts,createProduct} from '../actions/productActions'
import {PRODUCT_CREATE_RESET} from '../constants/productConstants'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import {deleteProduct} from '../actions/userActions'

import Loader from '../components/Loder'
import Swal from 'sweetalert2'

const AllProduct = ({history}) => {



      const [name,setName] = useState('')
      const [price,setPrice] = useState(0)
      const [countInStock,setCountInStock] = useState(0)
      const [brand,setBrand] = useState('')
      const [category,setCategory] = useState('')
      const [description,setDescription] = useState('')
      const [fileName,setFileName] = useState('')



 



const dispatch = useDispatch()



const productCreate = useSelector((state)=>state.productCreate)

const {loading:loadingCreate,error:errorCreate,success:successCreate,product:createdproduct} = productCreate


const productList = useSelector((state)=>state.productList)

const {loading,products,error} = productList



const productDelete = useSelector((state)=>state.productDelete)

const {success:successDelete} = productDelete

const userLogin = useSelector((state)=>state.userLogin)

const {userInfo} = userLogin








  
   const onChangeFile = e =>{ 

   setFileName(e.target.files[0]);

   }


    
   const changeOnClick = (e) =>{   

        e.preventDefault();
        e.target.reset();

        const formData = new FormData();

               formData.set("name",name);
               formData.set("price",price);
               formData.set("countInStock",countInStock);
               formData.set("brand",brand);
               formData.set("category",category);
               formData.set("description",description);
               formData.append("image",fileName);


               dispatch(createProduct(formData))

   


//window.location = '/allproduct';

               console.log(formData)


   }


//const userDelete = useSelector((state)=>state.userDelete)

//const {success:successDelete} = userDelete


//  const {userLogin:{userInfo}} = getState()

useEffect(()=>{

    dispatch({type:PRODUCT_CREATE_RESET})

   if(!userInfo.isAdmin){
       history.push('/login')
   }

   if (successCreate) {


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


      history.push('/allproduct')

   }else{

   dispatch(listProducts())

   }


},[dispatch,successDelete,successCreate,userInfo,history,PRODUCT_CREATE_RESET])


const deleteHandler = (id) =>{



//if(window.confirm('Are You Sure')){
swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this file!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {

  dispatch(deleteProduct(id))
    swal("Successfully Delete This File", {
      icon: "success",

    });
  } else {
    swal("Your imaginary file is safe!");
  }
});

//}

//  console.log(id)

}

//const createproductHandler = () =>{

// dispatch(createProduct())

//}


   return(

    <>





    <AdminHeader/>
    <AdminSidebar/>

    {loadingCreate || loading ? <Loader/> : error ? (

        <h2>{error}</h2>

    ):(



             <div className="container">

             <h4 style={{fontWeight:'bold',color:'green',marginTop:'20px',marginBottom:'20px'}}>All Product</h4>





{/* 


    <Link to="/addproduct" className="btn btn-success" style={{float:'right',marginRight:'80px',marginBottom:'30px'}}>AddProduct</Link>





*/}



















                <table className="table table-striped" style={{width:'80%',marginLeft:'100px'}}>
                <thead>

                  <tr>
                   <th scope="col">SL</th>
                   <th scope="col">Name</th>
                   <th scope="col">Image</th>

                   <th scope="col">Price</th>

                   <th scope="col">Brand</th>
                   <th scope="col">Stock</th>
                   <th scope="col">Action</th>

                  </tr>

                </thead>
             <tbody>

             {products && products.map((product,index) => (
             <tr key={product._id}>
             <th>{index+1}</th>
             <th>{product.name}</th>
             
  

    

       <th> <img style={{border:'1px solid pink',height:'80px',width:'80px'}}  src={product.image} /></th>

        


             <th>{product.price} TK</th>

             <th>{product.brand}</th>
             <th>{product.countInStock}</th>
             <th>

             <a type="button" className="btn btn-danger btn-sm" onClick = {()=>deleteHandler(product._id)}><i className="fas fa-trash"></i></a>

             <Link to={`/editproduct/${product._id}`} className="btn btn-success btn-sm" style={{margin:'0px 5px 0px 5px'}}><i className="fas fa-edit"></i></Link>

             </th>
             </tr>
             ))}
            </tbody>
       </table>
     </div>

















  )}



     <AdminFooter/>

    </>


   )



}

export default AllProduct
