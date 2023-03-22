import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    age:{
        type:Number
    }
})

export default mongoose.model("Products",productSchema)