import React from 'react'
import Home from './Home'
import { Routes , Route} from 'react-router-dom'
import About from './About'
import Work from './Work'
import Contact from './Contact'
import Services from './Services'
import Navbar from './Navbar'
import Footer from './Footer'
function App() {
  return (
    <>

    <Navbar/>
    <Routes>
      <Route path='/Protfilo_Web/' element={<Home/>} />
      <Route path='/Protfilo_Web/about' element={<About/>} />
      <Route path='/Protfilo_Web/work' element={<Work/>} />
      <Route path='/Protfilo_Web/contact' element={<Contact/>} />
      <Route path='/Protfilo_Web/services' element={<Services/>} />
    </Routes>
    <Footer/>
   
    
    </>
  )
}

export default App