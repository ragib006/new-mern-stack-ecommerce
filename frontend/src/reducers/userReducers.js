import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,USER_LOGOUT,USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL,USER_DETAILS_REQUEST,USER_DETAILS_SUCCESS,USER_DETAILS_FAIL,USER_LIST_REQUEST,USER_LIST_SUCCESS,USER_LIST_FAIL,USER_DELETE_REQUEST,USER_DELETE_SUCCESS,USER_DELETE_FAIL,USER_INFO_REQUEST,USER_INFO_SUCCESS,USER_INFO_FAIL,USER_UPDATE_REQUEST,USER_UPDATE_SUCCESS,USER_UPDATE_FAIL,USER_UPDATE_RESET,PRODUCT_DELETE_REQUEST,PRODUCT_DELETE_SUCCESS,PRODUCT_DELETE_FAIL } from '../constants/userConstants'


export const userLoginReducers = (state = {userInfo : {} }, action) => {


  switch(action.type){

       case USER_LOGIN_REQUEST:

          return { loading:true }

       case USER_LOGIN_SUCCESS:

         return {loading:false,userInfo:action.payload}

       case USER_LOGIN_FAIL:

         return {loading:false,error:action.payload}

       case USER_LOGOUT:

         return {}

       default:

         return state


  }


}






export const userRegisterReducers = (state = {userInfo : {} }, action) => {


  switch(action.type){

       case USER_REGISTER_REQUEST:

          return { loading:true }


       case USER_REGISTER_SUCCESS:

         return {loading:false,userInfo:action.payload}

         case USER_LOGIN_SUCCESS:

           return {loading:false,userInfo:action.payload}


       case USER_REGISTER_FAIL:

         return {loading:false,error:action.payload}

       default:

         return state


  }


}



//USER PROFILE REDUCER JETA PLACEHOLDER VALUE


export const userDetailsReducers = (state = {user: {} }, action) => {


  switch(action.type){

       case USER_DETAILS_REQUEST:

          return { loading:true}


       case USER_DETAILS_SUCCESS:

         return {loading:false,user:action.payload}


       case USER_DETAILS_FAIL:

         return {loading:false,error:action.payload}

       default:

         return state


  }


}


//SHOW ALL USER


export const userListReducers = (state = {users:[] }, action) => {


  switch(action.type){

       case USER_LIST_REQUEST:

          return { loading:true}


       case USER_LIST_SUCCESS:

         return {loading:false,success:true,users:action.payload}


       case USER_LIST_FAIL:

         return {loading:false,error:action.payload}

       default:

         return state

  }


}

//USER DELETE


export const userDeleteReducer = (state = { }, action) => {


  switch(action.type){

       case USER_DELETE_REQUEST:

          return { loading:true}


       case USER_DELETE_SUCCESS:

         return {loading:false,success:true}


       case USER_DELETE_FAIL:

         return {loading:false,error:action.payload}

       default:

         return state

  }


}






//USER iNFORMATION PLACEHOLDER VALUE


export const userInformationReducer = (state = {userinformation:{}}, action) => {


  switch(action.type){

       case USER_INFO_REQUEST:

          return { loading:true}


       case USER_INFO_SUCCESS:

         return {loading:false,success:true,userinformation:action.payload}


       case USER_INFO_FAIL:

         return {loading:false,error:action.payload}

       default:

         return state

  }


}



//USER UPDATE



export const userUpdateReducer = (state = {user:{}}, action) => {


  switch(action.type){

       case USER_UPDATE_REQUEST:

          return { loading:true}


       case USER_UPDATE_SUCCESS:

         return {loading:false,success:true}


       case USER_UPDATE_FAIL:

         return {loading:false,error:action.payload}

       case USER_UPDATE_RESET:

         return {user:{}}

       default:

         return state

  }


}



//PRODUCT DELETE



export const productDeleteReducer = (state = { }, action) => {


  switch(action.type){

       case PRODUCT_DELETE_REQUEST:

          return { loading:true}


       case PRODUCT_DELETE_SUCCESS:

         return {loading:false,success:true}


       case PRODUCT_DELETE_FAIL:

         return {loading:false,error:action.payload}

       default:

         return state

  }


}
