

import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {userInfo,updateUser} from '../actions/userActions'

import CheckoutStep from './CheckoutStep'

import {USER_UPDATE_RESET} from '../constants/userConstants'
import Header from '../components/Header'

import Footer from '../components/Footer'

import Loader from '../components/Loder'
import Swal from 'sweetalert2'

import { saveShippingAddress } from '../actions/cartActions'


const ShippingScreen = ({match,history}) => {

 const cart = useSelector(state => state.cart)

  const {shippingAddress} = cart





      const [shippingname,setShippingName] = useState(shippingAddress ? shippingAddress.shippingname : '')
      const [address,setAddress] = useState(shippingAddress ? shippingAddress.address:'')
      const [shippingcity,setShippingCity] = useState(shippingAddress ? shippingAddress.shippingcity :'')
      const [shippingpostalcode,setShippingPostalcode] = useState(shippingAddress ? shippingAddress.shippingpostalcode : '')

      const [shippingcountry,setShippingCountry] = useState(shippingAddress ? shippingAddress.shippingcountry :'')

      const [shippingdivision,setShippingDivision] = useState(shippingAddress ? shippingAddress.shippingdivision :'')
  
   

const divisions = [

     'Dhaka',
     'Rangpur',
     'Khulna',
     'Chittagong',
     'Barisal',
     'Rajshahi',
     'Mymensing'
    


]



const dispatch = useDispatch()



//const productCreate = useSelector((state)=>state.productCreate)

//const {loading:loadingCreate,error:errorCreate,success:successCreate,product:createdproduct} = productCreate


//const productList = useSelector((state)=>state.productList)

//const {loading,products,error} = productList




const userLogin = useSelector((state)=>state.userLogin)

const {userInfo} = userLogin



//useEffect(()=>{

   // dispatch({type:PRODUCT_CREATE_RESET})

  // if(!userInfo){
  //    history.push('/login')
  // }else{

 // history.push('/')

 //  }

  // if(successCreate){


   //       history.push('/allproduct')

   //   const Toast = Swal.mixin({
   //     toast: true,
   //     position: 'top-end',
   //     showConfirmButton: false,
   //     timer: 3000,
   //     timerProgressBar: true,
   //     didOpen: (toast) => {
   //       toast.addEventListener('mouseenter', Swal.stopTimer)
   //       toast.addEventListener('mouseleave', Swal.resumeTimer)
   //     }
   //   })

   //   Toast.fire({
   //     icon: 'success',
   //     title: 'Product Create successfully'
   //   })


 

   //}




//},[history])







   const changeOnClick = (e) =>{   

        e.preventDefault();



dispatch(saveShippingAddress({shippingname,address,shippingcity,shippingpostalcode,shippingcountry,shippingdivision}))


   history.push('/payment')
 
       // console.log(shippingdivision)

        //const formData = new FormData();

             //  formData.set("name",name);
             //  formData.set("price",price);
             //  formData.set("countInStock",countInStock);
              // formData.set("brand",brand);
              // formData.set("category",category);
              // formData.set("description",description);
              // formData.set("image",fileName);


              // dispatch(createProduct(formData))


               //console.log(formData)


   }




   return(
     <>



    <Header/>
  


    <CheckoutStep step1 step2/>


<div className="myproduct">


              <form style={{width:'30%',margin:'20px auto',marginTop:'50px'}} onSubmit={changeOnClick} enctype="multipart/form-data">

            <center>
            <h3 style={{fontWeight:'bold',color:'green'}}>Shipping Address</h3>
            </center>

           <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Enter Shipping Name</label>
                    <input

                     type="text"
                     className="form-control"
                     id="exampleInputEmail1"
                     aria-describedby="emailHelp"
                     placeholder="Shipping Name"
                      value = {shippingname}
                      onChange = {(e) => setShippingName(e.target.value)}
                      
                      required
                   


                     />

                 </div>



                    <div className="mb-3">
               <label for="exampleInputEmail1" className="form-label">Enter Shipping Address</label>
               <input

                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                   required
                placeholder="Shipping Address"
                   value = {address}
                onChange = {(e) => setAddress(e.target.value)}

              


                />

            </div>



              <div className="mb-3">
               <label for="exampleInputEmail1" className="form-label">Enter Shipping City</label>
               <input

                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Shipping City"
                   required
                   value = {shippingcity}
                onChange = {(e) => setShippingCity(e.target.value)}

              


                />

            </div>






              <div className="mb-3">
               <label for="exampleInputEmail1" className="form-label">Enter Postal Code</label>
               <input

                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Shipping Postal Code"
                value = {shippingpostalcode}
                onChange = {(e) => setShippingPostalcode(e.target.value)}
                   required

                


                />

            </div>




        



             <div className="mb-3">
               <label for="exampleInputEmail1" className="form-label">Enter Country</label>
               <input

                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Shipping Country"
                  value = {shippingcountry}
                onChange = {(e) => setShippingCountry(e.target.value)}
                   required

         


                />

            </div>



 <div className="mb-3">
               <label for="exampleInputEmail1" className="form-label">Division</label>

       <select className="form-select" aria-label="Default select example" 

       value={shippingdivision} 

       onChange={(e) => setShippingDivision(e.target.value)}>


 <option>Select</option> 
  {divisions.map(brand => (  
       
<>
        
       <option key={brand} value={brand}>{brand}</option>
  
</>


    ))} 

</select>

 </div>




            <button type="submit" className="btn btn-primary"  >Submit</button>


           </form>







</div>


  


 <Footer/>

     </>
   )

}


export default ShippingScreen
