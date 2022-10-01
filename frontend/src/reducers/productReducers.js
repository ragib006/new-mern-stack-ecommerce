
import {
        PRODUCT_LIST_REQUEST,
        PRODUCT_LIST_SUCCESS,
        PRODUCT_LIST_FAIL,
        PRODUCT_DETAILS_REQUEST,
        PRODUCT_DETAILS_SUCCESS,
        PRODUCT_DETAILS_FAIL,
        PRODUCT_CREATE_REQUEST,
        PRODUCT_CREATE_SUCCESS,
        PRODUCT_CREATE_FAIL,
        PRODUCT_CREATE_RESET,
        PRODUCT_UPDATE_REQUEST,
        PRODUCT_UPDATE_SUCCESS,
        PRODUCT_UPDATE_FAIL,
        PRODUCT_UPDATE_RESET,
        ORDER_CREATE_REQUEST,
        ORDER_CREATE_SUCCESS,
        MYORDER_CREATE_FAIL,
        ORDER_DETAILS_REQUEST,
        ORDER_DETAILS_SUCCESS,
        ORDER_DETAILS_FAIL,
        ADMIN_ALL_ORDER_REQUEST,
        ADMIN_ALL_ORDER_SUCCESS,
        ADMIN_ALL_ORDER_FAIL,
        ORDER_PAY_REQUEST,
        ORDER_PAY_SUCCESS,
        ORDER_PAY_FAIL,
        ORDER_PAY_RESET,
        CUSTOMER_ORDER_IN_PROFILE_REQUEST,
        CUSTOMER_ORDER_IN_PROFILE_SUCCESS,
        CUSTOMER_ORDER_IN_PROFILE_FAIL,
        ORDER_DELETE_REQUEST,
        ORDER_DELETE_SUCCESS,
        ORDER_DELETE_FAIL,

        
        ORDER_DELIVER_REQUEST,
        ORDER_DELIVER_SUCCESS,
        ORDER_DELIVER_FAIL,
        ORDER_DELIVER_RESET





      } from '../constants/productConstants'


export const productListReducer = (state = { products: []},action) => {

  switch (action.type) {

    case PRODUCT_LIST_REQUEST:

      return {loading:true,products:[]}

    case PRODUCT_LIST_SUCCESS:

      return {loading:false,

        products:action.payload
       // pages:action.payload.pages,
        //page:action.payload.page


      }

    case PRODUCT_LIST_FAIL:

      return {loading:false,error:action.payload}

    default:

      return state

  }


}




export const productDetailsReducer = (state = { product:{} },action) => {

  switch (action.type) {

    case PRODUCT_DETAILS_REQUEST:

      return {loading:true}

    case PRODUCT_DETAILS_SUCCESS:

      return {loading:false,product:action.payload}

    case PRODUCT_DETAILS_FAIL:

      return {loading:false,error:action.payload}

    default:

      return state

  }


}


//CREATE PRODUCT




export const productCreateReducer = (state = {},action) => {

  switch (action.type) {

    case PRODUCT_CREATE_REQUEST:

      return {loading:true}

    case PRODUCT_CREATE_SUCCESS:

      return {loading:false,success:true, product:action.payload}

    case PRODUCT_CREATE_FAIL:

      return {loading:false,error:action.payload}

    case PRODUCT_CREATE_RESET:

      return {}

    default:

      return state

  }


}


//UPDATE PRODUCT

export const productUpdateReducer = (state = {updateproductinfo:{}},action) => {

  switch (action.type) {

    case PRODUCT_UPDATE_REQUEST:

      return {loading:true}

    case PRODUCT_UPDATE_SUCCESS:

      return {loading:false,success:true,updateproductinfo:action.payload}

    case PRODUCT_UPDATE_FAIL:

      return {loading:false,error:action.payload}

    case PRODUCT_UPDATE_RESET:

      return {updateproductinfo:{}}

    default:

      return state

  }


}




//ORDER CREATE REDUCER   


export const orderCreateReducer = (state = {},action) => {

  switch (action.type) {

    case ORDER_CREATE_REQUEST:

      return {loading:true}

    case ORDER_CREATE_SUCCESS:

      return {loading:false,success:true,order:action.payload}

    case MYORDER_CREATE_FAIL:

      return {loading:false,error:action.payload}


    default:

      return state

  }


}


//ORDER DETAILS REDUCES  



//export const orderDetailsReducer = (state = {loading:true,orderItems:[],shippingAddress:,action) => {


export const orderDetailsReducer = (state = {loading:true},action) => {

  switch (action.type) {

    case ORDER_DETAILS_REQUEST:

      return {loading:true}

    case ORDER_DETAILS_SUCCESS:

      return {loading:false,success:true,order:action.payload}

    case ORDER_DETAILS_FAIL:

      return {loading:false,error:action.payload}


    default:

      return state

  }


}


//Admin all order   





export const AdminallorderReducer = (state = { allorder: []},action) => {

  switch (action.type) {

    case ADMIN_ALL_ORDER_REQUEST:

      return {loading:true,allorder:[]}

    case ADMIN_ALL_ORDER_SUCCESS:

      return {loading:false,

        allorder:action.payload
       // pages:action.payload.pages,
        //page:action.payload.page


      }

    case ADMIN_ALL_ORDER_FAIL:

      return {loading:false,error:action.payload}

    default:

      return state

  }


}





//ORDER PAY REDUCES  




export const orderPayReducer = (state = {},action) => {

  switch (action.type) {

    case ORDER_PAY_REQUEST:

      return {loading:true}

    case ORDER_PAY_SUCCESS:

      return {loading:false,success:true}

    case ORDER_PAY_FAIL:

      return {loading:false,error:action.payload}

    case ORDER_PAY_RESET:

      return {}

    default:

      return state

  }


}


//CUSTOMER ORDER ON HIS PROFILE  





 export const CustomerOrderinProfileReducer = (state = { allorder: []},action) => {

  switch (action.type) {

    case CUSTOMER_ORDER_IN_PROFILE_REQUEST:

      return {loading:true,allorder:[]}

    case CUSTOMER_ORDER_IN_PROFILE_SUCCESS:

      return {loading:false,

        allorder:action.payload
       // pages:action.payload.pages,
        //page:action.payload.page


      }

    case CUSTOMER_ORDER_IN_PROFILE_FAIL:

      return {loading:false,error:action.payload}

    default:

      return state

  }


}







        //ORDER DELETE REDUCER



  export const OrderDeleteReducer = (state = { }, action) => {


  switch(action.type){

       case ORDER_DELETE_REQUEST:

          return { loading:true}


       case ORDER_DELETE_SUCCESS:

         return {loading:false,success:true}


       case ORDER_DELETE_FAIL:

         return {loading:false,error:action.payload}

       default:

         return state

  }


}








//DELIVER ORDER   
 


export const deliverorderReducer = (state = {},action) => {

  switch (action.type) {

    case ORDER_DELIVER_REQUEST:

      return {loading:true}

    case ORDER_DELIVER_SUCCESS:

      return {loading:false,success:true}

    case ORDER_DELIVER_FAIL:

      return {loading:false,error:action.payload}

    case ORDER_DELIVER_RESET:

      return {}

    default:

      return state

  }


}


