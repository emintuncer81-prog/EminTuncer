document.addEventListener("DOMContentLoaded", () => {
    const welcomeEl = document.querySelector('.welcome h1');
    const text = welcomeEl.innerText;
    welcomeEl.innerText = "";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            // boşluk karakterini normal olarak ekle
            welcomeEl.innerHTML += text[i] === " " ? "&nbsp;" : text[i];
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
});
