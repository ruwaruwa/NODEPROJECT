import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Addnotepage() {
    const [title,settitle]=useState(' ')
    const [description,setdescription]=useState(' ')

    //use nafigate
  const navigate = useNavigate()

//jhfdjjd djh
//use api
const handleregister=(e)=>{
    e.preventDefault();
   axios.post("http://localhost:1000/note/create",{
    "title":title,
    "description":description
   }) .then((response)=>{
    alert("data has been created successfully")
   }) .catch((error)=>{
console.log(error)
   })
}
    useEffect(()=>{
        document.body.style.backgroundColor ="gray"
    },[])
    return (
        <div className='4'>
            <Header/>
            <div >
    

                <div className=' rounded-lg shadow-lg box-shadow shadow-black [#E64421] w-[400px] h-[400px] bg-blue-500 ml-[600px] mt-[30px]'>
                    <form >
                        <div className=' px-8 p-8'>
                        <div>
                                <label className='text-2xl'>Enter title</label><br></br>
                                <input value={title}  onChange={(event)=>settitle(event.target.value)} type='text' placeholder='Enter title' className='p-3 px-6 pt-2 border-none' />
                            </div>
                            <label className='text-2xl'>Enter description</label><br></br>
                            <input value={description}  onChange={(event)=>setdescription(event.target.value)} type='text' placeholder='Enter description' className='p-8 px-8' />


                          
                        </div>
                    </form>
                    <div className='flex justify-between px-4 mt-[x] pt-10'>
                        {/* <button className=' bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg'>close</button> */}
                        <button onClick={handleregister} className='bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg'>save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addnotepage