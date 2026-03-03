import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/i18nContext'
import ErrorBoundary from './components/ErrorBoundary'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import './styles/theme.css'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          {/* Skip Navigation - WCAG 2.1 Level A */}
          <a href="#main-content" className="skip-link">
            Pular para o conteúdo principal
          </a>

          <div className="app">
            <Navbar />
            <main id="main-content" className="main-content">
              <ErrorBoundary>
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </ErrorBoundary>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
