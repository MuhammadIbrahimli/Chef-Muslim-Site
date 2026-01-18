import React, { useState, useEffect } from 'react'

function Navbar({ t, changeLanguage, language }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar')
      if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)'
      } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)'
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLangDropdownOpen && !event.target.closest('.lang-dropdown')) {
        setIsLangDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isLangDropdownOpen])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const element = document.getElementById(targetId)
    if (element) {
      const offsetTop = element.offsetTop - 70
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <span className="logo-text">Chef Muslim</span>
            <span className="logo-subtitle">{t('logo.subtitle')}</span>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, 'home')}>
                {t('nav.home')}
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>
                {t('nav.about')}
              </a>
            </li>
            <li>
              <a href="#menu" className="nav-link" onClick={(e) => handleNavClick(e, 'menu')}>
                {t('nav.menu')}
              </a>
            </li>
            <li>
              <a href="#ai-assistant" className="nav-link" onClick={(e) => handleNavClick(e, 'ai-assistant')}>
                {t('nav.aiAssistant')}
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact')}>
                {t('nav.contact')}
              </a>
            </li>
          </ul>
          <div className="language-selector">
            <div className="lang-dropdown">
              <button
                className="lang-dropdown-toggle"
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                aria-label={`${language === 'ru' ? 'Русский' : language === 'az' ? 'Azərbaycan' : 'English'} language`}
              >
                <span className="lang-flag">
                  {language === 'ru' ? '🇷🇺' : language === 'az' ? '🇦🇿' : '🇬🇧'}
                </span>
                <svg className="lang-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 4l4 4 4-4" />
                </svg>
              </button>
              {isLangDropdownOpen && (
                <div className="lang-dropdown-menu">
                  <button
                    className={`lang-dropdown-item ${language === 'az' ? 'active' : ''}`}
                    onClick={() => {
                      changeLanguage('az')
                      setIsLangDropdownOpen(false)
                    }}
                  >
                    <span>Azərbaycan</span>
                  </button>
                  <button
                    className={`lang-dropdown-item ${language === 'ru' ? 'active' : ''}`}
                    onClick={() => {
                      changeLanguage('ru')
                      setIsLangDropdownOpen(false)
                    }}
                  >
                    <span>Русский</span>
                  </button>
                  <button
                    className={`lang-dropdown-item ${language === 'en' ? 'active' : ''}`}
                    onClick={() => {
                      changeLanguage('en')
                      setIsLangDropdownOpen(false)
                    }}
                  >
                    <span>English</span>
                  </button>
                </div>
              )}
            </div>
          </div>
          <button
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

