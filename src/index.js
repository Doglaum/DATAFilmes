import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './global.css'
import Details from './pages/details'
import Home from './pages/home'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:id" element={<Details />} />
    </Routes>
  </BrowserRouter>
)
