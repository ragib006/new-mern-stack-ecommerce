import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {login} from '../actions/userActions'
//import products from '../products'
//import axios from 'axios'
import Loader from '../components/Loder'

import Error from '../components/Error'

const LoginScreen = ({history}) =>{

   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')

   const dispatch = useDispatch()

   const userLogin = useSelector(state => state.userLogin)

   const {loading,error,userInfo} = userLogin

   //const redirect = location.search ? location.search.split('=') : '/'

   useEffect(() =>{

       if(userInfo?.isAdmin == true){

        history.push('/dashboard')
        //  history.push(redirect)

       }else if(userInfo?.isAdmin == false){


         history.push('/cart')

       }else{

                history.push('/login')

       }

        // history.push('/login')


   },[history,userInfo])


 const submitHandler = (e) => {

   e.preventDefault()

   dispatch(login(email,password))


 }


return(

   <>

 {loading ? <Loader/> : (

    <>


            <div className = "aaa">

            <form style={{width:'30%',margin:'20px auto',marginTop:'200px'}} onSubmit = {submitHandler}>


               {error && <div class="alert alert-success alert-dismissible fade show" role="alert">
              <strong>{error}</strong>
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>}

               <center>
               <h3 style={{fontWeight:'bold'}}> LogIn</h3>
               </center>

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
               value={password}
               onChange = {(e) => setPassword(e.target.value)}

               />
            </div>

               <button type="submit" className="btn btn-primary">Login</button>

                 <div style={{float:'right',width:'200px',marginTop:'40px'}}>
                 <Link to='/register' style={{ textDecoration: 'none'}}> Create a new account </Link>
                 </div>
              </form>


            </div>



    </>

 )}



   </>
)



}



export default LoginScreen
