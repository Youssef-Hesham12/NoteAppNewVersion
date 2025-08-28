import { AythApi } from "../constans/auth";



   export async function callApiRegister (data){

  return AythApi.post("/signUp",data).then((res)=>{
        return res
    }).catch((err)=>{

      throw err
        
    })

   }
   export async function callApiLogin(data){

  return AythApi.post("/signin",data).then((res)=>{
        return res
    }).catch((err)=>{

      throw err
        
    })

   }