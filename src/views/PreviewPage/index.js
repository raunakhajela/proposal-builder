import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import dataControllers from '../../api/user'

function Preview() {
    const prams = useParams()
    const[htmldata,setHtmldata] = useState([])
    useEffect(()=>{
    dataControllers.priviewProposal(prams.id).then((res)=>{
        setHtmldata(res.data.htmldata);
    }) 
    })
  return (
    <div className='preview_Proposal p-4'>


    {htmldata?htmldata.map((c,index)=>(
        <div>
            <p className='text-2xl font-semibold'>{c.title}</p>
             <div key={index} dangerouslySetInnerHTML={{__html: c.content}}></div>
        </div>
    )):"lodaing...."}
    </div>
  )
}

export default Preview