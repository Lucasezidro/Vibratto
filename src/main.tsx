import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import InstrumentMusic from './pages/InstrumentMusic'
import Learn from './pages/Learn'
import Artist from './pages/artist'
import Recomendations from './pages/Recomendations'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/instrumentMusic' element={<InstrumentMusic />} />
          <Route path='/learn' element={<Learn />} />
          <Route path='/artist' element={<Artist />} />
          <Route path='/recomendations' element={<Recomendations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
