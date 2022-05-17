import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RestProfile from './components/restaurant/RestProfile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RestProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
