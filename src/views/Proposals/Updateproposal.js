import React,{useState,useRef} from 'react'
import JoditEditor from "jodit-react";

function Updateproposal() {
const [formValues, setFormValues] = useState([{ title: "base Proposal", content : ""}])
const editor = useRef(null)
const{content} = formValues
let handleChange = (newcontent) => {

    let newFormValues = [...formValues];
    // newFormValues[i]["content"] = newcontent;
    setFormValues(newFormValues);
  }

  
  return (
    <div>
        <JoditEditor  ref={editor} value={content} onChange={newcontent=>handleChange(newcontent)}/>
    </div>
  )
}

export default Updateproposal