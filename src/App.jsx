import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RestProfile from './components/restaurant/RestProfile';
import Orders from './components/Orders/Orders';
import Menu from './components/Menus/menu'
import Logs from './components/Login/Logs';
import Login from './components/Login/Signup';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RestProfile />} />
          <Route path='/dashboard/order'element={<Orders />} />
          <Route path='/dashboard/menu' element={<Menu/>} />
          <Route path='/signup' element={<Logs />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



