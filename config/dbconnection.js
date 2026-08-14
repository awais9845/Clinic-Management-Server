import mongoose from "mongoose";


const dbconnection = async () =>{
        try {
            const connection = await mongoose.connect(process.env.MONGO_URI)
            console.log(`Database connected successfully ${connection.connection.host}`)
            
        } catch (error) {
            console.log(`mongodb connection failed ${error.message}`)
        }
}


export default dbconnection;