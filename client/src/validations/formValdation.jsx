import * as yup from 'yup'




export const formSchema = yup.object().shape({
    name : yup.string().required('This Field is required'),
    age : yup.string().required('This Field is required'),
    sex : yup.string().required('This field is required'),
    mobile : yup.string().when("mobile",(val)=>{
        if(val[0] !== undefined && val[0].length > 0){
            return yup.string().optional().matches(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/,'Please enter a valid Indian mobile number.')
        }else{
            return yup.string().notRequired()
        }
        }),
    emergencyContact : yup.string().when("emergencyContact",(val)=>{
            if(val[0] !== undefined && val[0].length > 0){
                return yup.string().optional().matches(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/,'Please enter a valid Indian mobile number.')
            }else{
                return yup.string().notRequired()
            }
        }),
    govtId : yup.string().when("ID",(val)=>{
        if(val[0] !== undefined && val[0].length > 0){
            if(val[0] === 'Aadhar'){
                return yup.string().when("govtId",(val)=>{
                    if(val[0] !== undefined && val[0].length > 0){
                        return yup.string().min(12, 'Must be 12 characters')
                    }
                })
            }else{
                return yup.string().when("govtId",(val)=>{
                    if(val[0] !== undefined && val[0].length){
                        return yup.string().min(10, 'Must be 10 characters')
                    }
                })
            }
        }
    }),
    guardianName : yup.string().when("label",(val)=>{
        if(val[0] !== undefined && val[0].length > 0){  
            return yup.string().when("guardianName",(val)=>{
                if(val[0] !== undefined && val[0].length > 0){
                    return yup.string().min(2, 'Minimum 2 characters').max(20,'maximum 20 characters')
                }
        })}else{
            return yup.string().when('guardianName',(val)=>{
                if(val[0] !== undefined && val[0].length > 0){
                    console.log('hi');
                    return yup.string().min(50,'label required')
                }
            })
        }
    }),
    email: yup.string().email('Email is not correct')
    
},[
    ["mobile","mobile"],
    ["emergencyContact","emergencyContact"],
    ["govtId","govtId"],
    ["ID","ID"],
    ["label","label"],
    ["guardianName","guardianName"]
])
    
    
// emergencyContact: yup.string().matches(mobileNumberRegex,'Please enter a valid Indian mobile number.'),

