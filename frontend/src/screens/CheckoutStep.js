

import React from 'react'

import { Link } from 'react-router-dom'


const CheckoutStep = ({ step1,step2,step3,step4 }) => {   

   return(  

         <>

           <div className="container">


       <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginTop:'20px'}}>
  <div className="container-fluid">

 
      
    

    
      <div className="navbar-nav" style={{textAlign:'center',width:'40%',margin:'2px auto',}}>
      
           {step1 ? (   

                 
                    <Link className="nav-link" to="/login" style={{color:'black',marginLeft:'20px'}}>SignIn</Link>
                 

          	): (                   
                  <li className="nav-item">
                    <Link className="nav-link disabled" style={{marginLeft:'20px'}}>SignIn</Link>
                  </li>
          	)}


          
          {step2 ? (   

                  <li className="nav-item">
                    <Link className="nav-link" to="/shippingaddress" style={{color:'black',marginLeft:'20px'}}>Shipping</Link>
                  </li>

          	): (                   
                  <li className="nav-item">
                    <Link className="nav-link disabled" style={{marginLeft:'20px'}}>Shipping</Link>
                  </li>
          	)} 

         


          	  
          {step3 ? (   

                  <li className="nav-item">
                    <Link className="nav-link" to="/payment" style={{color:'black',marginLeft:'20px'}}>Payment</Link>
                  </li>

          	): (                   
                  <li className="nav-item">
                    <Link className="nav-link disabled" style={{marginLeft:'20px'}}>Payment</Link>
                  </li>
          	)} 

        


          	 
          {step4 ? (   

                  <li className="nav-item">
                    <Link className="nav-link" to="/placeorder" style={{color:'black',marginLeft:'20px'}}>Place Order</Link>
                  </li>

          	): (                   
                  <li className="nav-item">
                    <Link className="nav-link disabled" style={{marginLeft:'20px'}}>Place Order</Link>
                  </li>
          	)} 

     

        
     

    </div>

       

  </div>
</nav>





             

           </div>

        </>

   	)


}


export default CheckoutStep