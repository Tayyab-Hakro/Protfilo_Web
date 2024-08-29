import React from 'react'
import Home from './Home'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import About from './About'
import Work from './Work'
import Contact from './Contact'
import Services from './Services'
import Navbar from './Navbar'
import Footer from './Footer'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/work' element={<Work/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/services' element={<Services/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App