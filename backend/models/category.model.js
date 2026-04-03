import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },

    slug:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },

    image:{
        type:String,
        default:null
    },

    parent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        default:null
    },

    level:{
        type:Number,
        default:0
    },

    isFeatured:{
        type:Boolean,
        default:false
    },

    isActive:{
        type:Boolean,
        default:true
    },

    description:{
        type:String
    }

},
{
    timestamps:true
});

const Category = mongoose.model("Category",categorySchema);

export default Category;
