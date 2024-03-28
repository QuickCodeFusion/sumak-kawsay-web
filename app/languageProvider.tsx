'use client'
import { createContext, useContext, useEffect, useState } from 'react'

export const LanguageProvider = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    if (window) {
      const lang = window.navigator.language
      setLanguage(lang.split('-')[0])
    }
  }, [])

  return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
  )
}

interface LanguageContextType {
  language: string
  setLanguage: React.Dispatch<React.SetStateAction<string>>
}
export const LanguageContext = createContext<LanguageContextType | null>({
  language: 'en',
  setLanguage: () => {}
})

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
