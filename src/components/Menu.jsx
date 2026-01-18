import React, { useState, useEffect } from 'react'
import { menuData } from '../utils/menuData'

function Menu({ t }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [displayedItems, setDisplayedItems] = useState([])

  useEffect(() => {
    updateDisplayedItems()
  }, [activeCategory])

  const updateDisplayedItems = () => {
    if (activeCategory === 'all') {
      const allItems = [
        ...menuData.appetizers,
        ...menuData.main,
        ...menuData.desserts,
        ...menuData.sets
      ]
      setDisplayedItems(allItems)
    } else if (menuData[activeCategory]) {
      setDisplayedItems(menuData[activeCategory])
    } else {
      setDisplayedItems([])
    }
  }

  const categories = [
    { key: 'all', label: 'menu.all' },
    { key: 'appetizers', label: 'menu.appetizers' },
    { key: 'main', label: 'menu.main' },
    { key: 'desserts', label: 'menu.desserts' },
    { key: 'sets', label: 'menu.sets' }
  ]

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('menu.title')}</h2>
          <p className="section-subtitle">{t('menu.subtitle')}</p>
        </div>
        <div className="menu-tabs">
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`tab-btn ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {t(cat.label)}
            </button>
          ))}
        </div>
        <div className="menu-grid">
          {displayedItems.length > 0 ? (
            displayedItems.map(item => (
              <div key={item.id} className="menu-item">
                <div
                  className="menu-item-image"
                  style={{
                    background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--accent-color) 100%)'
                  }}
                ></div>
                <h3 className="menu-item-title">{t(`menuItems.${item.id}.name`) || item.name}</h3>
                <p className="menu-item-description">{t(`menuItems.${item.id}.description`) || item.description || ''}</p>
                <div className="menu-item-price">{item.price || t('menu.pricePlaceholder')}</div>
              </div>
            ))
          ) : (
            <div className="menu-empty">
              <p>{t('menu.empty')}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Menu

