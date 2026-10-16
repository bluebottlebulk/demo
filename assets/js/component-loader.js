document.addEventListener("DOMContentLoaded", function() {
    // Tentukan apakah file berada di root atau sub-folder (misal: /e-menu/)
    const isInSubfolder = window.location.pathname.split('/').filter(Boolean).length > 1;
    const prefix = isInSubfolder ? "../" : "./";

    // Load Header
    const headerElement = document.getElementById("site-header");
    if (headerElement) {
        fetch(prefix + "components/header.html")
            .then(response => response.text())
            .then(data => {
                // Perbaiki path gambar/link jika di dalam sub-folder
                if (isInSubfolder) {
                    data = data.replace(/src="\/favicon.ico"/g, 'src="../favicon.ico"');
                    data = data.replace(/href="\/"/g, 'href="../"');
                    data = data.replace(/href="\/#demos"/g, 'href="../#demos"');
                }
                headerElement.innerHTML = data;
            });
    }

    // Load Footer
    const footerElement = document.getElementById("site-footer");
    if (footerElement) {
        fetch(prefix + "components/footer.html")
            .then(response => response.text())
            .then(data => {
                footerElement.innerHTML = data;
            });
    }
});
