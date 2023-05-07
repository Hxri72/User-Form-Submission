const userModel = require('../model/model')

module.exports = {
    postData : async(req,res,next) => {
        try {
            const userData = req.body
            const userExist = await userModel.find({name:userData.name})
            
            if(userExist.length > 0){
               return res.send({
                    success:false,
                    message:'user with same name already exist'
                })
            }
            

            const newUser = new userModel(userData);
            await newUser.save();
            console.log('saved');

            res.send({
                success:true,
                message:'user Created successfully'
            })
            
            
        } catch (error) {
            
            res.send({
                success:false,
                message:'something went wrong'
            })
        }
    }
}