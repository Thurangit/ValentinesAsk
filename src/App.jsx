import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TJMelancolio from './pages/TJMelancolio'
import NotreHistoire from './pages/NotreHistoire'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/melancolio" element={<TJMelancolio />} />
        <Route path="/notre-histoire" element={<NotreHistoire />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
