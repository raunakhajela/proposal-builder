import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import dataControllers from '../../api/user'
import { dateString } from '../../Utils'

function ViewClient() {
const [clientdata,setClientData] = useState({})
const [proposaldata,setProposalData] = useState({})
const prams = useParams()
const {id} = prams


const getClient = ()=>{
dataControllers.getClientDetails(id).then((res)=>{
  setClientData(res.data.client);
  setProposalData(res.data.proposals);
})
}
useEffect(()=>{
  getClient()
},[])

  return (
    <div className='p-4'>
     
        <div className="grid grid-cols-5 gap-4">
    <div className="col-span-5 md:col-span-2  bg-slate-200 rounded-sm">
    <div className='p-2 bg-slate-800 text-white'>
    Client details :
    </div>
    <div className='p-4'>
      {clientdata?<>
        <table className="table-auto">
  <thead>
    <tr>
    </tr>
  </thead>
  <tbody>
<tr>
<th className='text-left'>Client Name :</th>
<td>{clientdata.first_name} {clientdata.last_name}</td>
</tr>
<tr>
<th className='text-left'>Email ID :</th>
<td>{clientdata.email}</td>
</tr>
<tr>
<th className='text-left'>Telephone N0 :</th>
<td>{clientdata.telephone} </td>
</tr>
<tr>
<th className='text-left'>Currency :</th>
<td>{clientdata.currency}</td>
</tr>
<tr>
<th className='text-left'>proposal Language :</th>
<td>{clientdata.first_name}</td>
</tr>
<tr>
<th className='text-left'>Bussiness Name:</th>
<td>{clientdata.business_name}</td>
</tr>
<tr>
<th className='text-left'>Address :</th>
<td>{clientdata.address}</td>
</tr>
<tr>
<th className='text-left'>City :</th>
<td>{clientdata.city}</td>
</tr>
<tr>
<th className='text-left'>State :</th>
<td>{clientdata.state}</td>
</tr>
<tr>
<th className='text-left'>Country :</th>
<td>{clientdata.country}</td>
</tr>
<tr>
<th className='text-left'>Note :</th>
<td>{clientdata.notes}</td>
</tr>


  </tbody>
</table>
      </>:<>Loading..</>}
   
    </div>
    </div>
    <div className="col-span-5  md:col-span-3 md:col-start-3 bg-slate-200 rounded-sm">
    <div className='p-2 bg-slate-800 text-white'>
      Client Proposal :
    </div>
    <div className='p-4'>
    {proposaldata?<>
      <table className="table-auto">
  <thead>
    <tr>
    </tr>
  </thead>
  <tbody>
  <tr>
<th className='text-left'>Title :</th>
<td>{proposaldata.title}</td>
</tr>
  <tr>
<th className='text-left'>Create Date  :</th>
<td>{proposaldata.date }</td>
</tr>
  <tr>
<th className='text-left'>Expire Date :</th>
<td>{proposaldata.exdate }</td>
</tr>
  <tr>
<th className='text-left'>Client ID :</th>
<td>{proposaldata.clientid }</td>
</tr>
{proposaldata.proposal?<>
{proposaldata.proposal.map((p,i)=>(
    <tr key={i}>
    <th className='text-left'>Proposal {i+1} :</th>
    <td>{p.title }</td>
    </tr>
))}

</>:<></>}
  </tbody>
    </table>
    
    </>:"no"}
    </div>
      </div>
   </div>
   {/* <div className="grid grid-cols-5 gap-4 mt-4">
    <div className="col-span-5  md:col-span-3 md:col-start-1 bg-slate-200 rounded-sm">
    <div className='p-2 bg-slate-800 text-white'>
      Client Activity :
    </div>
    1
    </div>
    <div className="col-span-5 md:col-span-2  bg-slate-200 rounded-sm">
    <div className='p-2 bg-slate-800 text-white'>
      Client Sale :
    </div>
    1
    </div>
</div> */}
      

    </div>
  )
}

export default ViewClient