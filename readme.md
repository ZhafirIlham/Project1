# Ilham Zhafir — Portfolio

Website portofolio personal modern untuk **Ilham Zhafir**, Full Stack AI Engineer.
Dibangun dengan HTML, CSS, dan vanilla JavaScript — sepenuhnya client-side, tanpa
backend atau API eksternal.

## ✨ Fitur

- **Navbar** sticky dengan efek glass saat scroll, active-link highlighting, dan menu mobile.
- **Hero section** fullscreen: badge "available for opportunities", typewriter effect,
  foto profil dengan glow + animated ring, floating chips, dan tombol CTA.
- **About section**: biografi profesional, highlight pengalaman, dan animated
  statistics cards.
- **Skills section**: 4 kategori (Frontend, Backend, Database, AI & Cloud) dengan
  animated progress bars dan hover effect.
- **Projects section**: 3 interactive card dengan overlay GitHub + Live Demo,
  tech tags, dan hover animation.
- **Experience section**: timeline pengalaman profesional.
- **Testimonials section**: 3 interactive card.
- **Contact section**: form dengan validasi (nama/email/pesan), success/error states,
  info kontak, social links, dan embedded map (OpenStreetMap).
- **Footer**: copyright, link navigasi, social links, dan tombol smooth scroll ke atas.
- Animated gradient background + floating particles.
- Smooth scroll, scroll-reveal animations, dan dukungan `prefers-reduced-motion`.
- Responsive penuh: Mobile, Tablet, Desktop.

## 🗂️ Struktur Folder

```
/
├── index.html
├── readme.md
├── assets/
│   └── zhafir.jpg
├── css/
│   ├── variables.css      # design tokens (warna, spacing, font)
│   ├── base.css           # reset, layout, buttons, background
│   └── animations.css     # keyframes & scroll reveal
├── components/
│   ├── navbar/navbar.css
│   ├── hero/hero.css
│   ├── about/about.css
│   ├── skills/skills.css
│   ├── projects/projects.css
│   ├── experience/experience.css
│   ├── testimonials/testimonials.css
│   ├── contact/contact.css
│   └── footer/footer.css
├── pages/                 # halaman tambahan (opsional, untuk pengembangan)
└── js/
    ├── particles.js       # floating particle canvas
    ├── typewriter.js      # efek typewriter hero
    ├── contact.js         # validasi form kontak
    └── main.js            # navbar, reveal, counters, skill bars, scroll-top
```

## 🎨 Tema

Dark modern developer portfolio — gradient background, glassmorphism cards,
soft glowing accents (violet / cyan / pink), transisi halus, dan tipografi
modern (Space Grotesk + Inter).

## 🚀 Menjalankan

Buka `index.html` langsung di browser, atau jalankan server statis sederhana:

```bash
# contoh dengan Python
python -m http.server 8000
# lalu buka http://localhost:8000
```

## 🧩 Status Pengembangan

- [x] Navbar
- [x] Hero section
- [x] About section
- [x] Skills section
- [x] Projects section
- [x] Work experience
- [x] Testimonials
- [x] Contact & footer

> Semua section inti sudah lengkap. Website siap digunakan di production.
