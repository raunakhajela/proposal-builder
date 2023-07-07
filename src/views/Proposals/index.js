
import {DocumentPlusIcon} from  '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import NewProposal from './addProposal'
import dataControllers from '../../api/user'
import { dateString } from '../../Utils'
import { NavLink } from 'react-router-dom'
   function Proposal() {
    const[addproposal,setProposal] = useState(false)
    const[data,setdata] = useState([])
    useEffect(()=>{
     dataControllers.ProposalList().then((res)=>{
      setdata(res.data.proposal);
     })
    },[])
    return (
      <div className="px-4 py-10">

        {addproposal?<> <NewProposal onshow = {()=>setProposal(false)}/></>:<><div className="mx-auto max-w-7xl px-4 text-center lg:px-6">
          <ul
            className="mx-auto   grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
           
              <li className=" rounded-xl border border-slate-300">
               <div className="bg-slate-600 rounded-t-xl py-10 flex justify-center">
                <DocumentPlusIcon onClick={()=>setProposal(true)} className='h-10 w-10 text-white cursor-pointer'/>
               </div>
               <div className="bg-slate-400 py-3">
               Create A Blank Proposal 
               </div>
               <div className="h-auto  px-3 py-3 text-left"> 
                 <p className='text-sm'><strong className='text-md'>Created</strong> :  </p>
                 <p className='text-sm'><strong>Sections included</strong> : </p>
               </div>
                
              
              </li>
              {data&&data.map((p)=>(
                 <li className=" rounded-xl border border-slate-300">
                 <div className="bg-slate-800 rounded-t-xl py-10 flex justify-center">
                <NavLink to={`../proposal/:${1233}`}><DocumentPlusIcon  className='h-10 w-10 text-white cursor-pointer'/></NavLink>  
                 </div>
                 <div className="bg-slate-400 py-3">
                 {p.title} 
                 </div>
                 <div className="h-auto  px-3 py-3 text-left"> 
                   <p className='text-sm'><strong className='text-md'>Created</strong> : {dateString(p.exdate)} </p>
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