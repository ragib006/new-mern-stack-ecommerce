
import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,USER_LOGOUT,USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL,USER_DETAILS_REQUEST,USER_DETAILS_SUCCESS,USER_DETAILS_FAIL,USER_LIST_FAIL,USER_LIST_REQUEST,USER_LIST_SUCCESS,USER_DELETE_REQUEST,USER_DELETE_SUCCESS,USER_DELETE_FAIL,USER_INFO_REQUEST,USER_INFO_SUCCESS,USER_INFO_FAIL,USER_UPDATE_REQUEST,USER_UPDATE_SUCCESS,USER_UPDATE_FAIL,USER_UPDATE_RESET,PRODUCT_DELETE_REQUEST,PRODUCT_DELETE_SUCCESS,PRODUCT_DELETE_FAIL } from '../constants/userConstants'

import axios from 'axios'

export const login = (email,password) => async (dispatch) => {

    try{

        dispatch({ type:USER_LOGIN_REQUEST })

        const config = {

           headers : {

            'Content-Type':'application/json'

           }

        }

        const {data} = await axios.post('/api/users/login',{email,password},config)


        dispatch({

              type:USER_LOGIN_SUCCESS,
              payload:data
        })

        localStorage.setItem('userInfo',JSON.stringify(data))


    }catch(error){

      dispatch({

              type:USER_LOGIN_FAIL,
              payload:error.response.data.message
      })


    }


}




export const logout = () => (dispatch) => {


   localStorage.removeItem('userInfo')

   dispatch({type:USER_LOGOUT})



}



///USER REGISTER


export const register = (name,email,password) => async (dispatch) => {

    try{

        dispatch({ type:USER_REGISTER_REQUEST })

        const config = {

           headers : {

            'Content-Type':'application/json'

           }

        }

        const {data} = await axios.post('/api/users/register',{name,email,password},config)


       dispatch({

             type:USER_REGISTER_SUCCESS,
             payload:data
       })



         dispatch({

            type:USER_LOGIN_SUCCESS,
            payload:data

        })

        localStorage.setItem('userInfo',JSON.stringify(data))


    }catch(error){

      dispatch({

              type:USER_REGISTER_FAIL,
              payload:error.response.data.message
      })


    }


}



//user details





export const getUserDetails = (id) => async (dispatch,getState) => {

    try{

        dispatch({ type:USER_DETAILS_REQUEST })

        const {userLogin:{userInfo}} = getState()

        const config = {

           headers : {

            'Content-Type':'application/json',
            'Authorization':`Bearer ${userInfo.token}`

           }

        }

        const {data} = await axios.get(`/api/users/${id}`,config)


       dispatch({

             type:USER_DETAILS_SUCCESS,
             payload:data
       })



    }catch(error){

      dispatch({

              type:USER_DETAILS_FAIL,
              payload:error.response.data.message
      })


    }


}


//SHOW ALL USER ACTION




export const ListUsers = () => async (dispatch,getState) => {

    try{

        dispatch({ type:USER_LIST_REQUEST })

        const {userLogin:{userInfo}} = getState()

        const config = {

           headers : {

            'Content-Type':'application/json',
            'Authorization':`Bearer ${userInfo.token}`

           }

        }

        const {data} = await axios.get('/api/users/alluser',config)


       dispatch({

             type: USER_LIST_SUCCESS,
             payload:data
       })



    }catch(error){

      dispatch({

              type: USER_LIST_FAIL,
            //  payload:error.response.data.message
                payload:error.response.data.message
      })


    }


}

// USER DELETE


export const deleteUser = (id) => async (dispatch,getState) => {

    try{

        dispatch({ type:USER_DELETE_REQUEST })

        const {userLogin:{userInfo}} = getState()

        const config = {

           headers : {

            'Content-Type':'application/json',
            'Authorization':`Bearer ${userInfo.token}`

           }

        }

       await axios.delete(`/api/users/deleteuser/${id}`,config)


       dispatch({

             type: USER_DELETE_SUCCESS,

       })


    }catch(error){

      dispatch({

              type: USER_DELETE_FAIL,
            //  payload:error.response.data.message
                payload:error.response.data.message
      })


    }


}



//user Information






export const userInfo = (id) => async (dispatch,getState) => {

    try{

        dispatch({ type:USER_INFO_REQUEST })

        const {userLogin:{userInfo}} = getState()

        const config = {

           headers : {

            'Content-Type':'application/json',
            'Authorization':`Bearer ${userInfo.token}`

           }

        }

       const {data} = await axios.get(`/api/users/userinformation/${id}`,config)


       dispatch({

             type: USER_INFO_SUCCESS,
             payload:data

       })


    }catch(error){

      dispatch({

              type: USER_INFO_FAIL,
            //  payload:error.response.data.message
                payload:error.response.data.message
      })


    }


}


//user update




export const updateUser = (user) => async (dispatch,getState) => {

    try{

        dispatch({ type:USER_UPDATE_REQUEST })

        const {userLogin:{userInfo}} = getState()

        const config = {

           headers : {

            'Content-Type':'application/json',
            'Authorization':`Bearer ${userInfo.token}`

           }

        }

       const {data} = await axios.put(`/api/users/updateuser/${user._id}`,user,config)


       dispatch({

             type: USER_UPDATE_SUCCESS,


       })


       dispatch({

             type: USER_INFO_SUCCESS,
             payload:data

       })


    }catch(error){

      dispatch({

              type: USER_UPDATE_FAIL,
            //  payload:error.response.data.message
                payload:error.response.data.message
      })


    }


}



//// Product DELETE


export const deleteProduct = (id) => async (dispatch,getState) => {

    try{

        dispatch({ type:PRODUCT_DELETE_REQUEST })

        const {userLogin:{userInfo}} = getState()

        const config = {

           headers : {

            'Content-Type':'application/json',
            'Authorization':`Bearer ${userInfo.token}`

           }

        }

       await axios.delete(`/api/users/deleteproduct/${id}`,config)


       dispatch({

             type: PRODUCT_DELETE_SUCCESS,

       })


    }catch(error){

      dispatch({

                type: PRODUCT_DELETE_FAIL,
            //  payload:error.response.data.message
                payload:error.response.data.message
      })


    }


}
