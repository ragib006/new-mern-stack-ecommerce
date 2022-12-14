import { CART_ADD_ITEM,CART_REMOVE_ITEM,CART_SAVE_SHIPPING_ADDRESS,CART_SAVE_PAYMENT_METHOD } from '../constants/cartConstants'


export const cartReducer = (state = { cartItems: [],shippingAddress:{},paymentMethod:{} },action)=>{

switch(action.type){

  case CART_ADD_ITEM :
  const item = action.payload

  const isexistItem = state.cartItems.find(x => x.product === item.product)

  if(isexistItem){

     return{

          ...state,
          cartItems:state.cartItems.map(x =>x.product === isexistItem.product ? item : x)
     }

  }else{


    return{

      ...state,
      cartItems:[...state.cartItems,item]

    }

  }


  case CART_REMOVE_ITEM :

  return{

    ...state,
    cartItems : state.cartItems.filter(i => i.product !== action.payload)

  }

  //shipping Address  


  case CART_SAVE_SHIPPING_ADDRESS :

  return{
    ...state,

    shippingAddress:action.payload


  }


  //payment Method  


 case CART_SAVE_PAYMENT_METHOD :

  return{
    ...state,

    paymentMethod:action.payload


  }



   default:
     return state

}






}
