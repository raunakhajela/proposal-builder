import React, { useState } from 'react'
import ClientData from './Clients'
import AddClient from './AddClient'

function Client() {
const[client,setClient] = useState(false)
const ClientForm = ()=>{
    setClient(true)
}
const ClientAll = ()=>{
    setClient(false)
}
  return (
    <div>
        <div className=' w-full  h-20 py-4 px-4 gap-2   flex justify-end'>
         <button onClick={ClientForm} className='bg-gray-900 rounded-md p-1 px-2 m-1 text-white text-sm font-semi-bold hover:bg-gray-700'>Add Client</button> <button onClick={ClientAll} className='bg-gray-900 rounded-md p-1 px-2 m-1 text-white text-sm font-semi-bold hover:bg-gray-700'>ALL Client</button>
        </div>
        
{client?<AddClient/>:<ClientData/>}
    </div>
  )
}

export default Client