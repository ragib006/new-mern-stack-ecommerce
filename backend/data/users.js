import bcrypt from 'bcryptjs'

const users = [

  {
   
    name:'Admin',
    email:'admin006@gmail.com',
    password:bcrypt.hashSync('01773672495',10),
    isAdmin:true

  },

  {
   
    name:'Ayon',
    email:'ayon006@gmail.com',
    password:bcrypt.hashSync('01773672495',10)
    

  }


]

export default users