import React from 'react'

function About({ t }) {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-subtitle">{t('about.subtitle')}</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>{t('about.philosophy')}</h3>
            <p>{t('about.text1')}</p>
            <p>{t('about.text2')}</p>
            <div className="features">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <h4>{t('about.halal')}</h4>
                  <p>{t('about.halalDesc')}</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <h4>{t('about.fresh')}</h4>
                  <p>{t('about.freshDesc')}</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <h4>{t('about.chefs')}</h4>
                  <p>{t('about.chefsDesc')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

