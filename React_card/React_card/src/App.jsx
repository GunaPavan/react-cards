import React from 'react'
import Header from './components/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import CardPage from './Pages/CardPage'
export default function App() {
  return (
    <>
    <BrowserRouter> 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cards' element={<CardPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
