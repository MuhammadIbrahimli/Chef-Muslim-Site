import React, { useState, useRef, useEffect } from 'react'
import { menuData } from '../utils/menuData'

function AIAssistant({ t }) {
  const [messages, setMessages] = useState([
    { type: 'bot', text: t('ai.welcome') }
  ])
  const [inputValue, setInputValue] = useState('')
  const [recommendations, setRecommendations] = useState([])
  const messagesEndRef = useRef(null)
  const chatMessagesRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const generateAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase()
    const recommendations = []

    // Analyze user preferences
    const preferences = {
      spicy: message.includes('остр') || message.includes('прян') || message.includes('spicy'),
      meat: message.includes('мяс') || message.includes('куриц') || message.includes('баран') || message.includes('meat'),
      fish: message.includes('рыб') || message.includes('морепродукт') || message.includes('fish'),
      vegetarian: message.includes('вегетар') || message.includes('овощ') || message.includes('без мяса') || message.includes('vegetarian'),
      light: message.includes('легк') || message.includes('легкое') || message.includes('диетич') || message.includes('light'),
      sweet: message.includes('сладк') || message.includes('десерт') || message.includes('sweet'),
      traditional: message.includes('традиционн') || message.includes('классическ') || message.includes('traditional'),
      set: message.includes('сет') || message.includes('комплекс') || message.includes('комбо') || message.includes('set')
    }

    // Search through menu for matches
    const allItems = [
      ...menuData.appetizers,
      ...menuData.main,
      ...menuData.desserts,
      ...menuData.sets
    ]

    // Find matching items based on preferences
    let matchedItems = allItems.filter(item => {
      if (preferences.set && item.category === 'sets') return true
      if (preferences.sweet && item.category === 'desserts') return true

      const itemText = (item.name + ' ' + (item.description || '') + ' ' + (item.tags || []).join(' ')).toLowerCase()

      if (preferences.spicy && (item.spicy || itemText.includes('остр'))) return true
      if (preferences.meat && (item.meat || itemText.includes('мяс') || itemText.includes('куриц'))) return true
      if (preferences.fish && (item.fish || itemText.includes('рыб'))) return true
      if (preferences.vegetarian && item.vegetarian) return true
      if (preferences.light && item.light) return true

      return false
    })

    // If no specific matches, try keyword matching
    if (matchedItems.length === 0) {
      matchedItems = allItems.filter(item => {
        const itemText = (item.name + ' ' + (item.description || '')).toLowerCase()
        const keywords = message.split(' ').filter(word => word.length > 3)
        return keywords.some(keyword => itemText.includes(keyword))
      })
    }

    // If still no matches, suggest popular items
    if (matchedItems.length === 0 && allItems.length > 0) {
      matchedItems = allItems.slice(0, 3)
    }

    // Generate response text
    let responseText = ''

    if (matchedItems.length > 0) {
      responseText = 'Отлично! Основываясь на ваших предпочтениях, я подобрал для вас следующие блюда:\n\n'
      matchedItems.slice(0, 3).forEach((item, index) => {
        responseText += `${index + 1}. ${item.name}${item.price ? ' - ' + item.price : ''}\n`
      })
      responseText += '\nПосмотрите подробности в разделе рекомендаций справа!'
      recommendations.push(...matchedItems.slice(0, 5))
    } else if (allItems.length === 0) {
      responseText = 'Спасибо за ваши предпочтения! Как только мы добавим меню, я смогу подобрать для вас идеальные блюда. А пока могу ответить на любые ваши вопросы о нашем ресторане.'
    } else {
      responseText = 'Извините, я не нашел точных совпадений в меню. Можете описать подробнее, что вы предпочитаете? Например, любите ли вы острое, мясо или рыбу, хотите ли легкое блюдо или десерт?'
    }

    return {
      text: responseText,
      recommendations: recommendations
    }
  }

  const handleSend = () => {
    if (!inputValue.trim()) return

    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: inputValue }])
    setInputValue('')

    // Show typing indicator
    const typingId = Date.now()
    setMessages(prev => [...prev, { type: 'bot', text: 'ИИ думает...', id: typingId }])

    // Get AI response after delay
    setTimeout(() => {
      setMessages(prev => prev.filter(msg => msg.id !== typingId))
      const aiResponse = generateAIResponse(inputValue)
      setMessages(prev => [...prev, { type: 'bot', text: aiResponse.text }])

      if (aiResponse.recommendations && aiResponse.recommendations.length > 0) {
        setRecommendations(aiResponse.recommendations)
      }
    }, 1000 + Math.random() * 1000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <section id="ai-assistant" className="ai-assistant">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('ai.title')}</h2>
          <p className="section-subtitle">{t('ai.subtitle')}</p>
        </div>
        <div className="ai-container">
          <div className="ai-chat">
            <div className="chat-header">
              <div className="chat-avatar">🤖</div>
              <div className="chat-info">
                <h3>{t('ai.assistantTitle')}</h3>
                <span className="chat-status">{t('ai.online')}</span>
              </div>
            </div>
            <div className="chat-messages" ref={chatMessagesRef}>
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.type}-message`}>
                  <div className="message-content">
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="chat-input-container">
              <input
                type="text"
                className="chat-input"
                placeholder={t('ai.placeholder')}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button className="send-button" onClick={handleSend}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
          <div className="ai-recommendations">
            <h3>{t('ai.recommendations')}</h3>
            <div className="recommendations-content">
              {recommendations.length > 0 ? (
                recommendations.map((item, index) => (
                  <div key={index} className="recommendation-item">
                    <h4 className="recommendation-title">{t(`menuItems.${item.id}.name`) || item.name}</h4>
                    {item.description && (
                      <p className="recommendation-description">{t(`menuItems.${item.id}.description`) || item.description}</p>
                    )}
                    {item.price && <div className="recommendation-price">{item.price}</div>}
                  </div>
                ))
              ) : (
                <p className="recommendations-placeholder">{t('ai.recommendationsPlaceholder')}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIAssistant

