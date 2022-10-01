
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({

    name: {

        type: String,
        required: true


    },
    email: {

        type: String,
        require: true,
        unique: true
    },

    password: {

        type: String,
        required: true,

    },

    isAdmin: {

        type: Boolean,
        required: true,
        default: false

    }



}, { timestamps: true })



userSchema.methods.matchPassword = async function(enterpassword){

       return await bcrypt.compare(enterpassword,this.password)


}





const User = mongoose.model('User', userSchema)

export default User
