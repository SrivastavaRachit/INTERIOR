import React from 'react'

import { Routes, Route } from 'react-router-dom'

// PAGES
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Blog from './pages/Blog/Blog'
import Project from './pages/Project/Project'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </>
  )
}

export default App