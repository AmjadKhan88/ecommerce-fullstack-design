import Product from "../models/product.model.js";


// CREATE PRODUCT
export const createProduct = async (req,res)=>{

    try{

        const product = await Product.create(req.body);

        res.status(201).json({
            success:true,
            product
        });

    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};



// GET ALL PRODUCTS (with search + pagination)
export const getProducts = async (req,res)=>{

    try{

        const pageSize = 10;

        const page = Number(req.query.page) || 1;

        const keyword = req.query.keyword
        ? {
            title:{
                $regex:req.query.keyword,
                $options:"i"
            }
        }
        : {};

        const category = req.query.category
        ? {category:req.query.category}
        : {};

        const brand = req.query.brand
        ? {brand:req.query.brand}
        : {};

        const query = {
            ...keyword,
            ...category,
            ...brand
        };

        const count = await Product.countDocuments(query);

        const products = await Product
        .find(query)
        .limit(pageSize)
        .skip(pageSize*(page-1))
        .sort({createdAt:-1});

        res.json({

            success:true,

            products,

            page,

            pages:Math.ceil(count/pageSize),

            total:count

        });

    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};



// GET SINGLE PRODUCT
export const getProduct = async (req,res)=>{

    try{

        const product = await Product.findById(req.params.id);

        if(!product){

            return res.status(404).json({
                success:false,
                message:"Product not found"
            });

        }

        res.json({
            success:true,
            product
        });

    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};



// UPDATE PRODUCT
export const updateProduct = async (req,res)=>{

    try{

        const product = await Product.findById(req.params.id);

        if(!product){

            return res.status(404).json({
                message:"Product not found"
            });

        }

        product.title = req.body.title || product.title;
        product.description = req.body.description || product.description;

        product.price = req.body.price || product.price;

        product.oldPrice = req.body.oldPrice || product.oldPrice;

        product.brand = req.body.brand || product.brand;

        product.category = req.body.category || product.category;

        product.images = req.body.images || product.images;

        product.countInStock =
        req.body.countInStock ?? product.countInStock;

        product.shipping =
        req.body.shipping ?? product.shipping;

        product.featured =
        req.body.featured ?? product.featured;

        const updatedProduct = await product.save();

        res.json({

            success:true,
            product:updatedProduct

        });

    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};



// DELETE PRODUCT
export const deleteProduct = async (req,res)=>{

    try{

        const product = await Product.findById(req.params.id);

        if(!product){

            return res.status(404).json({
                message:"Product not found"
            });

        }

        await product.deleteOne();

        res.json({
            success:true,
            message:"Product removed"
        });

    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};
