import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'







const AdminHeader = ({history}) => {

   const dispatch = useDispatch()

     const userLogin = useSelector(state => state.userLogin)

     const {userInfo} = userLogin





     const logoutHandler = () => {


        // history.push('/login')
         //dispatch(logout())

         localStorage.removeItem("userInfo");
         window.location = '/'; // THIS works



    //  history.push('/')



     }






   return(

    <>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
 <div className="container-fluid">
   <a className="navbar-brand" href="#">Admin Dashboard</a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{marginLeft:'70%'}}>

     <div className="navbar-nav ">
       <a className="nav-link active" aria-current="page">{userInfo.name}</a>

       <a className="nav-link" onClick={logoutHandler}>Logout</a>

  
     </div>
   </div>
 </div>
</nav>

    </>


   )



}

export default AdminHeader
