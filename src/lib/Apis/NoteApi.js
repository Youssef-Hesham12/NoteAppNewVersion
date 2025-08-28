import { NoteApi } from "../constans/MainApi";




 
   
 export async function  addNoteApi(title,content){

     return NoteApi.post("",{
        title:title,
        content:content
      },{headers:{token:`3b8ny__${localStorage.getItem("token")}`}}).then((res)=>{
        return res
      }).catch((err)=>{
        throw err
      })
       

   }
 export async function  getAllNoteApi(){

     return NoteApi.get("",{headers:{token:`3b8ny__${localStorage.getItem("token")}`}}).then((res)=>{
        return res
      }).catch((err)=>{
        throw err
      })
       

   }
 export async function  deleteNoteApi(id){

     return NoteApi.delete(`/${id}`,{headers:{token:`3b8ny__${localStorage.getItem("token")}`}}).then((res)=>{
        return res
      }).catch((err)=>{
        throw err
      })
       

   }
 export async function  updateNoteApi(title,content,id){

     return NoteApi.put(`/${id}`,{
        title:title,
        content:content
     },{headers:{token:`3b8ny__${localStorage.getItem("token")}`}}).then((res)=>{
        return res
      }).catch((err)=>{
        throw err
      })
       

   }


