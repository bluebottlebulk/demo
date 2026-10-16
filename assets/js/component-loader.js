document.addEventListener("DOMContentLoaded", function() {
    // Deteksi apakah sedang di root atau di dalam sub-folder (misal: /e-menu/)
    const isInSubfolder = window.location.pathname.split('/').filter(Boolean).length > 1;
    const rootPath = isInSubfolder ? "../" : "./";

    // 1. Template Komponen Header
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

    // 2. Template Komponen Footer
    const footerHTML = `
        <p>&copy; 2026 Karsalana Lab. Solusi Digital Bisnis Anda.</p>
    `;

    // Masukkan ke elemen tujuan di HTML
    const headerElement = document.getElementById("site-header");
    if (headerElement) {
        headerElement.innerHTML = headerHTML;
    }

    const footerElement = document.getElementById("site-footer");
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }
});
