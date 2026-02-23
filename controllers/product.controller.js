const Product = require('../models/product.model');

exports.createProduct = async (req,res,next)=>{
    try{
        const { name, price, stock, category, image } = req.body;
        const product = await Product.create({ name, price, stock, category, image });
        res.json(product);
    }catch(err){ next(err); }
};

exports.getProducts = async (req,res,next)=>{
    try{
        const products = await Product.find().populate('category');
        res.json(products);
    }catch(err){ next(err); }
};