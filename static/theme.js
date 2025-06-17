function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}
function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = current === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}
function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-icon');
    if (theme === 'dark') {
        icon.textContent = '☀️';
        icon.title = 'الوضع النهاري';
    } else {
        icon.textContent = '🌙';
        icon.title = 'الوضع الليلي';
    }
}
function setLang(lang) {
    const html = document.getElementById('html-root');
    if (lang === 'en') {
        html.lang = 'en';
        html.dir = 'ltr';
        document.body.classList.add('en');
        localStorage.setItem('siteLang', 'en');
    } else {
        html.lang = 'ar';
        html.dir = 'rtl';
        document.body.classList.remove('en');
        localStorage.setItem('siteLang', 'ar');
    }
    updateLangIcon(lang);
    updateText(lang);
}
function toggleLang() {
    const current = localStorage.getItem('siteLang') || 'ar';
    setLang(current === 'ar' ? 'en' : 'ar');
}
function updateLangIcon(lang) {
    const icon = document.getElementById('lang-icon');
    if (icon) {
        if (lang === 'en') {
            icon.textContent = '🇬🇧';
            icon.title = 'Switch to Arabic';
        } else {
            icon.textContent = '🇸🇦';
            icon.title = 'التبديل إلى الإنجليزية';
        }
    }
}
function updateText(lang) {
    if (document.getElementById('main-title')) {
        document.getElementById('main-title').textContent = lang === 'en' ? 'Arabic & English OCR Website' : 'موقع التعرف الضوئي على الحروف العربية والإنجليزية';
    }
    if (document.getElementById('upload-btn')) {
        document.getElementById('upload-btn').textContent = lang === 'en' ? 'Upload Image & Extract Text' : 'رفع الصورة وتحليل النص';
    }
    if (document.getElementById('lang-label')) {
        document.getElementById('lang-label').textContent = lang === 'en' ? 'OCR Language:' : 'اللغة Language:';
    }
    if (document.getElementById('psm-label')) {
        document.getElementById('psm-label').textContent = lang === 'en' ? 'Page Segmentation Mode (PSM):' : 'وضع تقسيم الصفحة (PSM):';
    }
    if (document.getElementById('oem-label')) {
        document.getElementById('oem-label').textContent = lang === 'en' ? 'OCR Engine Mode (OEM):' : 'محرك التعرف (OEM):';
    }
    if (document.getElementById('result-title')) {
        document.getElementById('result-title').textContent = lang === 'en' ? 'Extracted Text:' : 'النص المستخرج:';
    }
    if (document.getElementById('download-btn')) {
        document.getElementById('download-btn').textContent = lang === 'en' ? 'Download Text File' : 'تحميل النص كملف';
    }
    // Update dropdown options for language
    const langSelect = document.getElementById('lang');
    if (langSelect) {
        langSelect.options[0].text = lang === 'en' ? 'Arabic + English (default)' : 'عربي + إنجليزي (افتراضي)';
        langSelect.options[1].text = lang === 'en' ? 'Arabic only' : 'عربي فقط';
        langSelect.options[2].text = lang === 'en' ? 'English only' : 'إنجليزي فقط';
    }
    // Update dropdown options for PSM
    const psmSelect = document.getElementById('psm');
    if (psmSelect) {
        psmSelect.options[0].text = lang === 'en' ? '3 - Auto (default)' : '3 - تلقائي (افتراضي)';
        psmSelect.options[1].text = lang === 'en' ? '6 - Single line' : '6 - سطر واحد';
        psmSelect.options[2].text = lang === 'en' ? '4 - Single column' : '4 - عمود نص واحد';
        psmSelect.options[3].text = lang === 'en' ? '11 - Sparse text' : '11 - سطر نص واحد غير منظم';
        psmSelect.options[4].text = lang === 'en' ? '12 - Single word' : '12 - كلمة واحدة';
    }
    // Update dropdown options for OEM
    const oemSelect = document.getElementById('oem');
    if (oemSelect) {
        oemSelect.options[0].text = lang === 'en' ? '3 - Default (LSTM + Legacy)' : '3 - الافتراضي (LSTM + Legacy)';
        oemSelect.options[1].text = lang === 'en' ? '1 - LSTM only' : '1 - LSTM فقط';
        oemSelect.options[2].text = lang === 'en' ? '0 - Legacy only' : '0 - Legacy فقط';
    }
}
window.onload = function() {
    const saved = localStorage.getItem('siteLang') || 'ar';
    setLang(saved);
    // Also run theme setup
    if (typeof setTheme === 'function') {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
    }
};
