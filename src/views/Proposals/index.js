
import {DocumentPlusIcon} from  '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import NewProposal from './addProposal'
import dataControllers from '../../api/user'

const people = [
    {
      name: 'Leonard Krasner',
      role: 'Senior Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      twitterUrl: '#',
      linkedinUrl: '#',
    }
    // More people...
  ]
   function Proposal() {
    const[addproposal,setProposal] = useState(false)

    useEffect(()=>{
     
    })
    return (
      <div className="px-4 py-10">
       
        {addproposal?<> <NewProposal onshow = {()=>setProposal(false)}/></>:<><div className="mx-auto max-w-7xl px-4 text-center lg:px-6">
          <ul
            role="list"
            className="mx-auto   grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
            {people.map((person) => (
              <li key={person.name} className=" rounded-xl border border-slate-300">
               <div className="bg-slate-800 rounded-t-xl py-10 flex justify-center">
                <DocumentPlusIcon onClick={()=>setProposal(true)} className='h-10 w-10 text-white cursor-pointer'/>
               </div>
               <div className="bg-slate-400 py-3">
               Create A Blank Proposal 
               </div>
               <div className="h-auto  px-3 py-3 text-left"> 
                 <p className='text-sm'><strong className='text-md'>Created</strong> : 18 jun 2023 </p>
                 <p className='text-sm'><strong>Sections included</strong> : The element ul has an implicit role of list. Defining this explicitly </p>
               </div>
                
              
              </li>
            ))}
          </ul>
        </div></>}
        
      </div>
    )
  }
  
  
  export default Proposal