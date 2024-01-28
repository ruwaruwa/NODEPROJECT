import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateNote() {
    const [title,settitle]=useState(' ')
    const [description,setdescription]=useState(' ')
const navigate=useNavigate()
    //
    const params=useParams()

    const getSingledata=()=>{

       axios.get(`http://localhost:1000/note/get/${params.id}`).then((response)=>{
        settitle(response.data[0].title),
        setdescription(response.data[0].description)
    console.log(response.data)
       }) .catch((error)=>{
    console.log(error)
       })
    }
    //update
    const updateNote=()=>{
        axios.put(`http://localhost:1000/note/update/${params.id}`,{
            'title':title,
            'description':description
        }).then((response)=>{
            alert('update was successful ')
       navigate('/')
        }).catch((error)=>{
            console.log(error)
        })
    }
    //delete
    
    useEffect(()=>{
getSingledata()
        document.body.style.backgroundColor ="transparent"
    },[])
    
  return (
    <div>
       <div >
    <Header/>

    <div className=' rounded-lg shadow-lg box-shadow shadow-black [#E64421] w-[400px] h-[400px] bg-rose-300 ml-[600px] mt-[30px]'>
    <h1 className='text-3xl ml-10 text-white pt-2'>Update Note</h1>
        <form >
            <div className=' px-8 p-8'>
            <div>
                    <label className='text-2xl'>Enter title</label><br></br>
                    <input value={title}  onChange={(event)=>settitle(event.target.value)} type='text' placeholder='Enter title' className='p-3 px-6 pt-2 border-none' />
                </div>
                <label className='text-2xl'>Enter description</label><br></br>
                <input value={description}  onChange={(event)=>setdescription(event.target.value)} type='text' placeholder='Enter description' className='p-8 px-10' />


              
            </div>
        </form>
        <div className='flex justify-between px-4 mt-[x] pt-10'>

            <button onClick={updateNote} className='bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg'>Update</button>
        </div>
    </div>
</div>
    </div>
  )
}
