import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RestProfile from './components/restaurant/RestProfile';
import Orders from './components/Orders/Orders';
import Logs from './components/Login/Logs';
import Login from './components/Login/Signup';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RestProfile />} />
          <Route path='/signup' element={<Logs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard/order' element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



