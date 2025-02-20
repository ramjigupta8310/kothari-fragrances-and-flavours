import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Footer from './Pages/Footer'

function App() {
  return (
    <di>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </di>
  )
}

export default App
