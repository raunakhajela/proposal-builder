import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import {TrashIcon} from '@heroicons/react/24/outline'
import { useParams } from "react-router-dom";
import dataControllers from "../../api/user";

function NewSection() {
  const prams = useParams()
const [formValues, setFormValues] = useState([{ title: "base Proposal", content : ""}])
const editor = useRef(null)
const{content} = formValues


let handleChange = (newcontent, i) => {

  let newFormValues = [...formValues];
  newFormValues[i]["content"] = newcontent;
  setFormValues(newFormValues);
}

const submitContent =()=>{
  const prm_id = prams.id
dataControllers.updateProposal(prm_id,{ "proposal":formValues}).then((res)=>{
  console.log(res);
})
console.log(formValues);
}

const addFormFields = (str) => {
    setFormValues([...formValues, { title: str, content : ""}])
 }

let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
}


  return (
<div className='sec_add p-4'>
{formValues.map((p,index)=>(
  <div>
    <div className="flex justify-between py-4 px-2">
<div class=" flex max-w-md gap-x-4">
      <p className="uppercase font-semibold" >{p.title}</p>
</div>
<div class="p-2">
  {index?<TrashIcon onClick={() => removeFormFields(index)} className='w-5 h-5 text-slate-300 hover:text-rose-400 cursor-pointer'/>:null}

</div>

</div>
<JoditEditor  ref={editor} value={content} onChange={newcontent=>handleChange(newcontent,index)}/>
<div className='cursor-pointer p-4 text-center text-sm font-semibold text-blue-500'>
 <button  onClick={()=>addFormFields("base Proposal")} className='hover:bg-slate-300 rounded-sm bg-slate-100 p-2'>+ Add base Section </button>
 <button  onClick={()=>addFormFields("Price Proposal")} className='hover:bg-slate-300 rounded-sm bg-slate-100 p-2'>+ Add  price Section </button>
 <button  onClick={()=>addFormFields("flow Proposal")} className='hover:bg-slate-300 rounded-sm bg-slate-100 p-2'>+ Add flow Section  </button>
</div>

</div>
))}
<div className='flex justify-end'>
  <button 
  onClick={submitContent}
  className="rounded-md mt-4 bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
  
  >Save</button>

</div>
  </div>



  )
}

export default NewSection