# 🖥️ Portfolio Arfansyah Saputra

## ✨ Fitur

- **Layar boot BIOS** saat halaman pertama kali dibuka, lalu memudar ke halaman utama.
- **Section full-screen** dalam jendela Windows 95: Welcome, About & Experience, Skills, Projects, dan Contact.
- **Ikon desktop** di halaman Welcome untuk berpindah section dengan cepat.
- **Taskbar + Start menu** di bagian bawah layar. Tombol section yang sedang tampil otomatis menyala, dan ada jam di kanan.
- **Efek ketik** pada judul role dan **teks berjalan** (marquee) di bawah Welcome.
- **Timeline pengalaman** dan **grid skill** dengan ikon teknologi.
- **Kartu project** dengan screenshot dalam bingkai browser mini. Klik gambar untuk melihat versi besar di jendela pop-up.
- **Form kontak** yang membuka aplikasi email dengan subjek dan isi pesan yang sudah terisi.
- **Responsif** untuk layar HP sampai desktop.
- **Ramah aksesibilitas:** animasi otomatis berhenti jika perangkat memakai pengaturan _reduce motion_, dan elemen bisa dipakai dengan keyboard.

## 🛠️ Teknologi

| Library | [React](https://react.dev) |
| Build tool | [Vite](https://vite.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Font | Pixelify Sans dan Space Mono (Google Fonts) |
| Hosting | [Vercel](https://vercel.com) |

## 🚀 Menjalankan di Komputer

Butuh [Node.js](https://nodejs.org) versi LTS.

```bash
# 1. Unduh project
git clone https://github.com/ArvansyahSaputra/Arfan-Portofolio.git
cd Arfan-Portofolio

# 2. Pasang dependensi
npm install

# 3. Jalankan server pengembangan
npm run dev
```

Buka alamat yang tampil di terminal (biasanya `http://localhost:5173`).

Perintah lain:

```bash
npm run build     # membuat versi produksi di folder dist/
npm run preview   # mencoba hasil build secara lokal
npm run lint      # memeriksa kode dengan ESLint
```

## ✏️ Mengubah Konten

Semua teks dan data ada di folder `src/data/`, jadi kamu tidak perlu menyentuh komponen.

| Yang ingin diubah | File |
| Foto profil, link CV, role, statistik, ikon desktop, teks berjalan | `src/data/welcome.js` |
| Riwayat pengalaman | `src/data/experience.js` |
| Daftar skill | `src/data/skills.js` (gambar di `public/assets/tools/`) |
| Project, label, dan link demo atau source | `src/data/projects.js` (gambar di `public/assets/proyek/`) |
| Email, GitHub, LinkedIn | `src/data/contact.js` |
| Menu Start dan tombol taskbar | `src/data/navigation.js` |
| Teks layar boot dan durasinya | `src/data/boot.js` |
| Warna, font, bayangan, dan animasi | `src/index.css` (blok `@theme`) |

## 📬 Kontak

**Arfansyah Saputra** · Junior Front-End / Full-Stack Developer · Depok, Jawa Barat

- ✉️ [arfansyahsaputra90@gmail.com](mailto:arfansyahsaputra90@gmail.com)
- 🐙 [github.com/ArvansyahSaputra](https://github.com/ArvansyahSaputra)
- 💼 [linkedin.com/in/arfansyah](https://linkedin.com/in/arfansyah)

---

© 2026 Arfansyah Saputra
