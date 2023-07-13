import { useEffect, useState } from "react"
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import dataControllers from "../../api/user";
import { dateString, dateTostring } from "../../Utils";

function NewProposal({onshow}) {
    const initialState = {
            title:"",
            clientid:"",
            exdate:"",
            proposal:""    
    }
    const [data, setData] = useState(initialState);
    const [startDate, setStartDate] = useState();
    const[open,setOpen] = useState(false)
    const[clientData,setClientData] = useState([])

    console.log(startDate);

    const inputHandler = (e)=>{
        const{name,value} = e.target
        setData({...data,[name]:value})
        console.log(data);
      }
    const submitForm = (e)=>{
    e.preventDefault()
     dataControllers.addproposal(data).then(()=>{
        onshow()
     })
  
    }

    const getClientList=()=>{
        dataControllers.ListClient().then((res)=>{
          setClientData(res.data.clients)

         })
         console.log(clientData);
      }

    useEffect(()=>{
        getClientList()
    },[])

    return (
        <>
            <main className="lg:flex lg:min-h-full lg:flex-row-reverse lg:overflow-hidden">
                <section aria-labelledby="summary-heading" className="hidden w-full max-w-md flex-col bg-gray-50 lg:flex">
                    <div className="sticky bottom-0 flex-none bg-gray-50 p-6">
                    </div>
                </section>
                <section
                    aria-labelledby="payment-heading"
                    className="flex-auto overflow-y-auto px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-0"
                >


                    <div className="mx-auto max-w-lg lg:pt-3">

                       

                        <form onSubmit={submitForm} className="mt-6">
                            <div className="grid grid-cols-12 gap-x-4 gap-y-6">
                                <div className="col-span-full">
                                    <label htmlFor="client" className="block text-sm font-medium text-gray-700">
                                        Client
                                    </label>
                                    <div className="mt-1">
                                        <select
                                            id="location"
                                            onChange={inputHandler}
                                            name="clientid"
                                            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            defaultValue="Canada"
                                        >
                                            <option >Section</option>
                                            {clientData&&clientData.map((client,index)=>(
                                              <option value={client._id} key={index}>{client.first_name}</option>
                                            ))}
                                            
                                           
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
                                       Proposal Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            id="name-on-card"
                                            name="title"
                                            onChange={inputHandler}
                                            autoComplete="cc-name"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                           

                           
                            <button
          type="submit"
          className="rounded-md mt-4 bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
        >
          Next
        </button>
                           
                        </form>

                        <div className="relative mt-8">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-200" />
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-white px-4 text-sm font-medium text-gray-500">or</span>
                            </div>
                        </div>

                        <div className="space-y-5">
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            
          <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              onChange={(e)=>{
                if(e.target.checked){
                  setOpen(true)
                  setData({...data,exdate:startDate})
                }
                else{
                  setOpen(false)
                  setData({...data,exdate:""})
                }
              }}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-blue-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="comments" className="font-medium text-gray-900">
            Click to add Expiry Date
            </label>{' '}
            <span id="comments-description" className="text-gray-500">
              <span className="sr-only">Click to add Expiry Date  </span>{startDate? dateTostring(startDate.toString()):"no"}
            </span>
          </div>
        
        </div>
        {open?<DatePicker
      selected={startDate}
      onChange={(date) => {
        setStartDate(date)
        setData({...data,exdate:date})
        setOpen(false)  
        
      }}
      inline
    />:<></>}
        
        </div>
                        
                    </div>
                </section>

   
                
            </main>
        </>
    )
}

export default NewProposal