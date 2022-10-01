import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {logout} from '../actions/userActions'

import {Route} from 'react-router-dom'
import SearchBox from './Searchbox'


const Header = ({history}) => {

     const dispatch = useDispatch()

     const userLogin = useSelector(state => state.userLogin)

     const {userInfo} = userLogin


      const cart = useSelector(state => state.cart)

       const {shippingAddress} = cart

    // useEffect(() =>{

    //     if(!userInfo){

          // console.log('hi')
      //     history.push('/login')

      //   }

           //history.push('/')




  //   },[history,userInfo])






     const logoutHandler = () => {


        // history.push('/login')
         dispatch(logout())

         localStorage.removeItem("userInfo");
         window.location = '/'; // THIS works



      //  history.push('/')



     }

   return(

    <>

       <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
    <Link className="navbar-brand" to="/" style={{color:'white',fontWeight:'bold',fontSize:'23px'}}>Ecommerce Website</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:'20%'}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item " >
          <Link className="nav-link active" aria-current="page" to='/' style={{color:'white'}}>Home</Link>
        </li>




        <li className="nav-item">
          <Link className="nav-link" to="/cart" style={{color:'white'}}><i className="fas fa-cart-plus" style={{marginRight:'7px'}}></i>Cart</Link>
        </li>



       {!userInfo ? (  

            <li className="nav-item">
          <Link className="nav-link" to="/login" style={{color:'white'}}><i className="fas fa-cart-plus" style={{marginRight:'7px'}}></i>Check Out</Link>
         </li> 


        ) : userInfo &&  !shippingAddress ? (  

              <li className="nav-item">
          <Link className="nav-link" to="/shippingaddress" style={{color:'white'}}><i className="fas fa-cart-plus" style={{marginRight:'7px'}}></i>Check Out</Link>
        </li> 


        ): userInfo && shippingAddress ? (


         <li className="nav-item">
          <Link className="nav-link" to="/shippingaddress" style={{color:'white'}}><i className="fas fa-cart-plus" style={{marginRight:'7px'}}></i>Check Out</Link>
        </li> 


        ) :(   


         <li className="nav-item">
          <Link className="nav-link" to="/login" style={{color:'white'}}><i className="fas fa-cart-plus" style={{marginRight:'7px'}}></i>Check Out</Link>
        </li> 



        )}







        {userInfo ? (

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" style={{color:'white'}} role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {userInfo.name}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
              <li><a className="dropdown-item" onClick={logoutHandler}>Logout</a></li>

            </ul>
          </li>


        ) :
       <>
        <li className="nav-item">
          <Link className="nav-link" to="/login" style={{color:'white'}}><i class="fas fa-user" style={{marginRight:'7px'}}></i>Login</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/register" style={{color:'white'}}><i className="fas fa-cart-plus" style={{marginRight:'7px'}}></i>Register</Link>
        </li>

        </>


      }








      </ul>
      
       <Route render={({history}) => <SearchBox history={history}/>}/>

    </div>
  </div>
</nav>

    </>


   )



}

export default Header
