import React from 'react'
import { Link } from 'react-router-dom'
 export default function Header() {
  return (
    <div>
        <div className='bg-red-500 p-4 px-5 flex justify-between'>
        <Link to='/'> <h1 className='font-bold text-white text-3xl'>Nooty</h1></Link> 
         <Link to={'/addnode'}> <button className='bg-white px-8 py-3 rounded'>Add note</button></Link>
        </div>
    </div>
  )
}

