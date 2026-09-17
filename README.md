# Portfolio Ghevyra Nur Fadilah

Struktur project ini sengaja dibuat rapi supaya mudah diedit, bahkan untuk pemula.

## 📁 Struktur Folder

```
portfolio/
│── index.html          → Semua isi & struktur halaman (HTML)
│── style.css            → Semua CSS tambahan di luar Tailwind
│── script.js            → Semua JavaScript (animasi & smooth scroll)
│── assets/
│     ├── profile/       → Foto profil kamu (Hero Section)
│     ├── images/        → Foto-foto pendukung di section About
│     ├── projects/      → Gambar/screenshot untuk section Projects
│     ├── gallery/       → Gambar untuk section Design Showcase
│     └── certificates/  → (disiapkan) kalau nanti mau tambah gambar sertifikat
```

## 🖼️ Cara Mengganti Gambar

Kamu TIDAK perlu ubah kode sama sekali. Cukup:
1. Siapkan gambar baru kamu.
2. Beri nama file **PERSIS SAMA** dengan nama file yang lama, contoh: `profile.jpg`.
3. Simpan (timpa/replace) ke folder yang sesuai, misalnya `assets/profile/profile.jpg`.
4. Refresh halaman di browser — gambar otomatis berubah.

Kalau nama file gambar barumu beda (misalnya `.png` bukan `.jpg`), buka `index.html`,
cari nama file lama di dalam atribut `src="..."`, lalu ganti dengan nama file barumu.

Daftar path gambar yang dipakai saat ini:

| Bagian | Path Gambar |
|---|---|
| Foto Profil (Hero) | `assets/profile/profile.jpg` |
| Foto Workspace (About) | `assets/images/workspace.jpg` |
| Ilustrasi Gelombang (About) | `assets/images/digital-waves.jpg` |
| Foto Brainstorming (About) | `assets/images/brainstorming.jpg` |
| Project: Interactive Birthday Website | `assets/projects/birthday.png` |
| Project: Photobooth Website | `assets/projects/photobooth.png` |
| Project: Algorithm Optimization | `assets/projects/algorithm.png` |
| Project: Database System | `assets/projects/database.png` |
| Project: Task Management | `assets/projects/task-management.png` |
| Gallery: Finnies Skin | `assets/gallery/finnies.png` |
| Gallery: SDIT Sinar Fajar | `assets/gallery/sdit.png` |
| Gallery: Future Vision | `assets/gallery/future-vision.png` |
| Gallery: Corporate Identity | `assets/gallery/corporate-identity.png` |

> Catatan: gambar-gambar AI dari Google (link `lh3.googleusercontent.com`) sudah
> dihapus semua dan diganti dengan path lokal di atas. Sekarang project ini
> **tidak bergantung pada internet** untuk menampilkan gambar — kamu yang pegang kendali penuh.

## 🔗 Cara Menyambungkan Link Project Asli

Supaya tombol "View Case Study" di section Projects benar-benar mengarah ke
project asli kamu (bukan cuma tombol kosong):

1. Buka `index.html`, cari komentar `<!-- CARD PROJECT ... -->`.
2. Di dalamnya ada baris seperti ini:
   ```html
   <a href="#" class="bg-white text-on-surface px-6 py-2 rounded-full font-label-md text-label-md">View Case Study</a>
   ```
3. Ganti `href="#"` dengan link project asli kamu, contoh:
   ```html
   <a href="https://nama-project-kamu.vercel.app" target="_blank" rel="noopener">View Case Study</a>
   ```
   Tambahkan `target="_blank"` supaya link terbuka di tab baru.

Lakukan hal yang sama untuk link **LinkedIn** dan **GitHub** di section Contact & Footer
(cari `href="#"` di dekat teks "LinkedIn" / "GitHub" / "Dribbble" / "Instagram").

## ✏️ Cara Mengganti Teks

Semua teks (judul, deskripsi, angka pencapaian, dll) ada langsung di dalam
`index.html`, di antara tag pembuka dan penutup, contoh:
```html
<h3 class="font-headline-md text-headline-md text-primary mb-1">15+</h3>
```
Tinggal ganti angka `15+` dengan angka yang kamu mau.

## ⚠️ Yang Sebaiknya Tidak Diubah

- Bagian `<script id="tailwind-config">` di `index.html` — ini berisi pengaturan
  warna, ukuran font, dan spacing sesuai desain asli. Kalau dihapus, tampilan bisa berantakan.
- Class-class Tailwind (contoh: `rounded-[24px]`, `bg-primary`, `flex`) — ini yang
  mengatur tampilan visual. Aman untuk dibiarkan seperti apa adanya.
