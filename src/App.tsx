import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './pages/Contact'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
