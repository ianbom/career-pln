# Design System — Website Beasiswa PLN

> **Dokumen acuan:** desain dashboard Student Beasiswa PLN yang diberikan sebagai referensi visual.
>
> Dokumen ini menjadi **source of truth** untuk seluruh halaman website demo Beasiswa PLN, baik **Student** maupun **Admin**. Semua halaman baru harus mengikuti aturan visual, hierarchy, warna, spacing, komponen, dan pola interaksi yang dijelaskan di sini agar hasil akhir konsisten.
>
> Catatan: nilai warna di bawah merupakan **UI tokens yang diturunkan dari tampilan referensi**, bukan klaim sebagai brand guideline resmi PLN.

---

# 1. Design Direction

Website Beasiswa PLN harus terasa:

- Profesional
- Resmi / institusional
- Modern
- Bersih
- Terpercaya
- Mudah dipahami
- Ramah untuk mahasiswa/pelajar tanpa terlihat childish
- Terstruktur
- Ringan secara visual
- Production-ready

Kesan yang ingin diberikan:

> **“Portal seleksi beasiswa institusional yang profesional, jelas, transparan, dan mudah digunakan.”**

Website **bukan** aplikasi startup yang playful dan bukan dashboard enterprise yang terlalu kompleks.

---

# 2. Core Design Principles

## 2.1 Clarity First

Setiap halaman harus langsung menjawab pertanyaan utama user.

Contoh:

- Dashboard → “Saya sedang berada di tahap apa?”
- Berkas → “Dokumen apa yang belum lengkap?”
- Tes Online → “Berapa waktu tersisa dan soal mana yang belum dijawab?”
- Interview → “Kapan jadwal saya dan apa statusnya?”
- Pengumuman → “Saya lolos atau tidak?”
- Admin → “Peserta mana yang perlu ditindaklanjuti?”

Jangan menambahkan informasi yang tidak membantu proses seleksi.

---

## 2.2 Strong Visual Hierarchy

Gunakan urutan visual:

1. Judul halaman
2. Status / informasi paling penting
3. Action utama
4. Detail pendukung
5. Informasi sekunder

Gunakan ukuran font, warna, whitespace, dan card grouping untuk membentuk hierarchy.

---

## 2.3 PLN-Inspired, Not Overdecorated

Identitas visual dibangun menggunakan:

- Biru sebagai warna utama
- Kuning sebagai accent
- Putih sebagai permukaan utama
- Navy untuk teks
- Light gray / light blue untuk background dan separator

**Jangan menggunakan kuning sebagai warna background dominan.**

Kuning hanya digunakan sebagai:

- accent
- warning
- highlight kecil
- icon penting
- decorative stripe

---

## 2.4 Simple Demo, Premium Presentation

Karena website merupakan demo:

- Fitur dibuat sederhana
- Visual tetap terlihat matang
- Tidak perlu analytics kompleks
- Tidak perlu banyak grafik
- Tidak perlu decorative element berlebihan
- Utamakan alur seleksi yang jelas

---

# 3. Color System

## 3.1 Primary Colors

### PLN Primary Blue

```css
--pln-blue-500: #006DB8;
```

Penggunaan:

- Primary button
- Active sidebar
- Progress
- Active timeline
- Link utama
- Icon utama
- Status informasi
- Hero card

### PLN Blue Light

```css
--pln-blue-400: #1686CE;
```

Penggunaan:

- Hover
- Supporting accent
- Gradient
- Progress indicator

### PLN Blue Dark

```css
--pln-blue-600: #005B9F;
--pln-blue-700: #004B83;
```

Penggunaan:

- Button hover / pressed
- Darker gradient
- Strong emphasis
- Text di atas background terang jika diperlukan

---

## 3.2 PLN Yellow Accent

```css
--pln-yellow-500: #FFCC00;
--pln-yellow-400: #FFD633;
--pln-yellow-600: #E5B800;
```

Penggunaan:

- Warning
- Accent stripe
- Icon kecil
- Highlight dekoratif
- Attention marker
- Illustration detail

**Jangan menggunakan yellow untuk body text.**

---

