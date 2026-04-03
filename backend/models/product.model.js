import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
        trim:true
    },

    description:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    oldPrice:{
        type:Number,
        default:null
    },

    brand:{
        type:String
        // Later convert to Brand reference
    },

    category:{
        type:String
        // Later convert to Category reference
    },

    images:[
    {
        type:String,
        required:true
    }
    ],

    rating:{
        type:Number,
        default:0
    },

    numReviews:{
        type:Number,
        default:0
    },

    countInStock:{
        type:Number,
        required:true,
        default:0
    },

    shipping:{
        type:Boolean,
        default:false
    },

    featured:{
        type:Boolean,
        default:false
    },

    tags:[
    {
        type:String
    }
    ]

},
{
    timestamps:true
});

const Product = mongoose.model("Product",productSchema);

export default Product;
