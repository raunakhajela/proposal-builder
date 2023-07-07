import JoditEditor from 'jodit-react'
import React from 'react'
function NewSection() {
  return (
    <div className='sec_add p-4'>
  <p className='text-2xl py-4'>Add Yor Proposal</p>
  <JoditEditor/>
  <div className='flex justify-end'>
    <button 
    className="rounded-md mt-4 bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
    
    >Save</button>

  </div>
    </div>
  )
}

export default NewSection