import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { LanguageProvider } from './contexts/LanguageContext'
import App from './App.jsx'
import LanguagePicker from './components/LanguagePicker'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
      <LanguagePicker />
    </LanguageProvider>
  </StrictMode>,
)
