import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required : true
    },
    userId:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        minLenght: 10,
        unique: true
    },
    userType:{
        type: String,
        required: true,
        default: "Customer",
        enum: ["Customer", "Admin"]
    }
}, {timestamps: true, versionKey: false})


export default mongoose.model("User", userSchema)