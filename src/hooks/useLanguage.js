import { useState, useEffect } from 'react';
import { translations } from '../utils/translations';

export function useLanguage() {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'az';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
    }, [language]);

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];
        
        for (let k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                return key;
            }
        }
        
        return value || key;
    };

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return { language, t, changeLanguage };
}

