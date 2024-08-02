let translations = {};

async function loadTranslations(locale) {
    localStorage.setItem('lang',locale);
    const response = await fetch(`./i18n/${locale}.json`);
    translations = await response.json();
}

function t(key) {
    return translations[key] || key;
}

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key);
    });
}

async function initI18n(locale) {
    await loadTranslations(locale);
    updateContent();
}

// Initialize with default language
document.addEventListener('DOMContentLoaded', () => {
    let lang = localStorage.getItem('lang') || 'ar';
    initI18n(lang);
});
