import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import RestProfile from './components/restaurant/RestProfile';
import Orders from './components/Orders/Orders';
import Menu from './components/Menus/menu'
import Logs from './components/Login/Logs';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import ClientReg from './components/client/ClientReg';
import { useApp } from './components/contexts/AppContext'
import NotFound from './components/NotFound';
import Cli from './components/client/CLient';
import Dashboard from './components/chart/chart';

function App() {
  const { isLoggedIn } = useApp()
  console.log(isLoggedIn);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={isLoggedIn?<Navigate replace to='/dashboard/overview' />:<Home />} />
          <Route path='/dashboard/order'element={
           isLoggedIn?<Orders />: <Navigate replace to='/login' />} />
          <Route path='/dashboard/menu' element={
          isLoggedIn?<Menu/>: <Navigate replace to='/login' />} />
          <Route path='/dashboard/clients' element={
          isLoggedIn?<Cli />: <Navigate replace to='/login' />} />
          <Route path='/dashboard/overview' element={
          isLoggedIn?<Dashboard />: <Navigate replace to='/login' />} />
          <Route path='/signup' element={<Logs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/regclient' element={<ClientReg />} />
          <Route path='/addrestaurant' element={<RestProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



