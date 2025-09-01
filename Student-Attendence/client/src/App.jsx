import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Nav'
import { Route, Router, Routes } from 'react-router-dom'

import Homepage from './page/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <Navbar />
      <Routes>
        <Route path='/'><Homepage /></Route>
      </Routes>
   </>
  )
}

export default App
