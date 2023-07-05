import React, { useEffect, useState } from 'react'
import {DocumentTextIcon,TrashIcon,PencilSquareIcon} from '@heroicons/react/24/outline'
import dataControllers from '../../api/user'
import { NavLink } from 'react-router-dom'
function ClientData() {
const[clientData,setClientData] = useState([])
const deleteClient=(_id)=>{
const confirm = window.confirm("Are you sure you want to delete this Client")
if(confirm){
  dataControllers.deleteClient(_id).then((res)=>{
    getClientList()
  })
}

}

const getClientList=()=>{
  dataControllers.ListClient().then((res)=>{
    setClientData(res.data.clients)
   })
}


  useEffect(()=>{
    getClientList()
  },[])
  return (
    <div>
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 uppercase pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                  Client  Name
                  </th>
                  <th scope="col" className="px-3 uppercase py-3.5 text-left text-sm font-semibold text-gray-900">
                    Businss
                  </th>
                  <th scope="col" className="px-3 uppercase py-3.5 text-left text-sm font-semibold text-gray-900">
                    Email
                  </th>
                 
                  <th className="px-3 uppercase py-3.5 text-left text-sm font-semibold text-gray-900">
                 Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {clientData.map((client,index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {client.first_name}
                      {client.last_name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{client.business_name}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{client.email}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                     <div className='flex gap-4'>
                     <DocumentTextIcon className='w-5 h-5 cursor-pointer'/> 

                     <NavLink to={`../client/${client._id}`} ><PencilSquareIcon className='w-5 h-5 cursor-pointer'/></NavLink>
                     <TrashIcon onClick={()=>deleteClient(client._id)} className='w-5 h-5 text-rose-400 cursor-pointer'/>
                     </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ClientData