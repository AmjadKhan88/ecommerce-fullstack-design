import Category from "../models/category.model.js";


// CREATE CATEGORY
export const createCategory = async (req,res)=>{
    try{

        const {name,slug,image,parent,description} = req.body;

        const categoryExist = await Category.findOne({slug});

        if(categoryExist){
            return res.status(400).json({
                success:false,
                message:"Category already exists"
            });
        }

        const category = await Category.create({
            name,
            slug,
            image,
            parent: parent || null,
            description
        });

        res.status(201).json({
            success:true,
            category
        });

    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};



// GET ALL CATEGORIES
export const getCategories = async (req,res)=>{

    try{

        const categories = await Category
        .find()
        .populate("parent","name slug")
        .sort({createdAt:-1});

        res.json({
            success:true,
            count:categories.length,
            categories
        });

    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};



// GET SINGLE CATEGORY
export const getCategory = async (req,res)=>{

    try{

        const category = await Category
        .findById(req.params.id)
        .populate("parent","name slug");

        if(!category){
            return res.status(404).json({
                success:false,
                message:"Category not found"
            });
        }

        res.json({
            success:true,
            category
        });

    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};



// UPDATE CATEGORY
export const updateCategory = async (req,res)=>{

    try{

        const {name,slug,image,parent,description,isActive} = req.body;

        const category = await Category.findById(req.params.id);

        if(!category){
            return res.status(404).json({
                success:false,
                message:"Category not found"
            });
        }

        category.name = name || category.name;
        category.slug = slug || category.slug;
        category.image = image || category.image;
        category.parent = parent || category.parent;
        category.description = description || category.description;
        category.isActive = isActive ?? category.isActive;

        const updatedCategory = await category.save();

        res.json({
            success:true,
            category:updatedCategory
        });

    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};



// DELETE CATEGORY
export const deleteCategory = async (req,res)=>{

    try{

        const category = await Category.findById(req.params.id);

        if(!category){
            return res.status(404).json({
                success:false,
                message:"Category not found"
            });
        }

        await category.deleteOne();

        res.json({
            success:true,
            message:"Category deleted"
        });

    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};
