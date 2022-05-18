import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RestProfile from './components/restaurant/RestProfile';
import Orders from './components/Orders/Orders';
import Menu from './components/Menus/menu'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RestProfile />} />
          <Route path='/dashboard/order'element={<Orders />} />
          <Route path='/menu' element={<Menu/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



