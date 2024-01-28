import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Addnotepage from './pages/Addnotepage'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UpdateNote from './pages/UpdateNote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/addnode' element={<Addnotepage/>}/>
     <Route path='/update/:id' element={<UpdateNote/>}/>
      {/* <Header />
      <Addnotepage /> */}
</Routes>

    </>
  )
}

export default App