## 3.3 Text Colors

### Primary Text

```css
--text-primary: #0B1B3A;
```

Digunakan untuk:

- Heading
- Label penting
- Navigation
- Judul card

### Secondary Text

```css
--text-secondary: #344563;
```

Digunakan untuk:

- Body text
- Supporting description
- Metadata

### Muted Text

```css
--text-muted: #64748B;
```

Digunakan untuk:

- Placeholder
- Inactive status
- Helper text
- Caption

### Disabled Text

```css
--text-disabled: #94A3B8;
```

---

# 4. Neutral Colors

```css
--white: #FFFFFF;

--gray-25:  #FCFDFE;
--gray-50:  #F8FAFC;
--gray-100: #F1F5F9;
--gray-150: #EDF2F7;
--gray-200: #E2E8F0;
--gray-300: #CBD5E1;
--gray-400: #94A3B8;
--gray-500: #64748B;
```

### Main Page Background

```css
--background-page: #F8FAFC;
```

Pada desktop, sidebar dapat tetap putih sementara area konten menggunakan putih / very light gray.

### Card Background

```css
--background-card: #FFFFFF;
```

### Soft Blue Surface

```css
--background-blue-soft: #EEF6FD;
```

Digunakan untuk:

- Section header dalam card
- Selected area
- Information surface
- Subtle highlighted row

---

# 5. Semantic Colors

## Success

```css
--success-500: #16A34A;
--success-100: #EAF8EF;
--success-border: #A7E1B8;
```

Digunakan untuk:

- Selesai
- Sudah diisi
- Sudah upload
- Lolos tahap

---

## Warning

```css
--warning-500: #F5B700;
--warning-100: #FFF7D6;
```

Digunakan untuk:

- Belum lengkap
- Perlu tindakan
- Ditandai untuk ditinjau
- Deadline warning

---

## Danger

```css
--danger-500: #D92D20;
--danger-100: #FEECEB;
```

Gunakan seperlunya:

- Error form
- Gagal upload
- Action destructive

Untuk status **Tidak Lolos**, hindari desain merah agresif. Gunakan red/muted red hanya pada badge kecil atau icon.

---

## Info

Gunakan PLN Blue.

```css
--info-500: #006DB8;
--info-100: #EAF5FC;
```

---

# 6. Gradient Rules

Gradient hanya digunakan pada area penting, terutama hero/status card.

Recommended:

```css
background: linear-gradient(
  105deg,
  #006DB8 0%,
  #0879C5 55%,
  #0065AD 100%
);
```

Boleh menggunakan variasi ringan tetapi:

- jangan lebih dari 2–3 warna
- jangan memakai gradient neon
- jangan menggunakan gradient pada semua card

---

# 7. Typography

## 7.1 Recommended Font

Gunakan:

```css
font-family:
  "Inter",
  "Plus Jakarta Sans",
  "Segoe UI",
  Arial,
  sans-serif;
```

### Primary Recommendation

**Inter**

Alasan:

- sangat mudah dibaca
- professional
- cocok untuk dashboard
- konsisten di desktop/mobile
- banyak weight
- terlihat dekat dengan karakter UI pada referensi

Jika project sudah menggunakan **Plus Jakarta Sans**, font tersebut juga dapat digunakan selama seluruh website konsisten.

---

# 8. Typography Scale

## Display / Page Title

```text
28px / 34px
font-weight: 700
```

Contoh:

- Dashboard Student
- Tes Online
- Pengumuman
- Kelola Peserta

---

## H1

```text
24px / 32px
font-weight: 700
```

---

## H2

```text
20px / 28px
font-weight: 700
```

Untuk:

- Heading card besar
- Section heading

---

## H3

```text
18px / 26px
font-weight: 600–700
```

Untuk:

- Judul card
- Panel heading

---

## Body Large

```text
16px / 24px
font-weight: 400–500
```

---

## Body

```text
14px / 21px
font-weight: 400–500
```

Sebagian besar isi dashboard menggunakan ukuran ini.

---

## Small

```text
13px / 18px
font-weight: 400–500
```

Untuk metadata dan status.

---

## Caption

