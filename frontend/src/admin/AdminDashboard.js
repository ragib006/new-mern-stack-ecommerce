
import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
const AdminDashboard = () => {


const [allcount,Setallcount] = useState([])
const [loading,setLoading] = useState(false)
const [error,setError] = useState(false)


useEffect(()=>{ 

const Countalluserallorderallproduct = async () => {  

    setLoading(true)

    try{

     const res = await axios.get('/api/users/countallorderalluserallproduct');
   
     Setallcount(res.data)

     console.log('...................................',res.data)


       //setLoading(false)


    // console.log(res.data)


     }catch(error){

      setError(error)

     }



    setLoading(false)


  
   }
  
   
  Countalluserallorderallproduct();




},[])

   return(

    <>
    <AdminHeader/>
    <AdminSidebar/>

     <div className="container">
         <div className="row" style={{marginTop:'20px'}}>
            <div className="col-md-4">
                <div class="card">
                  <div class="card-body">
                  <h5 class="card-title" style={{fontSize:'23px',fontWeight:'bold',color:'green'}}>All User</h5>
                  <h6 style={{fontSize:'23px',fontWeight:'bold'}}>{allcount.alluser}</h6>
                  </div>
                 </div>
            </div>

            <div className="col-md-4">
                <div class="card">
                  <div class="card-body">
                  <h5 class="card-title" style={{fontSize:'23px',fontWeight:'bold',color:'green'}}>All Product</h5>
                  <h6 style={{fontSize:'23px',fontWeight:'bold'}}>{allcount.allproduct}</h6>
                  </div>
                 </div>
            </div>


            <div className="col-md-4">
                <div class="card">
                  <div class="card-body">
                  <h5 class="card-title" style={{fontSize:'23px',fontWeight:'bold',color:'green'}}>All Order</h5>
                  <h6 style={{fontSize:'23px',fontWeight:'bold'}}>{allcount.allorder}</h6>
                  </div>
                 </div>
            </div>








         </div>
     </div>
     <AdminFooter/>

    </>


   )



}

export default AdminDashboard
