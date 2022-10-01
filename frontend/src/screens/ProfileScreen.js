

import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {getUserDetails} from '../actions/userActions'

import {allOrdershowincustomerProfile,deleteOrder} from '../actions/productActions'
//import products from '../products'
//import axios from 'axios'
import Loader from '../components/Loder'
import Header from '../components/Header'
import Footer from '../components/Footer'
import swal from 'sweetalert'
const ProfileScreen = ({history}) => {


   const [name,setName] = useState('')
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   const [confirmPassword,setConfirmPassword] = useState('')
   const [message,setMessage] = useState(null)


  const dispatch = useDispatch()

  const userDetails = useSelector(state=>state.userDetails)

    const {loading,error,user} = userDetails

    const userLogin = useSelector(state => state.userLogin)

    const {userInfo} = userLogin



  const CustomerOrderInHisProfile = useSelector(state => state.CustomerOrderInHisProfile)

    const {loading:orderloading,allorder,error:ordererror} = CustomerOrderInHisProfile

  //const {loading,error,userInfo} = userRegisterr

    const DeleteOrder = useSelector(state => state.DeleteOrder)

    const {success:orderdeletesuccess,error:orderdeleteerroe} = DeleteOrder


//success
 //const redirect = location.search ? location.search.split('=') : '/'



    useEffect(() =>{


   //  if(orderdeletesuccess){

           


   //  }


       

      dispatch(allOrdershowincustomerProfile())




        if(!user){

          dispatch(getUserDetails('profile'))

         

      //  }else{


        //  console.log(user.name)

        //   setName(user.name)
          // setEmail(user.email)
//
    //  }

      }





    },[dispatch,user,orderdeletesuccess])


//deleteOrder

const deleteHandler = (id) =>{


  swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this imaginary file!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {

 dispatch(deleteOrder(id))

    swal("Poof! Your imaginary file has been deleted!", {
      icon: "success",

    });
  } else {
    swal("Your imaginary file is safe!");
  }
});




//console.log(id)


}















 const submitHandler = (e) => {

   e.preventDefault()

   if(password !== confirmPassword){

      setMessage('Password Do Not Match')

   }else{

      //dispatch(register(name,email,password))

    //  localStorage.removeItem("userInfo");
  //    window.location = "/";

  //   history.push('/')

   }


 }





   return(
     <>




     <Header/>





    {orderloading || loading ? <Loader/> : error ? (

        <h2>{error}</h2>

    ):(


     <div className="container">
       <div className="row" style={{marginTop:'20px'}}>
         <div className="col-md-6">
           <p style={{fontWeight:'bold',color:'black',fontSize:'20px'}}>User Profile</p>
           <p style={{fontWeight:'bold',color:'black',fontSize:'17px',float:'left',marginRight:'20px'}}>Name :</p>   <p style={{fontWeight:'bold',color:'green',fontSize:'17px'}}>{userInfo.name}</p>
           <p style={{fontWeight:'bold',color:'black',fontSize:'17px',float:'left',marginRight:'20px'}}>Email :</p>   <p style={{fontWeight:'bold',color:'green',fontSize:'17px'}}>{userInfo.email}</p>
         </div>

         <div className="col-md-6">
      
         </div>
       </div>



       <div className="row" style={{marginTop:'20px'}}>


           {!allorder ? <h1>Empty Order</h1> : (   

                           
                                    <div className="col-md-12">
               <table className="table table-striped" style={{width:'80%',marginLeft:'100px'}}>
                <thead>

                  <tr>
                   <th scope="col">SL</th>
                   <th scope="col">Order Id</th>
                   <th scope="col">Order Date</th>

                   <th scope="col">Order Total</th>

                   <th scope="col">Payment Status</th>
                   <th scope="col">Delivary Status</th>
                   <th scope="col">Action</th>

                  </tr>

                </thead>
             <tbody>

             {allorder && allorder.map((product,index) => (
             <tr key={allorder._id}>
             <th>{index+1}</th>
             <th>{product._id}</th>

             <th>{product.createdAt.substring(0,10)}</th>
              <th>{product.totalPrice} TK</th>
                 

                  
                         <th>

                           {product.isPaid ? (

                            <p className="bg-success" style={{textAlign:'center'}}>{product.paidAt.substring(0,10)} Success</p> ) : (

                             <p className="bg-danger" style={{textAlign:'center'}}>Not Paid</p>

                            )
                            
                             }
                        </th>




                         <th>

                           {product.isDelivered ? (

                            <p className="bg-success" style={{textAlign:'center'}}>{product.isDelivered.substring(0,10)}</p> ) : (

                             <p className="bg-danger" style={{textAlign:'center'}}>Not Delivered</p>

                            )
                            
                             }
                        </th>


              
              
          
              
            


                  <th>

              
              <Link to={`/customerorderdetails/${product._id}`} className="btn btn-success btn-sm" style={{margin:'0px 5px 0px 5px'}}><i className="fas fa-eye"></i></Link>

              
              <a type="button" className="btn btn-danger btn-sm" onClick = {()=>deleteHandler(product._id)}><i className="fas fa-trash"></i></a>


        

             </th>


             </tr>
             ))}
            </tbody>
       </table>
         </div>







            )}

      </div>



    </div>


    )}






<Footer/>
     </>
   )

}


export default ProfileScreen