```text
12px / 16px
font-weight: 400–500
```

---

## Button Text

```text
14px / 20px
font-weight: 600
```

---

# 9. Font Weight Rules

Gunakan weight:

```text
400 → body normal
500 → label / supporting emphasis
600 → button / navigation / section title
700 → heading / main status
```

Hindari terlalu banyak `800` atau `900`.

---

# 10. Layout System

Reference desktop canvas:

```text
1536 × 1024
```

Website harus menggunakan responsive fluid layout, bukan fixed 1536px.

---

# 11. Desktop Shell

## Sidebar

Recommended width:

```css
width: 264px;
```

Range:

```text
248–272px
```

Sidebar:

- fixed atau sticky
- full viewport height
- white background
- border kanan tipis
- tidak menggunakan heavy shadow

```css
border-right: 1px solid #E2E8F0;
```

---

## Main Content

Desktop:

```css
padding-left/right: 32px;
padding-top: 24px;
padding-bottom: 32px;
```

Recommended:

```text
content gap: 16–24px
```

Maximum content width tidak perlu terlalu ketat karena dashboard membutuhkan ruang horizontal.

---

# 12. Content Grid

Gunakan grid 12 column.

Desktop:

```text
12 columns
24px gutter
```

Contoh dashboard:

```text
Main Left Content    : 8 columns
Supporting Right     : 4 columns
```

Contoh card profile dan berkas:

```text
Profile Completion : 6 columns
Document Completion: 6 columns
```

---

# 13. Spacing System

Gunakan **4px base grid**.

Spacing tokens:

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
```

Recommended usage:

```text
Icon → text               : 8–12px
Label → input              : 8px
Input → input              : 16px
Card content internal      : 20–24px
Card → card                : 16px
Major section → section    : 24px
Page title → content       : 20–24px
```

---

# 14. Border Radius

UI menggunakan rounded corner yang modern tetapi tidak terlalu playful.

```css
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-pill: 999px;
```

Recommended:

```text
Input              : 8px
Button             : 8px
Standard Card      : 10–12px
Hero Card          : 10–12px
Badge              : pill
Avatar             : circle
```

Hindari radius 24–32px pada card dashboard utama.

---

# 15. Borders

Standard:

```css
border: 1px solid #E2E8F0;
```

Highlighted:

```css
border: 1px solid #B8DDF5;
```

Active / Focus:

```css
border-color: #1686CE;
```

Border harus subtle.

---

# 16. Shadows

Gunakan shadow sangat ringan.

## Standard Card

```css
box-shadow:
  0 1px 2px rgba(15, 23, 42, 0.04),
  0 4px 14px rgba(15, 23, 42, 0.05);
```

## Elevated Card / Dropdown

```css
box-shadow:
  0 8px 24px rgba(15, 23, 42, 0.10);
```

Jangan menggunakan shadow gelap atau blur berlebihan.

---

# 17. Sidebar Design

## Logo Area

Layout:

```text
[ PLN Symbol ] Beasiswa PLN
```

- Symbol di kiri
- Nama brand di kanan
- Biru sebagai text brand utama
- Header sidebar memiliki padding 24–28px

---

## Navigation Item

Height:

```text
48–52px
```

Layout:

```text
icon + 14–16px gap + label
```

Icon:

```text
20–22px
```

---

## Active Navigation

Gunakan blue filled background.

```css
background: linear-gradient(
  90deg,
  #006DB8,
  #087EC7
);

color: #FFFFFF;
```

Properties:

```text
border-radius: 8px
font-weight: 600
```

---

## Inactive Navigation

```text
background: transparent
color: #0B1B3A
```

Hover:

```css
background: #F1F7FC;
```

---

# 18. Topbar

Topbar tidak perlu diberi card/background khusus.

Layout:

```text
Left:
Page title
Supporting text

