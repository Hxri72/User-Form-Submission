const mongoose = require('mongoose')

const idSchema = new mongoose.Schema({
    ID:{
        type:String,
        required:true
    },
    
    govtId:{
        type:Number,
        required:true
    }
})

const guardianSchema = new mongoose.Schema({
    label:{
        type:String,
        required:true
    },
    guardianName:{
        type:String,
        required:true
    }
})

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:String,
        required:true,
    },
    sex:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    id:[idSchema],
    guardian:[guardianSchema],
    email:{
        type:String,
        required:true
    },
    emergencyContact:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    occupation:{
        type:String,
        required:true
    },
    religion:{
        type:String,
        required:true
    },
    marital:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    nationality:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("users",userSchema)