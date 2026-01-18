import React from 'react'

function Hero({ t }) {
  const handleClick = (e, targetId) => {
    e.preventDefault()
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
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{t('hero.title')}</h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <div className="hero-buttons">
            <a href="#menu" className="btn btn-primary" onClick={(e) => handleClick(e, 'menu')}>
              {t('hero.btnMenu')}
            </a>
            <a href="#ai-assistant" className="btn btn-secondary" onClick={(e) => handleClick(e, 'ai-assistant')}>
              {t('hero.btnAI')}
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  )
}

export default Hero

