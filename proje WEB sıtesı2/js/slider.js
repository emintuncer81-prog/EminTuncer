const slidesContainer = document.querySelector(".gallery-slider .slides");
const slides = slidesContainer.querySelectorAll("img");
const prevBtn = document.querySelector(".gallery-slider .prev");
const nextBtn = document.querySelector(".gallery-slider .next");

let currentIndex = 0;
const totalSlides = slides.length;

// Her slide genişliğini ve container genişliğini dinamik ayarla
function updateWidths() {
    slidesContainer.style.width = `${100 * totalSlides}%`;
    slides.forEach(slide => {
        slide.style.width = `${100 / totalSlides}%`;
    });
}

// Slaytı gösteren fonksiyon
function showSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * (100 / totalSlides)}%)`;
}

// Sağ ve Sol tuşlar
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
    resetAutoSlide();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
    resetAutoSlide();
});

// Otomatik geçiş
let autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}, 3000);

// Manuel geçiş sonrası otomatik geçişi sıfırlama
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }, 3000);
}

// Sayfa yeniden boyutlandırıldığında genişlikleri güncelle
window.addEventListener("resize", () => {
    updateWidths();
    showSlide(currentIndex);
});

// Başlangıçta genişlikleri ayarla ve ilk slide’ı göster
updateWidths();
showSlide(currentIndex);
