
import { DocumentPlusIcon, DocumentTextIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import NewProposal from './addProposal'
import dataControllers from '../../api/user'
import { SectionsIncluded, dateString } from '../../utils'
import { NavLink } from 'react-router-dom'
function Proposal() {
  const [addproposal, setProposal] = useState(false)
  const [data, setdata] = useState([])
  const getproposalList = () => {
    dataControllers.ProposalList().then((res) => {
      setdata(res.data.proposal);
    })
  }
  useEffect(() => {
    getproposalList();
  }, [])
  return (
    <div className="px-4 py-10">

      {addproposal ? <> <NewProposal onshow={() => {
        setProposal(false)
        getproposalList()
      }} /></> : <><div className="mx-auto max-w-7xl px-4 text-center lg:px-6">
        <ul
          className="mx-auto   grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >

          <li className=" rounded-xl border border-slate-300">
            <div className="bg-slate-600 rounded-t-xl  py-10 flex justify-center">

              <DocumentPlusIcon onClick={() => setProposal(true)} className='h-10 w-10 text-white cursor-pointer' />
            </div>
            <div className="bg-slate-400 py-3">
              Create A Blank Proposal
            </div>
            <div className="h-auto  px-3 py-3 text-left">
              <p className='text-sm'><strong className='text-md'>Created</strong> :  </p>
              <p className='text-sm'><strong>Sections included</strong> : </p>
            </div>


          </li>
          {data && data.map((p, index) => (
            <li key={index} className=" rounded-xl border border-slate-300">
              <div className="bg-slate-800 rounded-t-xl py-10 relative flex justify-center">
                <div className=' absolute top-0 right-0 p-2 '>
                  <NavLink to={`../preview/${p._id}`} target='blanck_page'><GlobeAmericasIcon className='h-5 w-5 cursor-pointer text-slate-400 hover:text-white' /></NavLink>

                </div>
                <NavLink to={`../proposal/${p._id}`}><DocumentTextIcon className='h-10 w-10 text-white cursor-pointer' /></NavLink>
              </div>
              <div className="bg-slate-400 py-3 uppercase">
                {p.title}
              </div>
              <div className="h-auto  px-3 py-3 text-left">
                <p className='text-sm'><strong className='text-md'>Created</strong> : {dateString(p.date)} </p>
                <p className='text-sm'><strong className='text-md'>Expire</strong> : {dateString(p.exdate)} </p>
                <p className='text-sm'><strong>Sections included</strong> : <span className='text-sm'>{SectionsIncluded(p.proposal)}</span></p>
              </div>


            </li>
          ))}


        </ul>
      </div></>}

    </div>
  )
}


export default Proposal