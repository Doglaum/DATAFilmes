import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './global.css'
import Details from './pages/details'
import Global from './pages/home/global'
import Index from './pages/index'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/search" element={<Global/>}/>
    </Routes>
  </BrowserRouter>
)
