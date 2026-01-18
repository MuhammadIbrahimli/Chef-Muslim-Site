import React from 'react'

function Footer({ t }) {
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
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Chef Muslim</h3>
            <p>{t('footer.tagline')}</p>
          </div>
          <div className="footer-section">
            <h4>{t('footer.navigation')}</h4>
            <ul>
              <li>
                <a href="#home" onClick={(e) => handleClick(e, 'home')}>
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleClick(e, 'about')}>
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => handleClick(e, 'menu')}>
                  {t('nav.menu')}
                </a>
              </li>
              <li>
                <a href="#ai-assistant" onClick={(e) => handleClick(e, 'ai-assistant')}>
                  {t('nav.aiAssistant')}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{t('footer.contacts')}</h4>
            <ul>
              <li>{t('contact.phone')}: +994 516693999</li>
              <li>{t('contact.address')}: 2, Sumgait Boulevard Cristal, Sumqayit 5007</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{t('footer.social')}</h4>
            <div className="social-links">
              <a href="https://www.instagram.com/chefmuslim.az" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
              <a href="https://wa.me/994516693999" target="_blank" rel="noopener noreferrer" className="social-link">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Chef Muslim. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

