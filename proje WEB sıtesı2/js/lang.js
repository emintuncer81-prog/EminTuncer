const translations = {
    en: {
        home: "Home",
        about: "About Me",
        projects: "My Projects",
        gallery: "Gallery",
        contact: "Contact",
        welcome: "Welcome to my personal website!",
        "about-text": "I am Emin Tuncer, 19 years old, 170 cm tall, 80 kg. I have 6 years of boxing and Muay Thai experience. I like design, I am creative, I like sleeping. I work in outdoor advertising as a journeyman. I also run a supermarket with my brother.",
        "education-title": "Education",
        "level": "Level",
        "school": "School",
        "primary-level": "Primary School",
        "primary-school": "Başarı Primary School",
        "middle-level": "Middle School",
        "middle-school": "Bil Middle School",
        "high1-level": "High School 9th & 10th Grade",
        "high1-school": "Ladik Akpınar Science High School",
        "high2-level": "High School 11th & 12th Grade",
        "high2-school": "Zorlu College"
    },
    tr: {
        home: "Ana Sayfa",
        about: "Hakkımda",
        projects: "Projelerim",
        gallery: "Galeri",
        contact: "İletişim",
        welcome: "Bu benim kişisel web sitem, hoşgeldiniz!",
        "about-text": "Ben Emin Tuncer, 19 yaşındayım, 170 boyundayım, 80 kiloyum. 6 yıl boks ve muaythai geçmişim var. Tasarımdan hoşlanırım, yaratıcı bir insanım, uyumaktan hoşlanırım. Açık hava reklamcılığında kalfayla usta arası bir yerdeyim. Bunun dışında abimle birlikte bir süpermarket işletiyorum.",
        "education-title": "Eğitim Bilgileri",
        "level": "Düzey",
        "school": "Okul",
        "primary-level": "İlkokul",
        "primary-school": "Başarı İlkokulu",
        "middle-level": "Ortaokul",
        "middle-school": "Bil Ortaokulu",
        "high1-level": "Lise 9. ve 10. Sınıf",
        "high1-school": "Ladik Akpınar Fen Lisesi",
        "high2-level": "Lise 11. ve 12. Sınıf",
        "high2-school": "Zorlu Koleji"
    }
};

// Sayfa yüklendiğinde önce localStorage kontrol et
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("siteLanguage") || "tr";
    setLanguage(savedLang);
});

function setLanguage(lang) {
    localStorage.setItem("siteLanguage", lang); // seçimi kaydet
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
}
