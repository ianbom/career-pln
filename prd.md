# PRD — Demo Website Beasiswa PLN

## 1. Overview

**Nama Produk:** Beasiswa PLN  
**Jenis:** Demo Website Seleksi Beasiswa  
**Platform:** Web Application  

Website Beasiswa PLN merupakan demo sistem seleksi beasiswa sederhana yang membantu proses pendaftaran dan seleksi peserta dari tahap awal hingga pengumuman akhir.

Sistem memiliki dua role utama:

1. **Student**
2. **Admin**

Fokus utama demo adalah menunjukkan alur seleksi yang jelas dan mudah dipahami tanpa membuat fitur yang terlalu kompleks.

---

## 2. Tujuan

Tujuan website ini adalah menyediakan alur seleksi beasiswa sederhana yang mencakup:

1. Pendaftaran akun student
2. Pengisian data peserta
3. Upload berkas
4. Verifikasi berkas oleh admin
5. Tes online
6. Seleksi interview
7. Pengumuman hasil akhir

Website **tidak menyediakan fitur interview online**. Interview dilakukan di luar sistem dan website hanya menampilkan jadwal serta status interview.

---

## 3. User Role

### 3.1 Student

Student merupakan peserta yang mengikuti proses seleksi Beasiswa PLN.

Student dapat:

- Mendaftar akun
- Login
- Melengkapi profil
- Upload dokumen
- Melihat status seleksi
- Mengikuti tes online
- Melihat jadwal/status interview
- Melihat pengumuman akhir

---

### 3.2 Admin

Admin bertugas mengelola proses seleksi peserta.

Admin dapat:

- Login
- Melihat daftar peserta
- Melihat detail peserta
- Memeriksa berkas
- Menentukan hasil seleksi berkas
- Melihat hasil tes
- Memeriksa jawaban essay
- Menentukan peserta yang lolos tes
- Mengatur jadwal interview
- Menentukan hasil interview
- Menentukan hasil akhir beasiswa

---

# 4. Alur Utama Demo

Alur demo utama:

```text
Student Register
      ↓
Login
      ↓
Lengkapi Profil
      ↓
Upload Berkas
      ↓
Submit Pendaftaran
      ↓
Admin Memeriksa Berkas
      ↓
Lolos Seleksi Berkas
      ↓
Student Mengikuti Tes Online
      ↓
Admin Memeriksa Hasil Tes
      ↓
Lolos Tes
      ↓
Admin Menentukan Jadwal Interview
      ↓
Student Melihat Jadwal Interview
      ↓
Interview Dilakukan di Luar Website
      ↓
Admin Menentukan Hasil Interview
      ↓
Admin Menentukan Hasil Akhir
      ↓
Student Melihat Pengumuman
```

---

# 5. Tahapan Seleksi

Website memiliki lima tahapan utama:

1. **Pendaftaran**
2. **Seleksi Berkas**
3. **Tes Online**
4. **Interview**
5. **Pengumuman**

Status tahapan ditampilkan pada dashboard student dalam bentuk timeline.

Contoh:

```text
Pendaftaran ✓
Seleksi Berkas ✓
Tes Online ●
Interview
Pengumuman
```

---

# 6. Fitur Student

## 6.1 Register

Student dapat membuat akun menggunakan data sederhana:

- Nama lengkap
- Email
- Nomor HP
- Password
- Konfirmasi password

Setelah berhasil register, student diarahkan ke halaman login atau dashboard.

---

## 6.2 Login

Student dapat login menggunakan:

- Email
- Password

---

## 6.3 Dashboard Student

Dashboard merupakan halaman utama student.

Dashboard menampilkan:

### Status Seleksi

Contoh:

**Tahap Saat Ini: Seleksi Berkas**

### Timeline Seleksi

- Pendaftaran
- Seleksi Berkas
- Tes Online
- Interview
- Pengumuman

### Kelengkapan Data

Contoh:

| Data | Status |
|---|---|
| Nama Lengkap | Sudah |
| NIK | Sudah |
| Nomor HP | Sudah |
| Alamat | Belum |
| Universitas | Sudah |
| Program Studi | Belum |

### Kelengkapan Dokumen

Contoh:

| Dokumen | Status |
|---|---|
| KTP / Kartu Pelajar | Sudah |
| CV | Sudah |
| Transkrip / Rapor | Belum |
| Surat Keterangan | Belum |

