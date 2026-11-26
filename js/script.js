/* MEMBUKA FOTO GALERI */
function bukaFoto(src) {
    const lightbox = document.getElementById("lightbox");
    const foto = document.getElementById("fotoBesar");

    foto.src = src;
    lightbox.classList.add("aktif");
}

/* MENUTUP FOTO GALERI */
function tutupFoto() {
    const lightbox = document.getElementById("lightbox");
    const foto = document.getElementById("fotoBesar");

    lightbox.classList.remove("aktif");
    foto.src = "";
}

/* TOMBOL ESC UNTUK MENUTUP FOTO */
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        tutupFoto();
    }
});

/* ANIMASI SAAT SECTION MUNCUL */
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("tampil");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".product-card, .kontak-box, .tentang-text")
    .forEach(function(element) {
        observer.observe(element);
    });

/* MENUTUP MENU NAVBAR SETELAH DIKLIK */
document.querySelectorAll(".navbar .nav-link").forEach(function(link) {
    link.addEventListener("click", function() {
        const menu = document.getElementById("menu");

        if (menu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
});
