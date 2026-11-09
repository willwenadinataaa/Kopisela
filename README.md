# Kopi Sela

Website single page bertema toko kopi yang dibuat untuk memenuhi **Tugas 5 Praktikum**. Kopi Sela adalah kedai fiktif dengan konsep tempat singgah untuk menikmati kopi tanpa terburu-buru.

## Tujuan Website

Website ini dibuat untuk menerapkan komponen **carousel/sliding banner**, navbar dengan menu aktif, serta desain website yang responsif dalam satu halaman.

## Fitur Website

### 1. Carousel Banner

- Menampilkan tiga banner utama dengan tema Kopi Sela.
- Banner berpindah otomatis setiap 5,5 detik.
- Tersedia tombol banner sebelumnya dan berikutnya.
- Tersedia indikator untuk memilih banner tertentu.
- Tersedia tombol **Jeda/Putar** untuk mengatur perpindahan otomatis.
- Dapat dikontrol menggunakan tombol panah pada keyboard.
- Pergantian banner berhenti ketika pengguna mengarahkan mouse atau memindahkan fokus ke area carousel.

### 2. Navbar dengan Menu Aktif

- Navbar memiliki menu Beranda, Menu Kopi, Cerita Kami, dan Mampir ke Sini.
- Menu aktif berubah sesuai posisi halaman saat pengguna melakukan scroll.
- Setiap menu mengarahkan pengguna ke bagian tertentu pada halaman yang sama.

### 3. Tampilan Responsif

- Layout menyesuaikan ukuran desktop, tablet, dan ponsel.
- Navbar berubah menjadi menu hamburger pada layar kecil.
- Kartu menu kopi tersusun menjadi satu kolom pada perangkat mobile.
- Ukuran tulisan, gambar, jarak, dan tombol menyesuaikan ukuran layar.

### 4. Konten Toko Kopi

- Banner pembuka dengan ajakan untuk melihat menu.
- Daftar menu Americano, Kopi Susu Sela, dan Caffè Latte.
- Deskripsi singkat, harga, serta pilihan penyajian setiap menu.
- Cerita singkat tentang konsep Kopi Sela.
- Alamat, jam operasional, dan informasi kunjungan.
- Footer sebagai penutup halaman.

## Teknologi yang Digunakan

- **HTML5** untuk membuat struktur dan isi website.
- **CSS3** untuk desain, warna, layout, animasi, dan responsive design.
- **JavaScript** untuk carousel, autoplay, navigasi mobile, dan menu navbar aktif.
- **Unsplash** sebagai sumber gambar eksternal.

Website dibuat tanpa framework dan tanpa instalasi dependency tambahan.

## Struktur File

```text
Tugas_FE/
├── index.html    # Struktur halaman dan seluruh konten website
├── style.css     # Tampilan, layout, warna, dan responsive design
├── script.js     # Fungsi carousel, navbar mobile, dan menu aktif
└── README.md     # Dokumentasi project
```

## Penjelasan File

### `index.html`

Berisi struktur utama website, yaitu navbar, carousel, bagian menu kopi, cerita kedai, informasi kunjungan, dan footer. File ini juga menghubungkan `style.css` dan `script.js`.

### `style.css`

Berisi seluruh aturan tampilan website, termasuk warna tema kopi, tipografi, grid menu, layout carousel, efek hover, breakpoint responsive, dan tampilan menu mobile.

### `script.js`

Berisi fungsi interaktif website, yaitu:

- Mengganti slide carousel.
- Menjalankan dan menghentikan autoplay carousel.
- Mengatur tombol previous, next, dan indikator slide.
- Membuka serta menutup menu hamburger.
- Menentukan menu navbar yang sedang aktif berdasarkan posisi scroll.

### `README.md`

Berisi dokumentasi project, fitur, teknologi, struktur file, dan cara menjalankan website.

## Cara Menjalankan Project

1. Download atau clone repository ini.
2. Buka folder project menggunakan Visual Studio Code.
3. Buka file `index.html` langsung menggunakan browser, atau jalankan menggunakan ekstensi **Live Server**.
4. Pastikan perangkat terhubung ke internet karena gambar website menggunakan sumber dari Unsplash.

Project ini tidak membutuhkan `npm install`, server khusus, maupun proses build.

## Sumber Gambar

Gambar website diambil dari Unsplash dan dimuat melalui URL `images.unsplash.com`.

## Catatan

Kopi Sela merupakan toko kopi fiktif untuk kebutuhan tugas praktikum. Nama kedai, alamat, jam operasional, menu, harga, dan konten lainnya digunakan sebagai contoh tampilan website.
