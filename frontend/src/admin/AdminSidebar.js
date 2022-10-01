import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {

   return(

    <>







<ul class="list-group bg-light" style={{width:'250px',float:'left',height:'2000px',marginRight:'40px'}}>


<Link to='/dashboard' style={{textDecoration:'none',fontWeight:'bold'}}>
<li class="list-group-item disabled" aria-disabled="true" style={{color:'black'}}>Home</li>
</Link>

<Link to='/alluser' style={{textDecoration:'none'}}>
<li class="list-group-item disabled" aria-disabled="true" style={{color:'black'}}>AllUsers</li>
</Link>


<Link to='/allproduct' style={{textDecoration:'none'}}>
<li class="list-group-item disabled" aria-disabled="true" style={{color:'black'}}>AllProduct</li>
</Link>

<Link to='/addproduct' style={{textDecoration:'none'}}>
<li class="list-group-item disabled" aria-disabled="true" style={{color:'black'}}>AddProduct</li>
</Link>


<Link to='/adminallorder' style={{textDecoration:'none'}}>
<li class="list-group-item disabled" aria-disabled="true" style={{color:'black'}}>Allorder</li>
</Link>




</ul>



    </>


   )



}

export default AdminSidebar
