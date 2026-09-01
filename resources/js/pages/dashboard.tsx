import { Head } from '@inertiajs/react';
import {
    Bell,
    CalendarDays,
    Check,
    CheckCircle2,
    ChevronDown,
    ChevronRight,
    ClipboardCheck,
    Clock3,
    FileCheck2,
    FileText,
    Flag,
    GraduationCap,
    Info,
    Laptop,
    ListTodo,
    Mail,
    MapPin,
    Phone,
    ShieldCheck,
    UserRound,
    UsersRound,
} from 'lucide-react';
import type { CSSProperties } from 'react';
import { dashboard } from '@/routes';

const profileItems = [
    { label: 'Nama Lengkap', icon: UserRound, complete: true },
    { label: 'Email', icon: Mail, complete: true },
    { label: 'Nomor HP', icon: Phone, complete: true },
    { label: 'NIK / No. Identitas', icon: ClipboardCheck, complete: true },
    { label: 'Alamat', icon: MapPin, complete: false },
    {
        label: 'Asal Sekolah / Universitas',
        icon: GraduationCap,
        complete: true,
    },
    { label: 'Program Studi / Jurusan', icon: FileText, complete: false },
];

const documentItems = [
    { label: 'KTP / Kartu Pelajar', icon: UserRound, complete: true },
    { label: 'CV (Curriculum Vitae)', icon: Mail, complete: true },
    { label: 'Transkrip / Rapor', icon: FileText, complete: false },
    { label: 'Surat Keterangan', icon: FileText, complete: false },
];

const steps = [
    {
        label: 'Pendaftaran Akun',
        status: 'Selesai',
        state: 'complete',
        icon: Check,
    },
    {
        label: 'Pengisian Data & Berkas',
        status: 'Sedang Berjalan',
        state: 'active',
        icon: FileText,
    },
    {
        label: 'Tes Online',
        status: 'Belum Dimulai',
        state: 'pending',
        icon: Laptop,
    },
    {
        label: 'Interview',
        status: 'Belum Dimulai',
        state: 'pending',
        icon: UsersRound,
    },
    {
        label: 'Pengumuman',
        status: 'Menunggu Hasil',
        state: 'pending',
        icon: Flag,
    },
];

function ProgressRing({ value }: { value: number }) {
    return (
        <span
            className="pln-progress-ring"
            style={{ '--progress': String(value) + '%' } as CSSProperties}
        >
            {value}%
        </span>
    );
}

function GraduationArtwork() {
    return (
        <svg className="pln-hero-art" viewBox="0 0 300 190" aria-hidden="true">
            <defs>
                <linearGradient id="cap-blue" x1="0" x2="1">
                    <stop stopColor="#003f7f" />
                    <stop offset="1" stopColor="#0076c8" />
                </linearGradient>
            </defs>
            <path fill="#064c8b" d="m23 69 84-34 75 33-84 39z" />
            <path
                fill="url(#cap-blue)"
                d="m21 74 78 36 83-39v24l-83 39-78-37z"
            />
            <path fill="#ffca08" d="M100 69v58c0 18 18 20 18 3V74z" />
            <circle cx="109" cy="142" r="7" fill="#ffca08" />
            <path
                fill="#fff"
                d="M114 25h89c10 0 18 8 18 18v117c0 10-8 18-18 18h-89c-10 0-18-8-18-18V43c0-10 8-18 18-18"
            />
            <path
                fill="#d8eafa"
                d="M142 50h43a5 5 0 0 1 0 10h-43a5 5 0 0 1 0-10m-1 23h58a5 5 0 0 1 0 10h-58a5 5 0 0 1 0-10m0 24h61a5 5 0 0 1 0 10h-61a5 5 0 0 1 0-10m0 24h44a5 5 0 0 1 0 10h-44a5 5 0 0 1 0-10"
            />
            <circle cx="125" cy="88" r="12" fill="#005da9" />
            <path fill="#005da9" d="M105 120c2-16 34-16 37 0z" />
            <path
                fill="#fbfdff"
                stroke="#d8eafa"
                strokeWidth="2"
                d="M44 109h79v30H44z"
            />
            <path
                fill="#fff"
                stroke="#d8eafa"
                strokeWidth="2"
                d="M44 134h79v31H44z"
            />
            <path fill="#006db8" d="M44 109h79v9H44z" />
            <path fill="#ffca08" d="M44 134h79v9H44z" />
            <path fill="#2b9f61" d="M236 134c0-26 31-29 30 0-1 17-21 21-30 0" />
            <path
                fill="#42b96d"
                d="M250 137c-22-20-33-2-29-17 6-21 24 8 29 17m1 0c6-26 28-20 21-2-5 13-15 13-21 2"
            />
            <path fill="#f5b700" d="M235 142h35l-5 26h-25z" />
        </svg>
    );
}

function CompletionList({ items }: { items: typeof profileItems }) {
    return (
        <ul className="pln-completion-list">
            {items.map(({ label, icon: Icon, complete }) => (
                <li key={label}>
                    <Icon aria-hidden="true" />
                    <span>{label}</span>
                    {complete ? (
                        <CheckCircle2
                            className="is-complete"
                            aria-label="Sudah diisi"
                        />
                    ) : (
                        <span
                            className="pln-warning-mark"
                            aria-label="Belum diisi"
                        >
                            ▲
                        </span>
                    )}
                    <em>{complete ? 'Sudah diisi' : 'Belum diisi'}</em>
                </li>
            ))}
        </ul>
    );
}

