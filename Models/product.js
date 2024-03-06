import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String
    },
    /*category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    }*/
}, {timestamps: true, versionKey: false});

export default mongoose.model("Product", productModel)