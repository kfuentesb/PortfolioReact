import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy} from 'react'
import Navbar from '../components/Navbar'

const Home = lazy(() => import('../pages/Home'))
const Experience = lazy(() => import('../pages/Experience'))

export default function Router (){
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/experiencia" element={<Experience />} />
                </Routes> 
            </BrowserRouter>
        </>
    )
}