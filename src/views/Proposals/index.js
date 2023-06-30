
import {DocumentPlusIcon} from  '@heroicons/react/24/outline'

const people = [
    {
      name: 'Leonard Krasner',
      role: 'Senior Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      twitterUrl: '#',
      linkedinUrl: '#',
    }
    // More people...
  ]
   function Proposal() {
    return (
      <div className="">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-6">
          <ul
            role="list"
            className="mx-auto   grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
            {people.map((person) => (
              <li key={person.name} className=" rounded-xl border border-slate-300">
               <div className="bg-blue-400 rounded-t-xl py-10 flex justify-center">
                <DocumentPlusIcon className='h-10 w-10 text-white'/>
               </div>
               <div className="bg-slate-400 py-3">
               Create A Blank Proposal 
               </div>
               <div className="h-10 text-left px-2"> 
                 <p className='text-sm'>Created:18 jun 2023 </p>
               </div>
                
              
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  
  
  export default Proposal