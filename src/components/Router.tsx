import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Experience from './Experience'

export default function Router (){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/experiencia" element={<Experience />} />
                </Routes> 
            </BrowserRouter>
        </>
    )
}