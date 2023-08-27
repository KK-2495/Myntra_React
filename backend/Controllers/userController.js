import User from "../Model/User";

export const register = async (req,res) => {
    try {
        const {name, email, password} = req.body;
        const userData = await User.findOne({email}).exec();
    } catch (error) {
        return res.status(500).json({success:false, message:"Server error"});
    }    

}