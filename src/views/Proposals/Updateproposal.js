import React, { useState, useRef, useEffect } from 'react'
import JoditEditor from "jodit-react";
import dataControllers from '../../api/user';
import { useParams } from 'react-router-dom';


function Updateproposal() {
  const [data, setData] = useState(null)
  const prams = useParams()
  const [formValues, setFormValues] = useState([{ title: "", content: "" }])
  const editor = useRef(null)
  let handleChange = (newcontent, i) => {
    // let newFormValues = [...formValues];
    // newFormValues[i]["content"] = newcontent;
    // setFormValues(newFormValues);
  }
  const { id } = prams
  console.log(id);

  const getproposal = (_id) => {
    dataControllers.priviewProposal(_id).then((res) => {
      setData(res.data.htmldata);
    })
  }
  useEffect(() => {
    getproposal(id)
  }, [])
  return (
    <div className='p-4'>
      {data ? <>
        {data.map((j, index) => (
          <div className='mb-4' key={index}>
            <JoditEditor ref={editor} value={j.content} onChange={newcontent => handleChange(newcontent, index)} />
          </div>
        ))}
        <div className='flex justify-end'>
          <button
            className="rounded-md mt-4 bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"

          >Update Proposal</button>

        </div>
      </> : <>Loading</>}
    </div>
  )
}

export default Updateproposal