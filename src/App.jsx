import React, { useEffect } from 'react'
import { useLanguage } from './hooks/useLanguage'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import AIAssistant from './components/AIAssistant'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/App.css'

function App() {
  const { language, t, changeLanguage } = useLanguage()

  useEffect(() => {
    // Прокрутка наверх при загрузке страницы
    window.scrollTo(0, 0)
    
    // Если есть хэш в URL, прокручиваем к нужной секции
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        setTimeout(() => {
          const offsetTop = element.offsetTop - 70
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          })
        }, 100)
      }
    }
  }, [])

  return (
    <div className="App">
      <Navbar t={t} changeLanguage={changeLanguage} language={language} />
      <Hero t={t} />
      <About t={t} />
      <Menu t={t} />
      <AIAssistant t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  )
}

export default App

