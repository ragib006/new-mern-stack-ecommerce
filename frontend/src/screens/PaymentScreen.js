

import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {userInfo,updateUser} from '../actions/userActions'
import CheckoutStep from './CheckoutStep'

import {Form,Button,Col} from 'react-bootstrap'

import Header from '../components/Header'

import Footer from '../components/Footer'

import Loader from '../components/Loder'
import Swal from 'sweetalert2'

import { savePaymentMethos } from '../actions/cartActions'


const PaymentScreen = ({match,history}) => {

 const cart = useSelector(state => state.cart)

  const {shippingAddress} = cart

  if(!shippingAddress){

    history.push('/shippingaddress')

  }


      const [paymentMethod,setPaymentMethod] = useState('Paypal')
  
   





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

    dispatch(savePaymentMethos(paymentMethod))

    history.push('/placeorder')


     /// console.log(paymentMethod)

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
  


    <CheckoutStep step1 step2 step3/>


<div className="container">

<div className="myproduct" style={{width:'20%',margin:'10px auto',marginTop:'20px'}}>


     

           <>

            <Form onSubmit={changeOnClick}>
               <Form.Group>
                  <Form.Label as='legend'>Select Method</Form.Label>
                       <Col>
                           
                          <Form.Check type='radio' label='Paypal or Credit Card' id='Paypal' 
                          name='paymentMethod'
                          value='Paypal'
                          checked
                          onChange = {(e) =>setPaymentMethod(e.target.value)}
                          >
                          </Form.Check>

                          
                           <Form.Check type='radio' label='Stripe' id='Stripe' 
                          name='paymentMethod'
                          value='Stripe'
                      
                          onChange = {(e) =>setPaymentMethod(e.target.value)}
                          >
                          </Form.Check>




                       </Col>



            <button type="submit" className="btn btn-primary" style={{marginTop:'20px'}}>Submit</button>


               </Form.Group>
            </Form>



           </>







</div>

</div>


  


 <Footer/>

     </>
   )

}


export default PaymentScreen
