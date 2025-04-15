import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <nav className='bg-primary d-flex flex-row justify-content-between align-items-center mx-auto mt-3 px-4 rounded-4 container'>
        <Link to="/" id="home" className='my-2 fs-1 link-underline link-underline-opacity-0 text-light'>linCalc()</Link>
        <Link to="/about" className='link-underline link-underline-opacity-0 text-light fs-5'>About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
