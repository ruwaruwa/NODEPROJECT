import React from 'react'
import { Link } from 'react-router-dom'

function Note(props) {
  return (
    <div className='f w-[300px]  h-[300px] bg-white p-2  rounded border-2 border-gray-300'>
<div>
<h1 className='font-semibold ,b-4 text-3xl'>{props.title}</h1>
      <p>{props.description}</p>
</div>
<div className='mt-[180px] ml-[140px] flex gap-4'  >
<Link to={`/update/${props.id}`}> <i class="fa-solid fa-pen-to-square text-3xl text-green-600"></i></Link>
 <Link to={''}> <i onClick={props.handleDelete} class="fa-solid fa-trash text-3xl text-red-600" ></i>
 </Link>
 {/* <button  className='text-4xl bg-red-600 hover:bg-green-600 px-2 rounded-lg text-white p'>delete</button> */}

</div>
    </div>
  )
}

export default Note