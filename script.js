// Menu Data Structure (будет заполнено позже)
let menuData = {
    appetizers: [],
    main: [],
    desserts: [],
    sets: []
};

// Current language (default: Russian)
let currentLanguage = localStorage.getItem('language') || 'ru';

// Language functions
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Translate all elements
    translatePage();
}

function translatePage() {
    const t = translations[currentLanguage];
    
    // Translate elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = t;
        
        for (let k of keys) {
            value = value[k];
        }
        
        if (value) {
            element.textContent = value;
        }
    });
    
    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const keys = key.split('.');
        let value = t;
        
        for (let k of keys) {
            value = value[k];
        }
        
        if (value) {
            element.placeholder = value;
        }
    });
    
    // Update AI welcome message if chat exists
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages && chatMessages.children.length > 0) {
        const firstMessage = chatMessages.querySelector('.bot-message .message-content p');
        if (firstMessage && firstMessage.getAttribute('data-i18n')) {
            const key = firstMessage.getAttribute('data-i18n');
            const keys = key.split('.');
            let value = t;
            for (let k of keys) {
                value = value[k];
            }
            if (value) {
                firstMessage.textContent = value;
            }
        }
    }
}

// Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Navbar scroll effect
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Language switcher
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    // Initialize language
    changeLanguage(currentLanguage);

    // Menu tabs functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    if (tabButtons.length > 0) {
        tabButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                tabButtons.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                // Filter menu items
                const category = this.getAttribute('data-category');
                filterMenuItems(category);
            });
        });
    }

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('formName').value,
                email: document.getElementById('formEmail').value,
                phone: document.getElementById('formPhone').value,
                message: document.getElementById('formMessage').value
            };
            
            // Здесь можно добавить отправку формы на сервер
            console.log('Form submitted:', formData);
            const t = translations[currentLanguage];
            alert(t.contact.success);
            contactForm.reset();
        });
    }

    // Initialize AI Assistant
    initAIAssistant();
});

// Menu filtering
function filterMenuItems(category) {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;

    if (menuData[category] && menuData[category].length > 0) {
        displayMenuItems(menuData[category]);
    } else if (category === 'all') {
        displayAllMenuItems();
    } else {
        menuGrid.innerHTML = `
            <div class="menu-empty">
                <p>В категории "${category}" пока нет блюд</p>
            </div>
        `;
    }
}

function displayMenuItems(items) {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;

    menuGrid.innerHTML = items.map(item => createMenuItemHTML(item)).join('');
}

function displayAllMenuItems() {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;

    const allItems = [
        ...menuData.appetizers,
        ...menuData.main,
        ...menuData.desserts,
        ...menuData.sets
    ];

    if (allItems.length > 0) {
        displayMenuItems(allItems);
    } else {
        menuGrid.innerHTML = `
            <div class="menu-empty">
                <p>Меню будет добавлено в ближайшее время</p>
            </div>
        `;
    }
}

function createMenuItemHTML(item) {
    return `
        <div class="menu-item" data-id="${item.id}" data-category="${item.category}">
            <div class="menu-item-image" style="background: linear-gradient(135deg, var(--primary-dark) 0%, var(--accent-color) 100%);"></div>
            <h3 class="menu-item-title">${item.name}</h3>
            <p class="menu-item-description">${item.description || ''}</p>
            <div class="menu-item-price">${item.price || 'Цена уточняется'}</div>
        </div>
    `;
}

// Function to add menu items (will be used when menu is provided)
function addMenuItems(category, items) {
    if (menuData[category]) {
        menuData[category] = [...menuData[category], ...items];
    }
    // Refresh display if needed
    const activeTab = document.querySelector('.tab-btn.active');
    if (activeTab) {
        const currentCategory = activeTab.getAttribute('data-category');
        filterMenuItems(currentCategory);
    }
}

// AI Assistant
function initAIAssistant() {
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendButton');
    const chatMessages = document.getElementById('chatMessages');
    const recommendationsContent = document.getElementById('recommendationsContent');

    if (!chatInput || !sendButton || !chatMessages) return;

    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, 'user');
        chatInput.value = '';

        // Show typing indicator
        const typingIndicator = addTypingIndicator();

        // Get AI response after delay
        setTimeout(() => {
            typingIndicator.remove();
            const aiResponse = generateAIResponse(message);
            addMessage(aiResponse.text, 'bot');
            
            // Show recommendations if any
            if (aiResponse.recommendations && aiResponse.recommendations.length > 0) {
                displayRecommendations(aiResponse.recommendations);
            }
        }, 1000 + Math.random() * 1000);
    }

    sendButton.addEventListener('click', sendMessage);
    
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

