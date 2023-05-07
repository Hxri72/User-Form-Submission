const userModel = require('../model/model')

module.exports = {
    postData : async(req,res,next) => {
        try {
            const userData = req.body
            const userExist = await userModel.find({name:userData.name})
            
            const idArray = {
                ID:userData.ID,
                govtId:userData.govtId
            }

            const guardianArr = {
                label : userData.label,
                guardianName : userData.guardianName
            }
            
            userDataModified = {
                name:userData.name,
                age:userData.age,
                sex:userData.sex,
                mobile:userData.mobile,
                id:idArray,
                guardian:guardianArr,
                email:userData.email,
                emergencyContact:userData.emergencyContact,
                address:userData.address,
                state:userData.state,
                city:userData.city,
                country:userData.country,
                pincode:userData.pincode,
                occupation:userData.occupation,
                religion:userData.religion,
                marital:userData.marital,
                bloodGroup:userData.bloodGroup,
                nationality:userData.nationality
            }

            
            if(userExist.length > 0){
               return res.send({
                    success:false,
                    message:'user with same name already exist'
                })
            }
            

            const newUser = new userModel(userDataModified);
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