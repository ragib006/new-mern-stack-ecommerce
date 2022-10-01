import React, { useState,useEffect} from 'react'
import Product from '../components/Product'
import {useDispatch,useSelector} from 'react-redux'
import {listProducts,createProduct} from '../actions/productActions'

import {allOrderinAdminDashboard} from '../actions/productActions'

//import {PRODUCT_CREATE_RESET} from '../constants/productConstants'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import {deleteProduct} from '../actions/userActions'

import Loader from '../components/Loder'
import Swal from 'sweetalert2'

const AdminAllOrder = ({history}) => {






const dispatch = useDispatch()



const productCreate = useSelector((state)=>state.productCreate)

const {loading:loadingCreate,error:errorCreate,success:successCreate,product:createdproduct} = productCreate


const productList = useSelector((state)=>state.productList)

const {loading,products,error} = productList


const adminallorder = useSelector((state)=>state.adminallorder)

const {loading:adminallorderloading,allorder,error:adminallordererror} = adminallorder


const productDelete = useSelector((state)=>state.productDelete)

const {success:successDelete} = productDelete

const userLogin = useSelector((state)=>state.userLogin)

const {userInfo} = userLogin




  



useEffect(()=>{

  //  dispatch({type:PRODUCT_CREATE_RESET})

 //  if(!userInfo.isAdmin){
     //  history.push('/login')
  // }



  dispatch(allOrderinAdminDashboard())

   console.log(allorder)
//allOrderinAdminDashboard

},[])


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

    { adminallorderloading ? <Loader/> : adminallordererror ? (

        <h2>{error}</h2>

    ):(



             <div className="container">

             <h4 style={{fontWeight:'bold',color:'green',marginTop:'20px',marginBottom:'20px'}}>All Order</h4>
















                <table className="table table-striped" style={{width:'80%',marginLeft:'100px'}}>
                <thead>

                  <tr>
                   <th scope="col">SL</th>
                   <th scope="col">Order Name</th>
                   <th scope="col">Total Amount</th>

                   <th scope="col">Order Date</th>

                   <th scope="col">Payment Method</th>
                   <th scope="col">Payment Status</th>

                   <th scope="col">Order Status</th>
                   <th scope="col">Action</th>

                  </tr>

                </thead>
             <tbody>

             {allorder && allorder.map((product,index) => (
             <tr key={allorder._id}>
             <th>{index+1}</th>
             <th>{product.user.name}</th>

             <th>{product.totalPrice} TK</th>
              <th>{new Date(product.createdAt).toLocaleDateString()}</th>
               <th>{product.paymentMethod}</th>
                <th>

                  
      {product.isPaid ? <span className="bg-success"  style={{padding:'3px 7px 3px 7px',color:'white'}}>Paid {product.paidAt}</span> : <span className="bg-danger" style={{padding:'3px 7px 3px 7px',color:'white'}}>Pending</span>}




                </th>





                <th>

                  
      {product.isDelivered ? <span className="bg-success"  style={{padding:'3px 7px 3px 7px',color:'white'}}>Delivered</span> : <span className="bg-danger" style={{padding:'3px 7px 3px 7px',color:'white'}}>Pending</span>}




                </th>







                  <th>

              
              <Link to={`/orderdetails/${product._id}`} className="btn btn-success btn-sm" style={{margin:'0px 5px 0px 5px'}}><i className="fas fa-eye"></i></Link>



              <a type="button" className="btn btn-danger btn-sm" onClick = {()=>deleteHandler(product._id)}><i className="fas fa-trash"></i></a>

             </th>


             
          
             
  

    

             </tr>
             ))}
            </tbody>
       </table>
     </div>












              // {users.map(product => (
              //
              //     <div className="col-md-3">
              //
              //           <p>hellow</p>
              //
              //     </div>
              //
              // ))}







  )}



     <AdminFooter/>

    </>


   )



}

export default AdminAllOrder
