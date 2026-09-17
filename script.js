/* =========================================================
   SCRIPT.JS
   Semua JavaScript untuk website Portfolio Ghevyra Nur Fadilah
   ada di sini. Ada 2 fitur utama:
   1. Animasi "reveal" saat elemen di-scroll ke layar
   2. Smooth scroll saat klik menu navbar
   ========================================================= */

/* ---------- 1. ANIMASI REVEAL SAAT SCROLL ---------- */
// Fungsi ini mengecek semua elemen yang punya class "reveal"
// Kalau elemen itu sudah kelihatan di layar, tambahkan class "active"
// supaya animasi muncul (fade in + naik) jalan (lihat style.css)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // jarak toleransi sebelum elemen terlihat penuh

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Jalankan fungsi reveal() setiap kali halaman di-scroll
window.addEventListener("scroll", reveal);

// Jalankan juga sekali di awal, supaya elemen yang sudah
// terlihat sejak halaman dibuka langsung muncul (tidak perlu di-scroll dulu)
reveal();

/* ---------- 2. SMOOTH SCROLL UNTUK MENU NAVBAR ---------- */
// Saat salah satu link di dalam <nav> diklik, halaman akan
// bergeser (scroll) secara halus ke section yang dituju,
// bukan langsung "loncat" seperti default browser.
document.querySelectorAll('nav a').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        var target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100, // dikurangi 100px karena navbar melayang (fixed)
                behavior: 'smooth'
            });
        }
    });
});