function addMessage(text, type) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = `<p>${text}</p>`;
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return null;

    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = '<p>ИИ думает...</p>';
    
    typingDiv.appendChild(contentDiv);
    chatMessages.appendChild(typingDiv);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    return typingDiv;
}

function generateAIResponse(userMessage) {
    const message = userMessage.toLowerCase();
    const recommendations = [];

    // Analyze user preferences
    const preferences = {
        spicy: message.includes('остр') || message.includes('прян'),
        meat: message.includes('мяс') || message.includes('куриц') || message.includes('баран'),
        fish: message.includes('рыб') || message.includes('морепродукт'),
        vegetarian: message.includes('вегетар') || message.includes('овощ') || message.includes('без мяса'),
        light: message.includes('легк') || message.includes('легкое') || message.includes('диетич'),
        sweet: message.includes('сладк') || message.includes('десерт'),
        traditional: message.includes('традиционн') || message.includes('классическ'),
        set: message.includes('сет') || message.includes('комплекс') || message.includes('комбо')
    };

    // Search through menu for matches
    const allItems = [
        ...menuData.appetizers,
        ...menuData.main,
        ...menuData.desserts,
        ...menuData.sets
    ];

    // Find matching items based on preferences
    let matchedItems = allItems.filter(item => {
        if (preferences.set && item.category === 'sets') return true;
        if (preferences.sweet && item.category === 'desserts') return true;
        
        const itemText = (item.name + ' ' + (item.description || '') + ' ' + (item.tags || '').join(' ')).toLowerCase();
        
        if (preferences.spicy && (item.spicy || itemText.includes('остр'))) return true;
        if (preferences.meat && (item.meat || itemText.includes('мяс') || itemText.includes('куриц'))) return true;
        if (preferences.fish && (item.fish || itemText.includes('рыб'))) return true;
        if (preferences.vegetarian && item.vegetarian) return true;
        if (preferences.light && item.light) return true;
        
        return false;
    });

    // If no specific matches, try keyword matching
    if (matchedItems.length === 0) {
        matchedItems = allItems.filter(item => {
            const itemText = (item.name + ' ' + (item.description || '')).toLowerCase();
            // Extract keywords from user message
            const keywords = message.split(' ').filter(word => word.length > 3);
            return keywords.some(keyword => itemText.includes(keyword));
        });
    }

    // If still no matches, suggest popular items
    if (matchedItems.length === 0 && allItems.length > 0) {
        matchedItems = allItems.slice(0, 3);
    }

    // Generate response text
    let responseText = '';
    
    if (matchedItems.length > 0) {
        responseText = 'Отлично! Основываясь на ваших предпочтениях, я подобрал для вас следующие блюда:\n\n';
        matchedItems.slice(0, 3).forEach((item, index) => {
            responseText += `${index + 1}. ${item.name}${item.price ? ' - ' + item.price : ''}\n`;
        });
        responseText += '\nПосмотрите подробности в разделе рекомендаций справа!';
        recommendations.push(...matchedItems.slice(0, 5));
    } else if (allItems.length === 0) {
        responseText = 'Спасибо за ваши предпочтения! Как только мы добавим меню, я смогу подобрать для вас идеальные блюда. А пока могу ответить на любые ваши вопросы о нашем ресторане.';
    } else {
        responseText = 'Извините, я не нашел точных совпадений в меню. Можете описать подробнее, что вы предпочитаете? Например, любите ли вы острое, мясо или рыбу, хотите ли легкое блюдо или десерт?';
    }

    return {
        text: responseText,
        recommendations: recommendations
    };
}

function displayRecommendations(recommendations) {
    const recommendationsContent = document.getElementById('recommendationsContent');
    if (!recommendationsContent) return;

    if (recommendations.length === 0) {
        recommendationsContent.innerHTML = '<p class="recommendations-placeholder">Начните диалог, чтобы получить рекомендации</p>';
        return;
    }

    recommendationsContent.innerHTML = recommendations.map(item => `
        <div class="recommendation-item">
            <h4 class="recommendation-title">${item.name}</h4>
            ${item.description ? `<p class="recommendation-description">${item.description}</p>` : ''}
            ${item.price ? `<div class="recommendation-price">${item.price}</div>` : ''}
        </div>
    `).join('');
}

// Export function to add menu from external source
window.addMenuItems = addMenuItems;
window.setMenuData = function(data) {
    menuData = data;
    displayAllMenuItems();
};

