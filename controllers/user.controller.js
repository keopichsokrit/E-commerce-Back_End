const User = require('../models/user.model');

exports.getProfile = async (req,res,next)=>{
    try{
        const user = await User.findById(req.user._id).select('-password');
        res.json(user);
    }catch(err){ next(err); }
};