function AppHeader() {
    return (
        <header className="pln-page-header">
            <div>
                <h1>Dashboard Student</h1>
                <p>
                    Selamat datang, <strong>Andi Pratama</strong>{' '}
                    <span aria-hidden="true">👋</span>
                </p>
            </div>
            <div className="pln-user-menu">
                <button
                    type="button"
                    className="pln-notification"
                    aria-label="3 notifikasi baru"
                >
                    <Bell />
                    <b>3</b>
                </button>
                <span className="pln-header-divider" />
                <span className="pln-avatar" aria-label="Avatar Andi Pratama">
                    AP
                </span>
                <span className="pln-user-name">
                    <strong>Andi Pratama</strong>
                    <small>Mahasiswa</small>
                </span>
                <ChevronDown aria-hidden="true" />
            </div>
        </header>
    );
}

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard Student" />
            <div className="pln-dashboard">
                <AppHeader />
                <section
                    className="pln-status-hero"
                    aria-labelledby="status-title"
                >
                    <GraduationArtwork />
                    <div className="pln-status-copy">
                        <h2 id="status-title">Status Pendaftaran Beasiswa</h2>
                        <span>Tahap Saat Ini:</span>
                        <strong className="pln-stage-pill">
                            <FileCheck2 />
                            Seleksi Berkas
                        </strong>
                        <p>
                            Lengkapi data dan unggah seluruh dokumen
                            <br />
                            untuk melanjutkan ke tahap berikutnya.
                        </p>
                    </div>
                    <div className="pln-hero-divider" />
                    <div className="pln-hero-completion">
                        <h3>Kelengkapan Pendaftaran</h3>
                        <ProgressRing value={63} />
                    </div>
                    <button type="button" className="pln-hero-cta">
                        Lengkapi Data <ChevronRight />
                    </button>
                </section>
                <section
                    className="pln-card pln-timeline-card"
                    aria-labelledby="timeline-title"
                >
                    <h2 id="timeline-title">Tahapan Seleksi Beasiswa</h2>
                    <ol className="pln-timeline">
                        {steps.map(
                            ({ label, status, state, icon: Icon }, index) => (
                                <li className={'is-' + state} key={label}>
                                    <span className="pln-step-icon">
                                        <Icon />
                                    </span>
                                    <b>{index + 1}</b>
                                    <strong>{label}</strong>
                                    <em>{status}</em>
                                </li>
                            ),
                        )}
                    </ol>
                </section>
                <section className="pln-dashboard-grid">
                    <div className="pln-card pln-completion-card">
                        <div className="pln-completion-panel">
                            <div className="pln-card-title">
                                <h2>Kelengkapan Profil</h2>
                                <ProgressRing value={75} />
                            </div>
                            <h3>Data Diri</h3>
                            <CompletionList items={profileItems} />
                        </div>
                        <div className="pln-completion-panel pln-document-panel">
                            <div className="pln-card-title">
                                <h2>Kelengkapan Berkas</h2>
                                <ProgressRing value={50} />
                            </div>
                            <h3>Dokumen</h3>
                            <CompletionList items={documentItems} />
                            <button type="button" className="pln-outline-cta">
                                Lihat Semua Berkas <ChevronRight />
                            </button>
                        </div>
                    </div>
                    <aside className="pln-side-cards">
                        <section className="pln-card pln-action-card">
                            <h2>
                                <span className="pln-title-icon is-yellow">
                                    <ListTodo />
                                </span>
                                Yang Harus Dilakukan
                            </h2>
                            <ul>
                                {[
                                    'Lengkapi alamat dan program studi',
                                    'Upload transkrip / rapor',
                                    'Upload surat keterangan',
                                ].map((task) => (
                                    <li key={task}>
                                        <FileText />
                                        <span>{task}</span>
                                        <ChevronRight />
                                    </li>
                                ))}
                            </ul>
                        </section>
                        <section className="pln-card pln-info-card">
                            <h2>
                                <span className="pln-title-icon is-blue">
                                    <Info />
                                </span>
                                Informasi
                            </h2>
                            <ul>
                                <li>
                                    <CalendarDays />
                                    <span>
                                        Batas akhir pengumpulan berkas:
                                        <strong>20 September 2026</strong>
                                    </span>
                                </li>
                                <li>
                                    <Clock3 />
                                    <span>
                                        Tes online akan dibuka setelah berkas
                                        dinyatakan lengkap
                                    </span>
                                </li>
                                <li>
                                    <ShieldCheck />
                                    <span>
                                        Pastikan seluruh data diisi dengan benar
                                        dan dokumen terbaca dengan jelas
                                    </span>
                                </li>
                            </ul>
                        </section>
                    </aside>
                </section>
            </div>
        </>
    );
}

Dashboard.layout = { breadcrumbs: [{ title: 'Dashboard', href: dashboard() }] };
