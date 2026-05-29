import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Experience from '../pages/Experience'

export default function Router (){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/experiencia" element={<Experience />} />
                </Routes> 
            </BrowserRouter>
        </>
    )
}