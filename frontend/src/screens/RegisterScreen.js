

import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {register} from '../actions/userActions'
//import products from '../products'
//import axios from 'axios'
import Loader from '../components/Loder'

const RegisterScreen = ({history}) => {


   const [name,setName] = useState('')
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   const [confirmPassword,setConfirmPassword] = useState('')
   const [message,setMessage] = useState(null)


  const dispatch = useDispatch()

  const userRegisterr = useSelector(state=>state.userLogin)

    // const userLogin = useSelector(state => state.userLogin)

  const {loading,error,userInfo} = userRegisterr


 //const redirect = location.search ? location.search.split('=') : '/'



    useEffect(() =>{


      //console.log(userInfo)

      if(userInfo){


        // history.push(redirect)
        //   history.push('/cart')
            history.push('/cart')

      }else{

         history.push('/register')

      }





    },[userInfo,history])


 const submitHandler = (e) => {

   e.preventDefault()

   if(password !== confirmPassword){

      setMessage('Password Do Not Match')

   }else{

      dispatch(register(name,email,password))

    //  localStorage.removeItem("userInfo");
  //    window.location = "/";

  //   history.push('/')

   }


 }





   return(
     <>


    {loading ? <Loader/> : (

         <>



         <div className = "aaa">

         <form style={{width:'30%',margin:'20px auto',marginTop:'100px'}} onSubmit={submitHandler}>

            <center>
            <h3 style={{fontWeight:'bold'}}>Sign Up</h3>
            </center>

            {error && <div class="alert alert-success alert-dismissible fade show" role="alert">
           <strong>{error}</strong>
           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
           </div>}

           {message && <div class="alert alert-success alert-dismissible fade show" role="alert">
           <strong>{message}</strong>
           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
           </div>}


            <div className="mb-3">
               <label for="exampleInputEmail1" className="form-label">Enter Name</label>
               <input

                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
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
             placeholder="Enter Email"
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
            <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
            <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Password"
            value = {confirmPassword}
            onChange = {(e) => setConfirmPassword(e.target.value)}


            />
         </div>

            <button type="submit" className="btn btn-primary">Submit</button>

            <div style={{float:'right',width:'200px',marginTop:'40px'}}>
            <Link to='/login' style={{ textDecoration: 'none'}}> Already have a account </Link>
            </div>
           </form>



         </div>







         </>


    )}







     </>
   )

}


export default RegisterScreen
