const Category = require('../models/category.model');

exports.createCategory = async (req,res,next)=>{
    try{
        const { name, description } = req.body;
        const category = await Category.create({ name, description });
        res.json(category);
    }catch(err){ next(err); }
};

exports.getCategories = async (req,res,next)=>{
    try{
        const categories = await Category.find();
        res.json(categories);
    }catch(err){ next(err); }
};