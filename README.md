# TripZap - React (Home & Home Two)

## Cara menjalankan
```
npm install
npm run dev
```
Buka alamat yang muncul (biasanya http://localhost:5173).

## Gambar
Taruh foto di folder `public/img/` dengan nama sesuai di `src/data/data.js`
(contoh: `hero1.jpg`, `fleet1.jpg`, `team1.jpg`, `dest1.jpg`, `blog1.jpg`, dst).
Kalau file belum ada, otomatis tampil gradient biru laut sebagai pengganti.

## Struktur
- `src/pages/` : Home.jsx dan HomeTwo.jsx (hanya menyusun komponen)
- `src/components/` : Navbar, Footer, ChatWidget, Destinations, Team (dipakai di kedua halaman)
- `src/components/home/` : section khusus Home
- `src/components/hometwo/` : section khusus Home Two
- `src/data/data.js` : semua teks/data yang di-`.map()`
- `src/hooks/useReveal.js` : animasi muncul saat scroll + angka naik
- `src/styles/` : global.css, navbar.css, home.css, hometwo.css
