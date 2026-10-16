document.addEventListener("DOMContentLoaded", function() {
    // Mengecek apakah URL mengandung sub-folder (misal ada kata "e-menu")
    const isInSubfolder = window.location.pathname.includes('/e-menu/');
    
    // Jika di sub-folder, path root mundur satu langkah (../), jika di utama cukup (./)
    const rootPath = isInSubfolder ? "../" : "./";

    // Template Header dengan path logo yang dinamis
    const headerHTML = `
        <a href="${rootPath}" class="logo-container">
            <img src="${rootPath}favicon.ico" alt="Karsalana Logo" style="width: 28px; height: 28px; object-fit: contain;">
            <span class="logo-text">Karsalana<span>.Lab</span></span>
        </a>
        <nav>
            <a href="${rootPath}#demos">Live Demos</a>
            <a href="${rootPath}#services">Layanan</a>
            <a href="https://wa.me/" target="_blank">Kontak</a>
        </nav>
    `;

    const footerHTML = `
        <p>&copy; 2026 Karsalana Lab. Solusi Digital Bisnis Anda.</p>
    `;

    const headerElement = document.getElementById("site-header");
    if (headerElement) headerElement.innerHTML = headerHTML;

    const footerElement = document.getElementById("site-footer");
    if (footerElement) footerElement.innerHTML = footerHTML;
});
