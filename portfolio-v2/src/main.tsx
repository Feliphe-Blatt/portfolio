import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Inicializa AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
})

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
