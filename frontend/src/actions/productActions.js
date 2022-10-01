

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

import axios from 'axios'

export const listProducts = (keyword ='') => async (dispatch) => {

   try {

     dispatch({type:PRODUCT_LIST_REQUEST})

     const {data} = await axios.get(`/api/products?keyword=${keyword}`)

     dispatch({

      type:PRODUCT_LIST_SUCCESS,
      payload:data

     })


   } catch (error) {

     dispatch({

       type:PRODUCT_LIST_FAIL,
       payload:error.response.data.message


     })



   }


}





export const listProductDetails = (id) => async(dispatch) => {

  try {

    dispatch({ type:PRODUCT_DETAILS_REQUEST})


    const {data} = await axios.get(`/api/products/${id}`)

    dispatch({

       type:PRODUCT_DETAILS_SUCCESS,
       payload:data
    })

  } catch (error) {


    dispatch({

      type:PRODUCT_DETAILS_FAIL,
      payload:error.response.data.message


    })

  }

}

//product create




export const createProduct = (formData) => async (dispatch,getState) => {

    try{

        dispatch({ type:PRODUCT_CREATE_REQUEST })

        const {userLogin:{userInfo}} = getState()

        const config = {

           headers : {

            'Content-Type':'application/json',
            'Authorization':`Bearer ${userInfo.token}`

           }

        }

       const {data} = await axios.post(`/api/users/createmyproduct`,formData,config)


       dispatch({

             type: PRODUCT_CREATE_SUCCESS,
             payload:data

       })


    }catch(error){

      dispatch({

                type: PRODUCT_CREATE_FAIL,
            //  payload:error.response.data.message
                payload:error.response.data.message
      })


    }


}




//update product   



export const updateProduct = (id,product) => async (dispatch,getState) => {

    try{

        dispatch({ type:PRODUCT_UPDATE_REQUEST })

        const {userLogin:{userInfo}} = getState()

        const config = {

           headers : {

            'Content-Type':'application/json',
            'Authorization':`Bearer ${userInfo.token}`

           }

        }

       const {data} = await axios.put(`/api/users/updateproduct/${id}`,product,config)


       dispatch({

             type: PRODUCT_UPDATE_SUCCESS,
             payload:data

       })


    }catch(error){

      dispatch({

                type: PRODUCT_UPDATE_FAIL,
                payload:error.response.data.message
      })


    //  console.log(error)


    }


}


//ORDER CREATE  ACTION  






export const createOrder = (order) => async (dispatch,getState) => {

    try{

        dispatch({ type:ORDER_CREATE_REQUEST })

        const {userLogin:{userInfo}} = getState()

        const config = {

           headers : {

            'Content-Type':'application/json',
            'Authorization':`Bearer ${userInfo.token}`

           }

        }

       const {data} = await axios.post(`/api/users/createorder`,order,config)


       dispatch({

             type:ORDER_CREATE_SUCCESS,
             payload:data

       })


    }catch(error){

      dispatch({

                type:MYORDER_CREATE_FAIL,
                payload:error.response.data.message
      })


    //  console.log(error)


    }


}




//ORDER Details ACTION  




export const getOrderDetails = (id) => async (dispatch,getState) => {

    try{

        dispatch({ type:ORDER_DETAILS_REQUEST })

        const {userLogin:{userInfo}} = getState()

        const config = {

           headers : {

            'Content-Type':'application/json',
            'Authorization':`Bearer ${userInfo.token}`

           }

        }

       const {data} = await axios.get(`/api/users/orderinformation/${id}`,config)


       dispatch({

             type:ORDER_DETAILS_SUCCESS,
             payload:data

       })


    }catch(error){

      dispatch({

                type:ORDER_DETAILS_FAIL,
                payload:error.response.data.message
      })


    //  console.log(error)


    }


}


//admin all order   


export const allOrderinAdminDashboard = () => async (dispatch,getState) => {

    try{

        dispatch({ type:ADMIN_ALL_ORDER_REQUEST })

        const {userLogin:{userInfo}} = getState()

        const config = {

           headers : {

            'Content-Type':'application/json',
            'Authorization':`Bearer ${userInfo.token}`

           }

        }

       const {data} = await axios.get(`/api/users/adminallorder`,config)


       dispatch({

             type:ADMIN_ALL_ORDER_SUCCESS,
             payload:data

       })


    }catch(error){

      dispatch({

                type:ADMIN_ALL_ORDER_FAIL,
                payload:error.response.data.message
      })


    //  console.log(error)

    }


}





//order Pay action





export const payOrder = (orderId,paymentResult) => async (dispatch,getState) => {

    try{

        dispatch({ type:ORDER_PAY_REQUEST })

        const {userLogin:{userInfo}} = getState()

        const config = {

           headers : {

            'Content-Type':'application/json',
            'Authorization':`Bearer ${userInfo.token}`

           }

        }

       const {data} = await axios.put(`/api/users/customerorderpay/${orderId}/pay`,paymentResult,config)


       dispatch({

             type:ORDER_PAY_SUCCESS,
             payload:data

       })


    }catch(error){

      dispatch({

                type:ORDER_PAY_FAIL,
                payload:error.response.data.message
      })


    //  console.log(error)

    }


}




//customer all order show in his profile   




export const allOrdershowincustomerProfile = () => async (dispatch,getState) => {

    try{

        dispatch({ type:CUSTOMER_ORDER_IN_PROFILE_REQUEST })

        const {userLogin:{userInfo}} = getState()

        const config = {

           headers : {

            'Content-Type':'application/json',
            'Authorization':`Bearer ${userInfo.token}`

           }

        }

       const {data} = await axios.get(`/api/users/customerordershowinprofile`,config)


       dispatch({

             type:CUSTOMER_ORDER_IN_PROFILE_SUCCESS,
             payload:data

       })


    }catch(error){

      dispatch({

                type:CUSTOMER_ORDER_IN_PROFILE_FAIL,
                payload:error.response.data.message
      })


    //  console.log(error)

    }


}



//orderDelete reducer 



export const deleteOrder = (id) => async (dispatch,getState) => {

    try{

        dispatch({ type:ORDER_DELETE_REQUEST })

        const {userLogin:{userInfo}} = getState()

        const config = {

           headers : {

            'Content-Type':'application/json',
            'Authorization':`Bearer ${userInfo.token}`

           }

        }

       await axios.delete(`/api/users/orderdelete/${id}`,config)


       dispatch({

             type: ORDER_DELETE_SUCCESS,

       })


    }catch(error){

      dispatch({

              type:ORDER_DELETE_FAIL,      
              payload:error.response.data.message
      })


    }


}


//   ORDER_DELIVER_REQUEST,
       // ORDER_DELIVER_SUCCESS,
       // ORDER_DELIVER_FAIL
       // ORDER_DELIVER_RESET


//Deliver Order

  export const DeliverOrder = (id) => async (dispatch,getState) => {

    try{

        dispatch({ type:ORDER_DELIVER_REQUEST })

        const {userLogin:{userInfo}} = getState()

         const config = {

           headers : {

            'Content-Type':'application/json',
            'Authorization':`Bearer ${userInfo.token}`

           }

        }
       await axios.put(`/api/users/orderdelivered/${id}`,config)


       dispatch({

             type:ORDER_DELIVER_SUCCESS,

       })


    }catch(error){

      dispatch({

              type:ORDER_DELIVER_FAIL,      
              payload:error.response.data.message
      })


    }


}