import mongoose from 'mongoose'

const connectDB = async () => {   

    try {
        
        const conn = await mongoose.connect(process.env.MONGO_URI,{ 

             useUnifiedTopology:true,
             useNewUrlParser:true
            // useCreateIndex:true


        })

        console.log('Mongodb Connect Successfully')

    } catch (error) {

        console.log(error)
        
    }  



}

export default connectDB