Dashboard juga menampilkan action yang perlu dilakukan student.

---

## 6.4 Profil Student

Student dapat melengkapi data:

- Nama lengkap
- NIK
- Email
- Nomor HP
- Alamat
- Asal sekolah / universitas
- Jenjang pendidikan
- Program studi / jurusan

---

## 6.5 Upload Berkas

Student dapat mengunggah beberapa dokumen.

Dokumen demo:

- KTP / Kartu Pelajar
- CV
- Transkrip / Rapor
- Surat Keterangan

Status berkas:

- Belum Upload
- Sudah Upload
- Menunggu Verifikasi
- Lolos
- Tidak Lolos

---

## 6.6 Tes Online

Tes hanya dapat diakses jika student lolos seleksi berkas.

Jenis soal:

### Pilihan Ganda

Jawaban dapat dinilai otomatis.

### Essay

Jawaban disimpan dan diperiksa admin.

Informasi halaman tes:

- Nama tes
- Durasi
- Timer
- Jumlah soal
- Soal aktif
- Navigasi soal
- Progress pengerjaan
- Tombol submit

Untuk demo tidak diperlukan:

- Webcam monitoring
- Proctoring
- Anti-cheat
- Randomisasi kompleks
- Monitoring tab browser

---

## 6.7 Interview

Website tidak memiliki video interview.

Student hanya melihat:

- Status interview
- Tanggal
- Jam
- Lokasi / link meeting
- Status hasil interview

Status:

- Belum Dijadwalkan
- Dijadwalkan
- Menunggu Hasil
- Lolos
- Tidak Lolos

Interview dilakukan di luar website.

---

## 6.8 Pengumuman

Setelah seluruh proses seleksi selesai, student dapat membuka halaman pengumuman.

Jika lolos:

```text
Selamat!

Anda dinyatakan LOLOS sebagai penerima Beasiswa PLN.
```

Jika tidak lolos:

```text
Terima kasih telah mengikuti proses seleksi.

Anda belum berhasil lolos sebagai penerima Beasiswa PLN.
```

Halaman juga dapat menampilkan:

- Nama student
- Nomor pendaftaran
- Institusi
- Status akhir
- Timeline seleksi yang telah selesai

---

# 7. Fitur Admin

## 7.1 Login Admin

Admin login menggunakan:

- Email
- Password

Tidak diperlukan fitur registrasi admin pada demo.

---

## 7.2 Dashboard Admin

Dashboard menampilkan statistik sederhana:

- Total peserta
- Menunggu verifikasi
- Lolos berkas
- Sudah mengikuti tes
- Lolos tes
- Menunggu interview
- Penerima beasiswa

Tidak diperlukan grafik atau analytics kompleks.

---

## 7.3 Daftar Peserta

Admin dapat melihat tabel peserta.

Contoh:

| Nama | Institusi | Tahap | Status |
|---|---|---|---|
| Andi Pratama | PENS | Tes Online | Lolos |
| Budi Santoso | ITS | Seleksi Berkas | Menunggu |
| Sinta Dewi | UNAIR | Interview | Dijadwalkan |

Admin dapat membuka detail peserta.

---

## 7.4 Detail Peserta

Halaman detail peserta menampilkan:

- Data profil
- Dokumen
- Hasil seleksi berkas
- Jawaban tes
- Nilai tes
- Status interview
- Status akhir

Sebagian besar proses admin dapat dilakukan melalui halaman ini agar aplikasi tetap sederhana.

---

## 7.5 Verifikasi Berkas

Admin melihat dokumen peserta dan memilih:

- **Lolos**
- **Tidak Lolos**

Jika lolos, student dapat melanjutkan ke tes online.

---

## 7.6 Penilaian Tes

Pilihan ganda dapat memiliki nilai otomatis.

Admin dapat melihat:

- Jumlah jawaban benar
- Nilai pilihan ganda
- Jawaban essay

Admin kemudian menentukan:

- Lolos Tes
- Tidak Lolos

---

## 7.7 Interview

Admin dapat mengatur:

- Tanggal interview
- Jam
- Lokasi / link meeting

Setelah interview selesai, admin menentukan:

- Lolos Interview
- Tidak Lolos

---

## 7.8 Pengumuman

Admin menentukan status akhir peserta:

- Diterima
- Tidak Diterima

