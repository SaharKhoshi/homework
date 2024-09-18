import mongoose from "mongoose";



const UserSchema = new mongoose.Schema({
    Name:{
        type:String,
        required: [true, "name is required!!"],
    },
    age:{
        type:Number,
        maxlength: 4,
    },
    gender:{
        type:String,
    },
    exp:{
        type:Number,
    },
    type:{
        type:String,
    },
    qualification:{
        type:String,
    }
})

const User = mongoose.model("User", UserSchema);
export default User;