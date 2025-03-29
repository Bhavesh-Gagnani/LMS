import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Course from './Pages/Course'
import Educator from './Pages/Educator'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


const App = () => {
  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/course' element = {<Course />}/>
        <Route path='/educator' element = {<Educator />}/>
        <Route path='/about' element = {<About />}/>
        <Route path='/contact' element = {<Contact />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
