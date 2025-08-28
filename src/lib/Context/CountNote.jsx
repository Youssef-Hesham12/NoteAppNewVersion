import React, { createContext, useState } from 'react'


 export const CountNoteContext= createContext()
export default function CountNoteProvider({children}) {

    const [CountNote, setCountNote] = useState(0)
  return (
    <>

    <CountNoteContext.Provider value={{CountNote,setCountNote}}>

        {children}


    </CountNoteContext.Provider>



    
    </>
  )
}
