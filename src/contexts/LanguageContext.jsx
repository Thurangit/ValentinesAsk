import { createContext, useContext, useState, useEffect } from 'react'

const STORAGE_KEY = 'st-valentin-lang'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return null
    return window.localStorage.getItem(STORAGE_KEY) || null
  })

  useEffect(() => {
    if (lang) window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const setLang = (value) => setLangState(value)

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
