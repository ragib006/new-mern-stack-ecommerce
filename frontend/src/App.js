import Footer from './components/Footer';
import Header from './components/Header';
import logo from './logo.svg';
import Home from './screens/Homescreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';


import AdminDashboard from './admin/AdminDashboard';
import AllUser from './admin/AllUsers';
import UserEdit from './admin/UserEdit';
import AllProduct from './admin/AllProduct';
import ProductEdit from './admin/ProductEdit';
import AddProduct from './admin/AddProduct';


import AdminOrderDetails from './admin/AdminOrderDetails';

import AdminAllOrder from './admin/AdminAllOrder';




import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import CustomerOrderDetails from './screens/CustomerOrderDetails';





//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
//import './bootstrap.min.css';

import {BrowserRouter as Router,Route} from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';

function App() {
  return (


    <Router>

    <>





    
        
        <Route path='/search/:keyword' component={Home}/>

        <Route path='/page/:pageNumber' component={Home}/>
        
        <Route path='/search/:keyword/page/:pageNumber' component={Home}/>


        <Route path='/product/:id' component={ProductScreen} />

        <Route path='/cart' component={CartScreen} />

        <Route path='/login' component={LoginScreen} />

        <Route path='/register' component={RegisterScreen} />

        <Route path='/profile' component={ProfileScreen} />
        <Route path='/shippingaddress' component={ShippingScreen} />

        <Route path='/payment' component={PaymentScreen} />

        <Route path='/placeorder' component={PlaceOrderScreen} />




        <Route path='/dashboard' component={AdminDashboard}  />
        <Route path='/alluser' component={AllUser}  />
        <Route path='/edituser/:id' component={UserEdit} />

        <Route path='/allproduct' component={AllProduct}/>

        <Route path='/editproduct/:id' component={ProductEdit}/>

        <Route path='/addproduct' component={AddProduct} />

        <Route path='/adminallorder' component={AdminAllOrder} />

    
         <Route path='/orderdetails/:id' component={AdminOrderDetails}/>

    
         <Route path='/customerorderdetails/:id' component={CustomerOrderDetails}/>


      


        


        


    <Route path='/' component={Home} exact/>


    </>


    </Router>


  );
}

export default App;
