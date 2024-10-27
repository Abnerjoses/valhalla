import LandingPage from './pages/landing';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Navegacao() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}