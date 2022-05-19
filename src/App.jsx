import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RestProfile from './components/restaurant/RestProfile';
import Orders from './components/Orders/Orders';
import Menu from './components/Menus/menu'
import Logs from './components/Login/Logs';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import ClientReg from './components/client/ClientReg';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard/order'element={<Orders />} />
          <Route path='/dashboard/menu' element={<Menu/>} />
          <Route path='/signup' element={<Logs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/regclient' element={<ClientReg />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



