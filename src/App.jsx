import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TJMelancolio from './pages/TJMelancolio'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tj-melancolio" element={<TJMelancolio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
