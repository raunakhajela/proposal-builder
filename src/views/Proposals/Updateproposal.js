import React,{useState,useRef, useEffect} from 'react'
import JoditEditor from "jodit-react";
import dataControllers from '../../api/user';
import { useParams } from 'react-router-dom';


function Updateproposal() {
const[data,setData] = useState(null)
const prams= useParams()
const [formValues, setFormValues] = useState([{ title: "base Proposal", content : "<h1>husain dummy text</h1>"}])
const editor = useRef(null)
const{content} = formValues[0]
let handleChange = (newcontent) => {
    setFormValues([{title: "base Proposal",content:newcontent}]);
  }
const{id} = prams
console.log(id);

const getproposal = (_id)=>{
  dataControllers.priviewProposal(_id).then((res)=>{
    setData(res.data.htmldata);
  })
}
useEffect(()=>{
  getproposal(id)
},[])
  return (
    <div>
      {data?<>
      {data.map((j,index)=>(
      <JoditEditor key={index}  ref={editor} value={content}onChange={newcontent=>handleChange(newcontent)}/>
      ))}
      </>:<>Loading</>}
  
    </div>
  )
}

export default Updateproposal