Right:
Notification
Divider
Avatar
Name
Role
Dropdown
```

Avatar:

```text
44–48px
```

Notification icon:

```text
22–24px
```

Divider:

```css
height: 48px;
border-left: 1px solid #E2E8F0;
```

---

# 19. Page Header

Pattern:

```text
Dashboard Student
Selamat datang, Andi Pratama 👋
```

Heading menggunakan navy dan bold.

Highlight nama dapat menggunakan PLN blue.

Jangan gunakan greeting lebih dari satu baris pada desktop.

---

# 20. Card System

## Standard Card

```css
background: #FFFFFF;
border: 1px solid #E2E8F0;
border-radius: 12px;
padding: 20px 24px;
```

Use cases:

- timeline
- profile completeness
- document completeness
- action list
- information
- admin statistics
- forms

---

## Hero / Primary Status Card

Background:

```text
PLN blue gradient
```

Text:

```text
white
```

Can contain:

- illustration
- current stage
- completion
- CTA

Height desktop:

```text
220–240px maximum
```

Card harus dominant tetapi tidak terlalu tinggi.

---

# 21. Hero Status Card Layout

Recommended desktop:

```text
Illustration       Status Info        Completion
    25%                35%                40%
```

Vertical divider boleh digunakan dengan opacity rendah:

```css
border-color: rgba(255,255,255,.22);
```

---

# 22. Illustrations

Style illustration:

- Flat / vector
- Modern
- Clean
- Educational
- Energy-related
- Blue/yellow dominant
- Low visual noise

Tema yang cocok:

- graduation cap
- books
- student
- document
- electricity tower
- renewable energy
- education / career growth

Hindari:

- 3D cartoon yang terlalu glossy
- anime
- mascot
- stock photo berlebihan

Gunakan illustration hanya pada area tertentu seperti:

- dashboard hero
- register/login visual
- empty state

---

# 23. Iconography

Recommended icon libraries:

- Lucide
- Heroicons Outline

Gunakan **satu library utama** agar stroke konsisten.

Recommended:

```text
Default size     : 20px
Navigation       : 20–22px
Card header      : 20–24px
Large status     : 28–32px
Stroke           : 1.75–2px
```

Icon harus sederhana dan outline-style.

---

# 24. Buttons

## Primary Button

```css
height: 44px;
padding: 0 20px;
background: #006DB8;
color: #FFFFFF;
border-radius: 8px;
font-weight: 600;
```

Hover:

```css
background: #005B9F;
```

Pressed:

```css
background: #004B83;
```

---

## Secondary Button

```css
background: #FFFFFF;
color: #006DB8;
border: 1px solid #1686CE;
```

Hover:

```css
background: #F1F8FD;
```

---

## Button on Blue Hero

Gunakan white button:

```css
background: #FFFFFF;
color: #005B9F;
```

---

## Danger Button

Hanya untuk action benar-benar destructive.

---

# 25. Button Rules

- Satu area sebaiknya memiliki **1 primary action**
- Jangan membuat semua tombol biru
- Gunakan label tindakan jelas
- Minimum clickable height: `44px`
- Icon trailing arrow boleh digunakan untuk navigation CTA

Contoh:

```text
Lengkapi Data →
Lihat Semua Berkas →
Kirim Jawaban
```

---

# 26. Form Inputs

Standard input:

```text
height: 44–48px
radius: 8px
border: 1px solid #CBD5E1
background: white
font-size: 14px
```

Padding:

```text
12px 14px
```

Focus:

```css
border-color: #1686CE;
box-shadow: 0 0 0 3px rgba(22,134,206,.12);
```

---

# 27. Form Labels

```text
14px
font-weight: 600
color: #0B1B3A
margin-bottom: 8px
```

Required marker boleh menggunakan danger color tetapi jangan berlebihan.

---

# 28. Validation

## Error

```text
border: danger
small error text below input
```

## Success

Tidak perlu memberi green border pada semua field valid.

Gunakan success hanya ketika dibutuhkan.

---

# 29. Select / Dropdown

Harus memiliki height dan visual sama dengan input biasa.

Chevron di kanan.

Jangan gunakan native styling yang sangat berbeda dengan komponen lain.

---

# 30. Textarea

```text
min-height: 120px
resize: vertical
```

Untuk essay:

```text
min-height: 180–240px
```

---

# 31. File Upload

Area upload:

```css
border: 1px dashed #A8C8DF;
background: #F8FBFE;
border-radius: 10px;
```

State:

- belum upload
- uploading
- uploaded
- error

Uploaded file harus menampilkan:

```text
File icon
Nama file
Ukuran
Status
View / Delete
```

---

# 32. Status Badge

Badge menggunakan pill.

Base:

```text
height: 26–30px
padding: 4px 12px
font-size: 12px
font-weight: 500–600
```

---

## Completed

```text
green text
light green background
```

## Active

```text
blue text
light blue background
blue border
```

## Pending

```text
muted text
light gray background
```

## Warning

```text
dark yellow / amber text
light yellow background
```

## Failed

```text
muted red text
light red background
```

---

# 33. Timeline / Selection Stepper

Timeline adalah komponen penting website.

Tahapan:

```text
1. Pendaftaran Akun
2. Pengisian Data & Berkas
3. Tes Online
4. Interview
5. Pengumuman
```

---

## Completed Step

- Green check icon
- Green/light green circle
- Blue connecting line boleh digunakan mengikuti reference

---

## Active Step

- Filled PLN blue circle
- White icon
- Active blue status badge

---

## Future Step

- Light gray circle
- Muted icon
- Dashed/light gray connecting line
- Pending badge

---

## Timeline Layout Desktop

Horizontal.

Setiap step mendapat ruang yang relatif sama.

---

## Timeline Layout Mobile

Vertical.

Jangan memaksa horizontal scroll untuk 5 langkah.

---

# 34. Progress Indicators

Gunakan progress hanya untuk hal bermakna:

- Kelengkapan profil
- Kelengkapan berkas
- Progress soal tes

Circular progress cocok untuk metric sederhana.

Recommended:

```text
56–64px circle for small card
96–112px circle for hero
```

Primary progress:

```text
blue
```

Track:

```text
light gray / rgba white
```

---

# 35. Data Completion List

Pattern:

```text
[icon] Nama Lengkap               ✓ Sudah diisi
[icon] Alamat                     ⚠ Belum diisi
```

Rules:

- Icon data → muted navy/gray
- Completed → green
- Missing → yellow warning
- Jangan gunakan red untuk data yang hanya belum lengkap

---

# 36. Information Cards

Examples:

- “Yang Harus Dilakukan”
- “Informasi”
- “Petunjuk”
- “Catatan”

Card header dapat menggunakan colored circular icon.

Example:

```text
Yellow icon → action required
Blue icon   → information
Green icon  → success
```

---

# 37. Action List

Setiap row:

```text
icon
label
chevron
```

Height:

```text
36–44px
```

Tidak perlu border antar row jika whitespace sudah cukup.

---

# 38. Tables — Admin

Admin membutuhkan table yang clean.

Header:

```css
background: #F8FAFC;
color: #344563;
font-weight: 600;
```

Row:

```text
height: 52–60px
border-bottom: 1px solid #EDF2F7
```

Hover:

```css
background: #FAFCFE;
```

Recommended columns:

```text
Nama
Institusi
Tahap
Status
Tanggal Daftar
Action
```

Action gunakan:

```text
View Detail
```

Jangan memenuhi table dengan terlalu banyak button.

---

# 39. Pagination

Simple:

```text
← Previous
1 2 3 ...
Next →
```

Active page menggunakan PLN Blue.

---

# 40. Dashboard Statistics — Admin

Stat card sederhana:

```text
Label
Large value
small icon
optional contextual text
```

Contoh:

```text
Total Peserta
248
```

Tidak perlu chart besar kecuali benar-benar membantu.

---

# 41. Online Test UI

Online test harus terasa fokus.

Recommended desktop layout:

```text
Main Question Area : ~70%
Question Sidebar   : ~30%
```

---

## Test Header

Display:

- Nama tes
- Timer
- Progress

Timer harus sangat mudah terlihat.

---

## Multiple Choice

Option card:

```text
radio
option text
```

Height minimal:

```text
48px
```

Selected:

```css
border-color: #1686CE;
background: #F1F8FD;
```

---

## Essay

Textarea besar dan nyaman.

---

## Question Navigator

States:

```text
Answered     → blue/soft blue
Current      → filled blue
Unanswered   → gray
Review       → yellow
```

Jangan menggunakan warna tanpa label/legend.

---

# 42. Interview Page

Fokus hanya pada informasi.

Recommended primary card:

```text
Status Interview
Tanggal
Jam
Media/Lokasi
Link
```

Tidak ada fitur video call internal.

Jika jadwal belum tersedia, tampilkan clean empty/pending state.

---

# 43. Announcement Page

Final result adalah visual focus.

## Lolos

Gunakan:

- PLN blue
- green success accent
- subtle yellow
- large result text

Jangan menggunakan confetti berlebihan.

---

## Tidak Lolos

Gunakan:

- neutral
- muted red hanya pada badge/icon kecil
- tone respectful

Jangan membuat halaman terasa seperti error page.

---

# 44. Registration / Login Page

Recommended layout:

```text
Desktop:
Left visual 45–52%
Right form 48–55%
```

Left:

- PLN-inspired illustration/photo
- title
- short message

Right:

- form card / clean form area

Mobile:

- Hide / simplify visual section
- Form menjadi primary focus

---

# 45. Empty States

Empty state harus terdiri dari:

```text
small illustration/icon
title
1 sentence description
optional CTA
```

Jangan terlalu besar.

---

# 46. Loading States

Gunakan:

- skeleton untuk page data
- spinner untuk button action
- disabled button selama submit

Jangan membuat seluruh page blur.

---

# 47. Toast / Notification

Position:

```text
top-right desktop
bottom/top mobile depending implementation
```

Jenis:

- Success
- Error
- Warning
- Info

Toast tidak boleh menggantikan inline validation.

---

# 48. Modal

Modal untuk:

- Confirmation submit tes
- Confirmation admin status
- Destructive action

Recommended width:

```text
420–520px
```

Jangan gunakan modal untuk content panjang.

---

# 49. Responsive Breakpoints

Recommended:

```css
sm: 640px;
md: 768px;
lg: 1024px;
xl: 1280px;
2xl: 1536px;
```

---

# 50. Desktop Behavior — ≥ 1280px

- Sidebar full
- Main content multi-column
- Timeline horizontal
- Hero content horizontal
- Supporting cards 2–3 columns

---

# 51. Tablet Behavior — 768px–1279px

- Sidebar dapat collapsed menjadi icon navigation atau drawer
- Hero dapat 2-column / stacked
- Right supporting cards turun ke bawah
- Timeline dapat tetap horizontal jika cukup ruang
- Content padding `20–24px`

---

# 52. Mobile Behavior — < 768px

- Sidebar menjadi drawer
- Topbar disederhanakan
- Content padding `16px`
- Semua card 1 column
- Hero stacked
- Illustration dapat diperkecil/dihilangkan
- Timeline vertical
- Button penting dapat full width
- Tables menggunakan responsive card/list atau horizontal scroll bila diperlukan

---

# 53. Mobile Typography

Recommended adjustment:

```text
Page Title : 22–24px
H2         : 18–20px
Body       : 14px
```

---

# 54. Accessibility

Minimum standards:

- Text contrast minimal WCAG AA
- Jangan menggunakan warna sebagai satu-satunya indikator status
- Status harus memiliki icon atau label
- Button touch target minimal `44×44px`
- Form input harus memiliki visible label
- Gunakan keyboard focus state
- Icon-only button harus memiliki `aria-label`
- Semua image meaningful memiliki alt text

---

# 55. Focus State

Global recommended:

```css
outline: none;
box-shadow: 0 0 0 3px rgba(22,134,206,.18);
```

Jangan menghilangkan focus state tanpa pengganti.

---

# 56. Motion & Interaction

Gunakan motion minimal.

Recommended duration:

```text
150–250ms
```

Easing:

```css
cubic-bezier(0.4, 0, 0.2, 1)
```

Allowed:

- hover fade
- small translate
- progress animation
- dropdown fade
- modal scale subtle

Avoid:

- bouncing
- exaggerated spring
- flashy page transition
- parallax dashboard

---

# 57. Hover Rules

Card:

- sebagian besar card **tidak perlu hover**
- clickable card boleh memiliki subtle elevation

Button:

- darken color

Navigation:

- soft blue background

Table row:

- very light blue/gray

---

# 58. Content Tone

Bahasa harus:

- Formal tetapi mudah dipahami
- Singkat
- Jelas
- Tidak terlalu birokratis

Recommended:

```text
“Lengkapi data dan unggah seluruh dokumen untuk melanjutkan ke tahap berikutnya.”
```

Avoid:

```text
“Mohon kiranya Saudara/i segera melakukan proses pemenuhan kelengkapan administrasi sebagaimana dimaksud.”
```

---

# 59. Status Copy

Gunakan status konsisten di seluruh sistem.

## General

```text
Belum Dimulai
Sedang Berjalan
Menunggu Verifikasi
Menunggu Hasil
Selesai
Lolos
Tidak Lolos
```

---

# 60. Student Navigation

Urutan utama:

```text
Dashboard
Profil Saya
Berkas
Tes Online
Interview
Pengumuman
```

Jangan sering mengubah urutan ini.

---

# 61. Admin Navigation

Recommended:

```text
Dashboard
Peserta
Seleksi Berkas
Tes
Interview
Pengumuman
```

Untuk versi demo yang lebih sederhana:

```text
Dashboard
Peserta
```

dan seluruh workflow seleksi dikelola dari detail peserta.

---

# 62. Page Width & Density

Reference memiliki density medium.

Target:

- Tidak terlalu airy
- Tidak terlalu padat
- Informasi penting dapat terlihat tanpa scrolling panjang pada desktop

Standard card padding:

```text
20–24px
```

Jangan memakai `40px+` padding pada semua card dashboard.

---

# 63. Dividers

Gunakan hanya untuk memisahkan logical group.

Standard:

```css
border-color: #E6EDF3;
```

Dalam hero:

```css
rgba(255,255,255,.20)
```

---

# 64. Decorative PLN Elements

Boleh menggunakan elemen diagonal biru/kuning di:

- footer
- login illustration
- empty background section
- page decorative corner

Jangan menggunakan diagonal pattern di setiap card.

---

# 65. Footer

Dashboard tidak memerlukan footer besar.

Jika menggunakan footer:

- minimal
- compact
- tidak mengganggu task
- PLN blue dominant
- yellow accent tipis

---

# 66. Imagery Ratio

Untuk illustration/dashboard:

```text
1:1 atau 4:3
```

Untuk login/register split image:

```text
4:5 / portrait
```

Jangan menampilkan stock photography terlalu banyak.

---

# 67. Do & Don't

## DO

- Gunakan white space yang cukup
- Gunakan PLN Blue sebagai primary
- Gunakan yellow sebagai accent
- Gunakan navy untuk heading
- Gunakan card sederhana
- Pertahankan hierarchy
- Gunakan status yang mudah dipahami
- Konsisten dengan sidebar dan topbar
- Prioritaskan workflow seleksi

## DON'T

- Jangan gunakan dark mode sebagai default
- Jangan menggunakan glassmorphism
- Jangan memakai neon gradient
- Jangan menambahkan decorative blur berlebihan
- Jangan memakai banyak warna sekaligus
- Jangan menggunakan card dengan radius sangat besar
- Jangan membuat semua status menggunakan warna berbeda tanpa sistem
- Jangan menambahkan analytics yang tidak dibutuhkan
- Jangan menggunakan font decorative

---

# 68. Core CSS Tokens

Recommended global tokens:

```css
:root {
  /* Brand */
  --pln-blue-400: #1686CE;
  --pln-blue-500: #006DB8;
  --pln-blue-600: #005B9F;
  --pln-blue-700: #004B83;

  --pln-yellow-400: #FFD633;
  --pln-yellow-500: #FFCC00;
  --pln-yellow-600: #E5B800;

  /* Text */
  --text-primary: #0B1B3A;
  --text-secondary: #344563;
  --text-muted: #64748B;
  --text-disabled: #94A3B8;

  /* Neutral */
  --background-page: #F8FAFC;
  --background-card: #FFFFFF;
  --background-blue-soft: #EEF6FD;

  --border-default: #E2E8F0;
  --border-soft: #EDF2F7;

  /* Semantic */
  --success-500: #16A34A;
  --success-100: #EAF8EF;

  --warning-500: #F5B700;
  --warning-100: #FFF7D6;

  --danger-500: #D92D20;
  --danger-100: #FEECEB;

  /* Radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
}
```

---

# 69. Recommended Tailwind Mapping

Jika menggunakan Tailwind:

```text
primary-400 → #1686CE
primary-500 → #006DB8
primary-600 → #005B9F
primary-700 → #004B83

accent-400  → #FFD633
accent-500  → #FFCC00
accent-600  → #E5B800
```

Background:

```text
bg-page    → #F8FAFC
bg-card    → #FFFFFF
bg-soft    → #EEF6FD
```

Text:

```text
text-primary   → #0B1B3A
text-secondary → #344563
text-muted     → #64748B
```

---

# 70. Reference Component Skeleton

## Dashboard

```text
AppShell
├── Sidebar
└── Main
    ├── Topbar
    ├── PageHeader
    ├── ScholarshipStatusHero
    ├── SelectionTimeline
    └── DashboardGrid
        ├── CompletionCard
        ├── DocumentCard
        └── RightColumn
            ├── ActionRequiredCard
            └── InformationCard
```

---

# 71. Student Page Skeleton

## Profile

```text
PageHeader
ProfileCompletion
PersonalInformationForm
EducationForm
SaveAction
```

## Documents

```text
PageHeader
DocumentStatusSummary
DocumentUploadList
SubmitDocumentsAction
```

## Test

```text
TestHeader
ExamInfo
QuestionLayout
├── Question
└── QuestionNavigator
SubmitExam
```

## Interview

```text
PageHeader
InterviewStatusCard
ScheduleInformation
Instructions
```

## Announcement

```text
PageHeader
FinalResultHero
ParticipantInformation
CompletedTimeline
NextInformation
```

---

# 72. Admin Page Skeleton

## Admin Dashboard

```text
PageHeader
StatisticCards
RecentApplicants
PendingActions
```

## Participants

```text
PageHeader
Search + Filter
ParticipantsTable
Pagination
```

## Participant Detail

```text
ParticipantHeader
SelectionStepper
Profile
Documents
TestResult
Interview
FinalDecision
```

---

# 73. Final Consistency Rule

Sebelum membuat halaman baru, cek:

### Color

- Apakah primary action menggunakan PLN Blue?
- Apakah yellow hanya digunakan sebagai accent?
- Apakah background tetap terang?

### Typography

- Apakah heading menggunakan font dan weight yang konsisten?
- Apakah body tidak terlalu kecil?

### Layout

- Apakah sidebar/topbar sama?
- Apakah spacing mengikuti 4px grid?
- Apakah card menggunakan radius 8–12px?

### Components

- Apakah badge/status mengikuti semantic color system?
- Apakah button/input konsisten?
- Apakah icon dari library yang sama?

### UX

- Apakah user langsung tahu apa statusnya?
- Apakah ada satu action utama yang jelas?
- Apakah halaman tidak terlalu kompleks untuk sebuah demo?

Jika jawabannya **ya**, halaman tersebut sudah sesuai dengan design system Beasiswa PLN.

---

# 74. Summary Design Formula

Gunakan formula berikut untuk seluruh website:

```text
WHITE / LIGHT BACKGROUND
        +
PLN BLUE PRIMARY
        +
YELLOW ACCENT
        +
DARK NAVY TYPOGRAPHY
        +
CLEAN WHITE CARDS
        +
SUBTLE BORDER & SHADOW
        +
CLEAR STATUS SYSTEM
        +
STRUCTURED SPACING
        +
SIMPLE LINE ICONS
        =
BEASISWA PLN DESIGN SYSTEM
```

Tujuan akhirnya bukan hanya “mirip warna PLN”, tetapi menciptakan sistem visual yang **konsisten, profesional, mudah dipindai, dan jelas untuk seluruh proses seleksi beasiswa**.
