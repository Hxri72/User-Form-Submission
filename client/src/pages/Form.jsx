import React from 'react'
import '../stylesheets/form.css'
import { useForm } from "react-hook-form"
import { useState } from 'react'
import {formSchema} from '../validations/formValdation'
import {yupResolver} from '@hookform/resolvers/yup'
import { postData } from '../axios/axiosUser'

function Form() {
    
    // const [selectedSex,setSelectedSex] = useState('Enter Sex')
    const { register ,formState:{errors} , handleSubmit } = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubmit = async(data) => {
        console.log('form submitted',data)
        const response = await postData(data)
        // console.log(response)
    }
   
    
  return (
    <>
    <div className='mainDivForm'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='personalDiv'>
            <h1 className='underline font-bold'>Personal Details</h1>
            <div className='flex mt-4'>
                <div className='w-1/2'>
                    <label className='inputLabel'>Name</label>
                    <input className='w-3/4 inputField' id='name' error helperText placeholder='Enter Name' {...register('name')}></input>
                    <br/><span className='text-sm text-red-500'>{errors?.name?.message}</span>
                </div>
                
                <div className='w-1/2 flex'>
                    
                    <div>
                    <label className='inputLabel'>Date of Birth or Age</label>
                    <input className='w-1/3 inputField' id='age'  placeholder='DD/MM/YYYY or Age in Years' {...register('age')}></input>
                    <br/><span className='text-sm text-red-500'>{errors?.DOB?.message}</span>
                    </div>
                    
                    <div>
                    <label className='inputLabel'>Sex</label>
                    <select className='w-1/8 inputField' id='sex' {...register('sex')}>
                        <option selected disabled hidden value=''>Enter Sex</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select><br/>
                    <span className='text-sm text-red-500'>{errors?.sex?.message}</span>
                    </div>
                    
                </div>

                <div>
                    
                </div>
            </div>

            <div className='flex mt-4'>
                <div className='w-1/2'>
                    <label className='inputLabel'>Mobile</label>
                    <input className='inputField w-1/2 h-8 mt-3' id='mobile' placeholder='Enter Mobile' {...register("mobile")}></input>
                    <br/><span className='text-sm text-red-500'>{errors?.mobile?.message}</span>
                </div>
                <div className='w-1/2'>
                    <label className='inputLabel'>Govt Issued ID</label>
                    <select className='mr-10 w-1/4' id='ID' {...register('ID')}>
                    <option selected disabled hidden value=''>ID Type</option>
                    <option>Aadhar</option>
                    <option>PAN</option>
                    </select>
                    <input className='inputField w-2/5 h-8 mt-3'id='govtId' {...register('govtId')} placeholder='Enter Govt ID'></input>
                    <br/><span className='text-sm text-red-500'>{errors?.govtId?.message}</span>
                </div>
            </div>

            <div className='mt-4'>
                <h1 className='underline font-bold'>Contact Details</h1>
                <div className='flex p-4 '>
                    <div className='w-1/2'>
                    <label className='mt-1'>Guardian Details</label>
                    <select className='w-1/4 ml-4 inputField' id='label' {...register('label')}>
                        <option selected disabled hidden value=''>Enter Label</option>
                        <option>Mother</option>
                        <option>Father</option>
                        <option>Other</option>
                    </select>
                    <input className='inputField w-2/5 ml-4' id='guardianName'  placeholder='Enter Guardian name' {...register('guardianName')}></input>
                    <br/><span className='text-sm text-red-500'>{errors?.guardianName?.message}</span>
                    </div>

                    <div className='w-1/2 flex'>
                        <div className='w-1/2'>
                            <label className='ml-4'>Email</label>
                            <input className='inputField w-3/4 ml-2' id='email' {...register('email')} placeholder='Enter Email'></input>
                            <br/><span className='text-sm text-red-500'>{errors?.email?.message}</span>
                        </div>
                        
                        <div className='w-1/2 flex'>
                            <label className='ml-4'>Emergency Contact number</label>
                            <div className='flex flex-col'>
                            <input className='inputField w-full h-9 ml-2' id='emergencyContact' {...register('emergencyContact')} placeholder='Enter Emergency No'></input>
                            <span className='text-sm text-red-500'>{errors?.emergencyContact?.message}</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className='addressDiv'>
                <h1 className='underline font-bold'>Address Details</h1>
                <div className='flex w-full p-4'>
                    <div className='w-1/2'>
                        <label className='inputLabel'>Address</label>
                        <input className='inputField w-3/4 ' placeholder='Enter Address' id='address' {...register('address')}></input>
                    </div>

                    <div className='flex w-1/2'>
                        <div className='w-1/2'>
                        <label className='inputLabel'>State</label>
                        <select className='inputField w-3/4' id='state' {...register('state')}>
                            <option selected disabled hidden>Select State</option>
                            <option>Kerala</option>
                            <option>TamilNadu</option>
                        </select>
                        </div>
                        
                        <div className='w-1/2'>
                        <label className='inputLabel'>City</label>
                        <select className='inputField w-3/4' id='city' {...register('city')}>
                            <option selected disabled hidden>Enter City/Town/Village</option>
                            <option>Kerala</option>
                            <option>TamilNadu</option>
                        </select>
                        </div>

                    </div>
                </div>

                <div className='flex w-full p-4'>

                    <div className='w-1/2'>
                        <label className='inputLabel'>Country</label>
                        <select className='inputField w-1/2' id='country' {...register('country')}>
                            <option>India</option>
                            <option>China</option>
                            <option>USA</option>
                        </select>
                    </div>

                    <div className='w-1/2'>
                        <label className='inputLabel'>Pincode</label>
                        <input className='inputField' placeholder='Enter Pincode' id='pincode' {...register('pincode')}></input>
                    </div>
                </div>
            </div>

            <div className='otherDetailsDiv '>
                <h1 className='underline font-bold'>Other Details</h1>

                <div className='flex w-full p-2'>

                    <div>
                    <label className='inputLabel'>Occupation</label>
                    <input className='inputField' placeholder='Enter Occupation' id='occupation' {...register('occupation')}></input>
                    </div>

                    <div className='flex w-3/4'>
                        <div className='w-1/2'>
                        <label className='inputLabel'>Religion</label>
                        <select className='inputField w-1/2' id='religion' {...register('religion')}>
                            <option selected disabled hidden>Select Religion</option>
                            <option>Hindu</option>
                            <option>Muslim</option>
                            <option>Christian</option>
                        </select>
                        </div>
                        
                        <div className='w-1/2'>
                        <label className='inputLabel'>Marital Status</label>
                        <select className='inputField w-1/2' id='marital' {...register('marital')}>
                            <option selected disabled hidden>Enter Marital Status</option>
                            <option>Married</option>
                            <option>Unmarried</option>
                        </select>
                        </div>

                        <div className='w-1/2'>
                        <label className='inputLabel'>Blood Group</label>
                        <select className='inputField w-1/4' id='bloodGroup' {...register('bloodGroup')}>
                            <option selected disabled hidden>Group</option>
                            <option>A+</option>
                            <option>A-</option>
                        </select>
                        </div>

                    </div>
                    
                </div>
                    
                
                <div className='flex w-1/2 p-2'>
                    <div className='w-2/3'>
                        <label className='inputLabel'>Nationality</label>
                        <select className='inputField w-1/2' id='nationality' {...register('nationality')}>
                            <option>Indian</option>
                            <option>German</option>
                        </select>
                    </div>
                </div>
                

            </div>
        </div>

        <div className='buttonDiv flex justify-end'>
            <div className='button1'>
                <button className='bg-slate-300 py-2 px-5 mr-10 text-red-600 rounded-md'>CANCEL</button>
            </div>

            <div className='button2'>
                <button className='bg-green-700 py-2 px-5 text-white rounded-md' type='submit'>SUBMIT</button>
            </div>
        </div>
        </form>
    </div>
    </>
  )
}

export default Form
