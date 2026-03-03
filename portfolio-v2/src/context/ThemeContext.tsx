import { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  isDark: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Inicializa com preferência do sistema ou localStorage
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme | null
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme

    // Detecta preferência do sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    // Atualiza o atributo data-theme no document
    document.documentElement.setAttribute('data-theme', theme)
    // Salva preferência no localStorage
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
