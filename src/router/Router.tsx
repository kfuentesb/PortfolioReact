import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Experience from '../pages/Experience'
import Contact from '../pages/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiencia" element={<Experience />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}