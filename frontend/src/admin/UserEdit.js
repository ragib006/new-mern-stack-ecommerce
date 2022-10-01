

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




const UserEdit = ({match,history}) => {

  const userId = match.params.id

   const [name,setName] = useState('')
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   //const [confirmPassword,setConfirmPassword] = useState('')
 // const [message,setMessage] = useState(null)

      const [isAdmin,setIsAdmin] = useState(false)


   //const [confirmPassword,setConfirmPassword] = useState('')
   //const [message,setMessage] = useState(null)


   const dispatch = useDispatch()

   const userInformation = useSelector((state)=>state.userInformation)
   const {loading,error,userinformation} = userInformation

   const userUpdate = useSelector((state)=>state.userUpdate)
   const {loading:loadingUpdate,error:errorUpdate,success:successUpdate} = userUpdate


 //const redirect = location.search ? location.search.split('=') : '/'



    useEffect(() =>{

  if(successUpdate){

      dispatch({ type:USER_UPDATE_RESET })



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
        title: 'User Update successfully'
      })



      history.push('/alluser')



  }else{




      if(userinformation){

        if(userinformation && userinformation._id !== userId){

          dispatch(userInfo(userId))

      }

        else{

        //  console.log('hellow')

           setName(userinformation.name)
           setEmail(userinformation.email)
           setPassword(userinformation.password)
           setIsAdmin(userinformation.isAdmin)

        }


      }







  }









},[dispatch,userId,history,userinformation,successUpdate])


 const submitHandler = (e) => {

   e.preventDefault()


   dispatch(updateUser({ _id:userId,name,email,password,isAdmin}))

  //  if(password !== confirmPassword){
  //
  //     setMessage('Password Do Not Match')
  //
  //  }else{
  // //
  // //     dispatch(register(name,email,password))
  // //
  // //   //  localStorage.removeItem("userInfo");
  // // //    window.location = "/";
  // //
  // // //   history.push('/')
  // //
  //  }


 }





   return(
     <>

     <AdminHeader/>
     <AdminSidebar/>





    {loadingUpdate || loading ? <Loader/> : (

         <>



         <div className = "aaa">

         <form style={{width:'30%',margin:'20px auto',marginTop:'50px'}} onSubmit={submitHandler}>

            <center>
            <h3 style={{fontWeight:'bold',color:'green'}}>Edit Profile</h3>
            </center>

            {error && <div className="alert alert-success alert-dismissible fade show" role="alert">
           <strong>{error}</strong>
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
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input

             type="email"
             className="form-control"
             id="exampleInputEmail1"
             aria-describedby="emailHelp"
             placeholder="Enater Email"
             value = {email}
             onChange = {(e) => setEmail(e.target.value)}


             />

         </div>

         <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Password"
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}


            />
         </div>





         <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label" style={{marginRight:'20px'}}>Admin</label>
            <input
            type='checkbox'

            id="exampleInputPassword1"
            checked={isAdmin}

            onChange = {(e) => setIsAdmin(e.target.checked)}


            />
         </div>




            <button type="submit" className="btn btn-primary">Update</button>


           </form>



         </div>







         </>


    )}







     </>
   )

}


export default UserEdit
