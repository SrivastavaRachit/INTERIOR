import React from 'react'

import { Routes, Route } from 'react-router-dom'

// PAGES
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Blog from './pages/Blog/Blog'
import Project from './pages/Project/Project'

// SERVICES PAGES
import HomeDesign from './pages/HomeDesign/HomeDesign'
import OfficeDesign from './pages/OfficeDesign/OfficeDesign'
import CustomFurniture from './pages/CustomFurniture/CustomFurniture'
import Consultations from './pages/Consultations/Consultations'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/project' element={<Project />} />

        <Route path='/service/home-design' element={<HomeDesign />} />
        <Route path='/service/office-design' element={<OfficeDesign />} />
        <Route path='/service/custom-furniture' element={<CustomFurniture />} />
        <Route path='/service/consultations' element={<Consultations />} />

      </Routes>
    </>
  )
}

export default App