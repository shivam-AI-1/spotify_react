import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sidebar from './Sidebar.jsx'
import Arrowdown from './arrowdown.jsx'
import Images from './images.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sidebar />
    <Arrowdown />
    <Images />
  </StrictMode>,
)
