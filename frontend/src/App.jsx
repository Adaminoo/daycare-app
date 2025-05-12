import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Bio from './pages/Bio'
import Faq from './pages/FAQ'
import Contact from './pages/Contact'

function App() {



  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/bio' element={<Bio />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App