Status tersebut kemudian ditampilkan pada halaman pengumuman student.

---

# 8. Struktur Halaman

## Student

```text
Register
Login

Student Dashboard
├── Profil Saya
├── Berkas
├── Tes Online
├── Interview
└── Pengumuman
```

---

## Admin

```text
Admin Login

Admin Dashboard
├── Peserta
│   └── Detail Peserta
├── Seleksi Berkas
├── Tes
├── Interview
└── Pengumuman
```

Jika ingin lebih sederhana, menu seleksi berkas, tes, interview, dan pengumuman dapat dikelola langsung dari halaman **Detail Peserta**.

---

# 9. Status Seleksi Student

Contoh status utama:

### Pendaftaran

- Belum Lengkap
- Lengkap
- Sudah Dikirim

### Berkas

- Menunggu Verifikasi
- Lolos
- Tidak Lolos

### Tes

- Belum Tersedia
- Tersedia
- Sedang Dikerjakan
- Sudah Selesai
- Lolos
- Tidak Lolos

### Interview

- Belum Dijadwalkan
- Dijadwalkan
- Menunggu Hasil
- Lolos
- Tidak Lolos

### Pengumuman

- Belum Tersedia
- Lolos
- Tidak Lolos

---

# 10. Scope Demo

Fitur yang termasuk dalam demo:

- Authentication sederhana
- Role Admin dan Student
- Profil student
- Upload berkas
- Verifikasi berkas
- Timeline seleksi
- Tes pilihan ganda
- Tes essay
- Penilaian sederhana
- Jadwal interview
- Status interview
- Pengumuman akhir

---

# 11. Out of Scope

Fitur berikut **tidak perlu dibuat** untuk demo:

- Video conference interview
- Live chat
- Email automation kompleks
- WhatsApp integration
- AI scoring
- Proctoring ujian
- Webcam monitoring
- Anti-cheat system
- Payment
- Digital signature
- Scholarship contract management
- Multi-program scholarship management
- Advanced analytics
- Detailed reporting
- Certificate generation
- Complex role & permission management

---

# 12. Skenario Demo

Untuk presentasi, gunakan satu akun student sebagai contoh.

### Step 1

Student melakukan register.

### Step 2

Student login dan melihat dashboard.

Status:

```text
Pendaftaran — Sedang Berjalan
```

### Step 3

Student melengkapi profil dan upload berkas.

### Step 4

Admin login dan membuka data peserta.

Admin memilih:

```text
Lolos Seleksi Berkas
```

### Step 5

Student login kembali.

Dashboard berubah menjadi:

```text
Tes Online — Tersedia
```

### Step 6

Student mengerjakan:

- Pilihan ganda
- Essay

Student submit ujian.

### Step 7

Admin melihat hasil tes.

Admin memilih:

```text
Lolos Tes
```

### Step 8

Admin membuat jadwal interview.

### Step 9

Student melihat:

```text
Interview

Tanggal: 12 September 2026
Jam: 10:00 WIB
Status: Dijadwalkan
```

Interview dilakukan di luar website.

### Step 10

Admin mengubah status:

```text
Lolos Interview
```

dan menentukan:

```text
Diterima
```

### Step 11

Student membuka halaman Pengumuman.

Website menampilkan:

```text
SELAMAT

Anda dinyatakan LOLOS sebagai penerima Beasiswa PLN.
```

---

# 13. Success Criteria Demo

Demo dianggap berhasil apabila dapat menunjukkan proses berikut secara utuh:

```text
Register
→ Lengkapi Data
→ Upload Berkas
→ Verifikasi Admin
→ Tes Online
→ Penilaian
→ Interview
→ Pengumuman
```

Prioritas utama adalah **alur seleksi dapat dipahami dengan mudah**, bukan jumlah fitur.

---

# 14. Prinsip Pengembangan

Karena website ini merupakan demo:

1. Gunakan fitur seminimal mungkin.
2. Hindari workflow yang terlalu kompleks.
3. Fokus pada pengalaman student.
4. Pastikan perubahan status seleksi terlihat jelas.
5. Admin cukup memiliki kontrol sederhana untuk meloloskan atau tidak meloloskan peserta.
6. Gunakan data dummy apabila diperlukan.
7. Prioritaskan tampilan profesional dan konsisten dengan identitas warna PLN.
