
import React, { useState } from 'react'
import registerImg from "../../../assets/Authentication-bro.svg"
import { Link, Navigate, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod';

import { loginschema, schema } from '../../../lib/schema/authsc';
import { AythApi } from '../../../lib/constans/auth';
import { callApiLogin, callApiRegister } from '../../../lib/Apis/Auth';


   

export default function Login() {

  const [isloading, setisloading] = useState(false)
  const [error, seterror] = useState(null)
  const route=useNavigate()


  

 const {register,handleSubmit,watch,formState:{errors}}= useForm({mode:"onChange",resolver:zodResolver(loginschema)})

    

  function handellogin(data){
    console.log(data)
    setisloading(true)

    callApiLogin(data).then((res)=>{
      console.log("callll from register",res)
      localStorage.setItem("token",res.data.token)
      seterror(null)
      route("/")
     

    }).catch((err)=>{

      console.log("call from error register")
      seterror(err.response.data.msg)
    }).finally(()=>setisloading(false))
    
  }

  return (
   <>

   <div className=' flex flex-col  lg:flex-row  justify-around items-center w-full'>

    <div>
        <img src={registerImg} className='w-[300px]' alt="" />
    </div>

    <div  className='w-[90%] lg:w-[40%] py-10 px-12 lg:border-2 lg:border-[#1ebbcc55] rounded-lg '>
        <h1 className='text-black font-bold text-2xl text-center'>Sign Up</h1>

       
        <form onSubmit={handleSubmit(handellogin)} action="" className='mt-6'>
           
            <div className='mt-6'>
                <input {...register("email")} placeholder='Email' type="email" className='py-3 px-6 w-full bg-[#f7f7f7] rounded-lg' />
                <p className='text-red-600'>{errors.email?.message?errors.email?.message:""}</p>
            </div>
            <div className='mt-6'>
                <input {...register("password")} placeholder='Passowrd' type="password" className='py-3 px-6 w-full bg-[#f7f7f7] rounded-lg'/>
                <p className='text-red-600'>{errors.password?.message?errors.password?.message:""}</p>
            </div>
          

        
           


            <button className='rounded-2xl py-3 bg-[#92E3A9] w-full mt-6 cursor-pointer hover:bg-green-400'>

              {isloading?<><span class="loader"></span></>:"Sign in"}
              
              
              </button>
              <p className='text-red-500'>{error}</p>
            <Link to={"/register"} className='underline'>Sign up</Link>
        </form>
        

    </div>

   </div>


   </>
  )
}
