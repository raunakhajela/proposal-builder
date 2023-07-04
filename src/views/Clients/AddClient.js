import React, { useState } from 'react'
import dataControllers from '../../api/user'
import countryList from '../../api/country'
import { useNavigate } from 'react-router-dom'
function AddClient() {
  const navigate = useNavigate()
  const initialState = {
    first_name:"",
     last_name:"",
     email:"",
     telephone:"",
     currency:"",
     proposal_language:"",
     business_name:"",
     web_url:"",
     role:"",
     address:"",
     city:"",
     state:"",
     country:"",
     notes:""
  }
  const[data,setData] = useState(initialState)


  const inputHandler = (e)=>{
    const{name,value} = e.target
    setData({...data,[name]:value})
    console.log(data);
  }

const submitForm = (e)=>{
  e.preventDefault()
dataControllers.CreateClient(data).then((res)=>{
 setData(initialState)
 navigate("../clients")
})
 

}


  return (
    <div className='px-6 '>
     <form onSubmit={submitForm}>
      <div className="space-y-12">
     
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name <span className='text-gray-400'>[Used in client correspondence]</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  onChange={inputHandler}
                  name="first_name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name <span className='text-gray-400'>[Don't forget to add last name]</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last_name"
                  id="last-name"
                  onChange={inputHandler}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="business_name" className="block text-sm font-medium leading-6 text-gray-900">
                Businss Name  <span className='text-gray-400'>[Don't forget to add Businss name]</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="business_name"
                  id="business_name"
                  onChange={inputHandler}
                  autoComplete="business_name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  onChange={inputHandler}
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
                Role
              </label>
              <div className="mt-2">
                <input
                  id="role"
                  name="role"
                  onChange={inputHandler}
                  type="text"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="telephone" className="block text-sm font-medium leading-6 text-gray-900">
                Telephone
              </label>
              <div className="mt-2">
                <input
                  id="telephone"
                  name="telephone"
                  onChange={inputHandler}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
           

            <div className="sm:col-span-3">
              <label htmlFor="currency" className="block text-sm font-medium leading-6 text-gray-900">
                Currency{data.currency}
              </label>
              <div className="mt-2">
                <select
                  id="currency"
                  name="currency"
                   onChange={inputHandler}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    <option value="">Select</option>
                  <option value="$">United States $</option>
                  <option value="₹">India ₹</option>
                  
                </select>
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="Proposal" className="block text-sm font-medium leading-6 text-gray-900">
              Proposal language
              </label>
              <div className="mt-2">
                <select
                  id="Proposal"
                  name="proposal_language"
                   onChange={inputHandler}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    <option value="">Select</option>
                  <option value="english">English </option>
                 
                  
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address"
                  onChange={inputHandler}
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  onChange={inputHandler}
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="state"
                  onChange={inputHandler}

                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
              Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                   onChange={inputHandler}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    <option value="">Select</option>
                    {countryList.map((c,index)=>(
                    <option key={index} value={c.name}>{c.name} </option>
                    ))}
                  
                 
                  
                </select>
              </div>
            </div>

            <div className="sm:col-span-6">
            <label htmlFor="company-website" className="block text-sm font-medium leading-6 text-gray-900">
        Company Website
      </label>
      <div className="mt-2 flex rounded-md shadow-sm">
        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
          http://
        </span>
        <input
          type="text"
          name="web_url"
          onChange={inputHandler}
          id="company-website"
          className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
          placeholder="www.example.com"
        />
      </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                Notes
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  onChange={inputHandler}
                  name="notes"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

      
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
        >
          Save
        </button>
      </div>
    </form>
    </div>
  )
}

export default AddClient