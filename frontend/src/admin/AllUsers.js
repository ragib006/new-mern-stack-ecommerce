import React, { useEffect} from 'react'
import Product from '../components/Product'
import {useDispatch,useSelector} from 'react-redux'
import {ListUsers,deleteUser} from '../actions/userActions'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'


import Loader from '../components/Loder'
const AllUser = ({history}) => {

const dispatch = useDispatch()

const userList = useSelector((state)=>state.userList)

const {loading,users,error} = userList

const userLogin = useSelector((state)=>state.userLogin)

const {userInfo} = userLogin


const userDelete = useSelector((state)=>state.userDelete)

const {success:successDelete} = userDelete


//  const {userLogin:{userInfo}} = getState()

useEffect(()=>{


  //if(userInfo && userInfo.isAdmin){

    dispatch(ListUsers())

  //}else {

  //history.push('/login')

//  }

//console.log(users)
//console.log(ListUsers())



//console.log(users)

},[dispatch,successDelete])


const deleteHandler = (id) =>{



//if(window.confirm('Are You Sure')){
swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this imaginary file!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {

  dispatch(deleteUser(id))
    swal("Poof! Your imaginary file has been deleted!", {
      icon: "success",

    });
  } else {
    swal("Your imaginary file is safe!");
  }
});

//}

//  console.log(id)



}


   return(

    <>





    <AdminHeader/>
    <AdminSidebar/>

    {loading ? <Loader/> : error ? (

        <h2>{error}</h2>

    ):(



             <div className="container">
             <h4 style={{fontWeight:'bold',color:'green',marginTop:'20px',marginBottom:'20px'}}>All Users</h4>
                <table className="table table-striped" style={{width:'80%',marginLeft:'100px'}}>
                <thead>

                  <tr>
                   <th scope="col">SL</th>
                   <th scope="col">Name</th>
                   <th scope="col">Email</th>

                   <th scope="col">Admin</th>
                   <th scope="col">Action</th>
                  </tr>

                </thead>
             <tbody>

             {users.map((product,index) => (
             <tr key={product._id}>
             <th>{index+1}</th>
             <td>{product.name}</td>
             <td><a style={{textDecoration:'none'}} href={`mailto:${product.email}`}>{product.email}</a></td>
             <td>{product.isAdmin ? (<i className="fas fa-check" style={{color:'green'}}></i>): (<i className="fas fa-times" style={{color:'red'}}></i>)}</td>
             <td>

              
              <Link to={`/edituser/${product._id}`} className="btn btn-success btn-sm" style={{margin:'0px 5px 0px 5px'}}><i className="fas fa-edit"></i></Link>



              <a type="button" className="btn btn-danger btn-sm" onClick = {()=>deleteHandler(product._id)}><i className="fas fa-trash"></i></a>

             </td>
             </tr>
             ))}

            </tbody>
       </table>
     </div>












              // {users.map(product => (
              //
              //     <div className="col-md-3">
              //
              //           <p>hellow</p>
              //
              //     </div>
              //
              // ))}







  )}



     <AdminFooter/>

    </>


   )



}

export default AllUser
