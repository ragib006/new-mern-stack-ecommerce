
import {createStore,combineReducers,applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'

import {productListReducer} from './reducers/productReducers'

import {
	productDetailsReducer,
	productCreateReducer
	,productUpdateReducer,
	orderCreateReducer,
	orderDetailsReducer,
	AdminallorderReducer,
	orderPayReducer,
	CustomerOrderinProfileReducer,
	OrderDeleteReducer,
	deliverorderReducer
	
    } from './reducers/productReducers'

import {cartReducer} from './reducers/cartReducers'

import {userLoginReducers,userRegisterReducers,userDetailsReducers,userListReducers,userDeleteReducer,userInformationReducer,userUpdateReducer,productDeleteReducer} from './reducers/userReducers'


const reducer = combineReducers({

productList:productListReducer,
productDetails:productDetailsReducer,
cart: cartReducer,
userLogin:userLoginReducers,
userRegister:userRegisterReducers,
userDetails:userDetailsReducers,
userList:userListReducers,
userDelete:userDeleteReducer,
userInformation:userInformationReducer,

userUpdate:userUpdateReducer,
productDelete:productDeleteReducer,


productCreate:productCreateReducer,
productUpdate:productUpdateReducer,
orderCreate:orderCreateReducer,
orderDetails:orderDetailsReducer,
adminallorder:AdminallorderReducer,
orderPay:orderPayReducer,

CustomerOrderInHisProfile:CustomerOrderinProfileReducer,
DeleteOrder:OrderDeleteReducer,
OrderDeliver:deliverorderReducer

})


const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')): []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')): null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')): null

const paymentmethodFromStorage = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')): null



const initialState = {

  cart:{ cartItems:cartItemsFromStorage,shippingAddress:shippingAddressFromStorage,paymentMethod:paymentmethodFromStorage},
  userLogin:{ userInfo: userInfoFromStorage}


}

const middleware = [thunk]


const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store
