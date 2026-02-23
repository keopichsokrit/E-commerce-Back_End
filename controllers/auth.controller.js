const User = require('../models/user.model');
const generateToken = require('../utils/generateToken');

exports.register = async (req,res,next)=>{
    try{
        const { name,email,password } = req.body;
        const user = await User.create({ name,email,password });
        res.json({ token: generateToken(user._id) });
    }catch(err){ next(err); }
};

exports.login = async (req,res,next)=>{
    try{
        const { email,password } = req.body;
        const user = await User.findOne({ email });
        if(!user || !(await user.matchPassword(password))){
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.json({ token: generateToken(user._id) });
    }catch(err){ next(err); }
};