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

const ringClasses = {
    hero: 'grid size-[126px] place-items-center rounded-full bg-[radial-gradient(closest-side,#0070bf_75%,transparent_76%_100%),conic-gradient(#fff_63%,rgba(255,255,255,.33)_0)] text-[34px] font-extrabold text-white lg:size-[108px] lg:text-[29px] xl:size-[126px] xl:text-[34px]',
    card75: 'grid size-[52px] place-items-center rounded-full bg-[radial-gradient(closest-side,#fff_73%,transparent_74%_100%),conic-gradient(#0874c5_75%,#e8eef5_0)] text-sm font-extrabold text-[#1d3157]',
    card50: 'grid size-[52px] place-items-center rounded-full bg-[radial-gradient(closest-side,#fff_73%,transparent_74%_100%),conic-gradient(#0874c5_50%,#e8eef5_0)] text-sm font-extrabold text-[#1d3157]',
};

function ProgressRing({
    variant,
    value,
}: {
    variant: keyof typeof ringClasses;
    value: number;
}) {
    return <span className={ringClasses[variant]}>{value}%</span>;
}

function GraduationArtwork() {
    return (
        <svg
            className="h-auto w-[min(100%,296px)] self-end justify-self-center [grid-area:art] lg:w-[min(100%,250px)] xl:w-[296px]"
            viewBox="0 0 300 190"
            aria-hidden="true"
        >
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
        <ul className="grid gap-[9px] px-[9px] max-sm:px-0">
            {items.map(({ label, icon: Icon, complete }) => (
                <li
                    className="grid min-h-[23px] min-w-0 grid-cols-[17px_minmax(0,1fr)_15px_auto] items-center gap-[9px] text-xs text-[#182a4a] max-sm:grid-cols-[17px_minmax(0,1fr)_15px]"
                    key={label}
                >
                    <Icon
                        className="size-[15px] stroke-[1.6] text-[#3f5271]"
                        aria-hidden="true"
                    />
                    <span className="min-w-0 break-words">{label}</span>
                    {complete ? (
                        <CheckCircle2
                            className="size-[15px] text-[#0aa34d]"
                            aria-label="Sudah diisi"
                        />
                    ) : (
                        <span
                            className="text-sm text-[#f5b700]"
                            aria-label="Belum diisi"
                        >
                            ▲
                        </span>
                    )}
                    <em className="min-w-[83px] text-xs whitespace-nowrap text-[#172b4d] not-italic max-sm:hidden">
                        {complete ? 'Sudah diisi' : 'Belum diisi'}
                    </em>
                </li>
            ))}
        </ul>
    );
}

function AppHeader() {
    return (
        <header className="mb-6 flex min-h-[57px] items-center justify-between max-sm:items-start">
            <div>
                <h1 className="mb-[9px] text-[25px] leading-none font-extrabold tracking-[-.65px] max-sm:text-[23px]">
                    Dashboard Student
                </h1>
                <p className="m-0 text-lg text-[#3d5074] max-sm:text-[15px]">
                    Selamat datang,{' '}
                    <strong className="text-[#096bc2]">Andi Pratama</strong>{' '}
                    <span aria-hidden="true">👋</span>
                </p>
            </div>
            <div className="flex items-center gap-3.5 max-sm:hidden">
                <button
                    type="button"
                    className="relative border-0 bg-transparent text-[#1e365c] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#1686ce]/45"
                    aria-label="3 notifikasi baru"
                >
                    <Bell className="size-7 stroke-[1.6]" />
                    <b className="absolute -top-1.5 -right-2 grid size-[17px] place-items-center rounded-full bg-[#f0444d] text-[10px] text-white">
                        3
                    </b>
                </button>
                <span className="mx-2 h-[54px] w-px bg-[#dbe5ef]" />
                <span
                    className="grid size-[54px] place-items-center rounded-full border-[3px] border-[#e9eff6] bg-[linear-gradient(145deg,#fad2b6_0_35%,#1268a8_36%_65%,#24304a_66%)] text-[15px] font-extrabold text-white"
                    aria-label="Avatar Andi Pratama"
                >
                    AP
                </span>
                <span className="grid min-w-[104px] gap-[3px]">
                    <strong className="text-base">Andi Pratama</strong>
                    <small className="text-[13px] text-[#61708b]">
                        Mahasiswa
                    </small>
                </span>
                <ChevronDown
                    className="w-5 text-[#1e406b]"
                    aria-hidden="true"
                />
            </div>
        </header>
    );
}

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard Student" />
            <div className="mx-auto w-full max-w-[1440px] overflow-x-clip px-[clamp(16px,2.4vw,34px)] pt-[25px] pb-8">
                <AppHeader />
                <section className="grid min-h-[230px] grid-cols-1 gap-5 overflow-hidden rounded-[10px] bg-[linear-gradient(112deg,#0064b4,#007bc9_55%,#0064b4)] p-[18px] text-center text-white shadow-[0_7px_17px_rgba(0,80,150,.17)] [grid-template-areas:'art'_'copy'_'completion'_'action'] sm:grid-cols-[minmax(180px,.7fr)_minmax(0,1.3fr)] sm:gap-5 sm:text-left sm:[grid-template-areas:'art_copy'_'completion_action'] lg:grid-cols-[minmax(190px,.7fr)_minmax(0,1.15fr)_minmax(160px,.55fr)] lg:gap-x-5 lg:gap-y-0 lg:[grid-template-areas:'art_copy_completion'_'art_action_completion'] xl:grid-cols-[312px_minmax(290px,1fr)_1px_225px_205px] xl:gap-0 xl:p-0 xl:[grid-template-areas:'art_copy_divider_completion_action']">
                    <GraduationArtwork />
                    <div className="min-w-0 self-center pb-0 text-left [grid-area:copy] max-sm:text-center xl:pb-1">
                        <h2 className="mb-5 text-[17px] font-bold max-sm:mb-[13px]">
                            Status Pendaftaran Beasiswa
                        </h2>
                        <span className="mb-[9px] block text-sm">
                            Tahap Saat Ini:
                        </span>
                        <strong className="inline-flex items-center gap-3 rounded-[22px] bg-white px-[21px] py-3 text-[22px] leading-none text-[#0062b8] shadow-[0_4px_8px_rgba(0,45,94,.16)]">
                            <FileCheck2 className="w-[25px]" />
                            Seleksi Berkas
                        </strong>
                        <p className="mt-[17px] text-sm leading-[1.5]">
                            Lengkapi data dan unggah seluruh dokumen untuk
                            melanjutkan ke tahap berikutnya.
                        </p>
                    </div>
                    <div className="hidden h-[174px] bg-white/25 [grid-area:divider] xl:block" />
                    <div className="grid justify-items-center gap-4 self-center [grid-area:completion]">
                        <h3 className="m-0 text-[15px]">
                            Kelengkapan Pendaftaran
                        </h3>
                        <ProgressRing variant="hero" value={63} />
                    </div>
                    <button
                        type="button"
                        className="inline-flex h-[41px] w-full items-center justify-center gap-[30px] self-center rounded-[5px] border-0 bg-white text-[15px] font-bold text-[#0060b7] shadow-none [grid-area:action] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white/70 xl:ml-[9px] xl:w-[194px]"
                    >
                        Lengkapi Data <ChevronRight className="w-[21px]" />
                    </button>
                </section>
                <section
                    className="mt-3.5 min-h-[220px] rounded-[10px] border border-[#e6edf4] bg-white p-5 shadow-[0_3px_10px_rgba(26,66,108,.08)]"
                    aria-labelledby="timeline-title"
                >
                    <h2
                        id="timeline-title"
                        className="text-[17px] font-extrabold tracking-[-.3px]"
                    >
                        Tahapan Seleksi Beasiswa
                    </h2>
                    <div className="relative mt-[18px]">
                        <span
                            className="absolute top-[30px] right-[8%] left-[8%] hidden h-[3px] bg-[repeating-linear-gradient(90deg,#d7e0eb_0_8px,transparent_8px_13px)] xl:block"
                            aria-hidden="true"
                        />
                        <span
                            className="absolute top-[30px] left-[8%] hidden h-[3px] w-[28%] bg-[#0873c6] xl:block"
                            aria-hidden="true"
                        />
                        <ol className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-x-3 sm:gap-y-6 xl:grid-cols-5">
                            {steps.map(
                                (
                                    { label, status, state, icon: Icon },
                                    index,
                                ) => {
                                    const isComplete = state === 'complete';
                                    const isActive = state === 'active';
                                    return (
                                        <li
                                            className={
                                                'relative z-[1] grid min-w-0 grid-cols-[61px_minmax(0,1fr)] items-center gap-x-3 rounded-lg bg-[#f8fafc] p-2.5 text-left text-[#0d1d3e] sm:min-h-[140px] sm:grid-cols-1 sm:justify-items-center sm:gap-0 sm:bg-transparent sm:p-1 sm:text-center'
                                            }
                                            key={label}
                                        >
                                            <span
                                                className={
                                                    'grid size-[61px] place-items-center rounded-full ' +
                                                    (isComplete
                                                        ? 'border-2 border-[#12a050] bg-[#ecf9f1] text-[#109a4d]'
                                                        : isActive
                                                          ? 'bg-[#0874c5] text-white shadow-[0_8px_14px_rgba(0,109,184,.24)]'
                                                          : 'bg-[#f0f2f5] text-[#47556f]')
                                                }
                                            >
                                                <Icon className="size-[27px] stroke-[1.6]" />
                                            </span>
                                            <b className="hidden sm:mt-2 sm:block sm:text-sm">
                                                {index + 1}
                                            </b>
                                            <strong className="min-w-0 text-[13px] font-semibold break-words sm:mt-1.5 sm:min-h-[30px]">
                                                {label}
                                            </strong>
                                            <em
                                                className={
                                                    'col-start-2 mt-[-10px] rounded-2xl px-5 py-1.5 text-xs whitespace-normal not-italic sm:col-auto sm:mt-1 sm:whitespace-nowrap ' +
                                                    (isComplete
                                                        ? 'border border-[#a6e0bd] bg-[#e9f8ef] text-[#087f38]'
                                                        : isActive
                                                          ? 'border border-[#9ac9fa] bg-[#eaf4ff] text-[#1164b8]'
                                                          : 'bg-[#f1f3f6] text-[#52617a]')
                                                }
                                            >
                                                {status}
                                            </em>
                                        </li>
                                    );
                                },
                            )}
                        </ol>
                    </div>
                </section>
                <section className="mt-[15px] grid grid-cols-1 gap-3.5 xl:grid-cols-[minmax(0,2fr)_minmax(306px,.92fr)]">
                    <div className="grid grid-cols-1 gap-[22px] rounded-[10px] border border-[#e6edf4] bg-white p-[14px_20px] shadow-[0_3px_10px_rgba(26,66,108,.08)] lg:grid-cols-2 lg:gap-0">
                        <div className="min-w-0 px-[3px] pb-0 lg:pr-3.5">
                            <div className="mb-2.5 flex items-center justify-between">
                                <h2 className="text-[17px] font-extrabold tracking-[-.3px]">
                                    Kelengkapan Profil
                                </h2>
                                <ProgressRing variant="card75" value={75} />
                            </div>
                            <h3 className="mb-[11px] rounded-[7px] bg-gradient-to-r from-[#e8f3ff] to-[#f0f7ff] p-[11px_14px] text-sm font-bold text-[#0061b8]">
                                Data Diri
                            </h3>
                            <CompletionList items={profileItems} />
                        </div>
                        <div className="min-w-0 border-t-2 border-[#e6edf4] px-[3px] pt-[22px] lg:border-t-0 lg:border-l-2 lg:pt-0 lg:pl-[22px]">
                            <div className="mb-2.5 flex items-center justify-between">
                                <h2 className="text-[17px] font-extrabold tracking-[-.3px]">
                                    Kelengkapan Berkas
                                </h2>
                                <ProgressRing variant="card50" value={50} />
                            </div>
                            <h3 className="mb-[11px] rounded-[7px] bg-gradient-to-r from-[#e8f3ff] to-[#f0f7ff] p-[11px_14px] text-sm font-bold text-[#0061b8]">
                                Dokumen
                            </h3>
                            <CompletionList items={documentItems} />
                            <button
                                type="button"
                                className="mt-7 flex h-[47px] w-full items-center justify-center gap-[35px] rounded-[7px] border border-[#1475d0] bg-white text-sm font-bold text-[#0065c1] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#1686ce]/45"
                            >
                                Lihat Semua Berkas{' '}
                                <ChevronRight className="w-[21px]" />
                            </button>
                        </div>
                    </div>
                    <aside className="grid grid-cols-1 gap-3 xl:grid-rows-[153px_minmax(0,1fr)]">
                        <section className="min-w-0 rounded-[10px] border border-[#e6edf4] bg-white p-[14px_18px] shadow-[0_3px_10px_rgba(26,66,108,.08)]">
                            <h2 className="flex items-center gap-3 text-[17px] font-extrabold tracking-[-.3px]">
                                <span className="grid size-[34px] place-items-center rounded-full bg-[#ffbf00] text-white">
                                    <ListTodo className="w-[21px]" />
                                </span>
                                Yang Harus Dilakukan
                            </h2>
                            <ul className="mt-3.5 grid gap-[11px] pl-[41px]">
                                <li className="grid min-w-0 grid-cols-[17px_minmax(0,1fr)_18px] items-center gap-2.5 text-[13px] text-[#1b2c4c]">
                                    <FileText className="w-[15px] text-[#3a5274]" />
                                    <span className="break-words">
                                        Lengkapi alamat dan program studi
                                    </span>
                                    <ChevronRight className="text-[#ffb800]" />
                                </li>
                                <li className="grid min-w-0 grid-cols-[17px_minmax(0,1fr)_18px] items-center gap-2.5 text-[13px] text-[#1b2c4c]">
                                    <FileText className="w-[15px] text-[#3a5274]" />
                                    <span>Upload transkrip / rapor</span>
                                    <ChevronRight className="text-[#ffb800]" />
                                </li>
                                <li className="grid min-w-0 grid-cols-[17px_minmax(0,1fr)_18px] items-center gap-2.5 text-[13px] text-[#1b2c4c]">
                                    <FileText className="w-[15px] text-[#3a5274]" />
                                    <span>Upload surat keterangan</span>
                                    <ChevronRight className="text-[#ffb800]" />
                                </li>
                            </ul>
                        </section>
                        <section className="min-w-0 rounded-[10px] border border-[#e6edf4] bg-white p-[14px_18px] shadow-[0_3px_10px_rgba(26,66,108,.08)]">
                            <h2 className="flex items-center gap-3 text-[17px] font-extrabold tracking-[-.3px]">
                                <span className="grid size-[34px] place-items-center rounded-full bg-[#0874c5] text-white">
                                    <Info className="w-[21px]" />
                                </span>
                                Informasi
                            </h2>
                            <ul className="mt-3 grid gap-3">
                                <li className="grid grid-cols-[30px_minmax(0,1fr)] gap-2.5 text-[13px] leading-[1.35] text-[#203253]">
                                    <CalendarDays className="size-[27px] stroke-[1.55] text-[#455b7d]" />
                                    <span>
                                        Batas akhir pengumpulan berkas:
                                        <strong className="block text-[#13274a]">
                                            20 September 2026
                                        </strong>
                                    </span>
                                </li>
                                <li className="grid grid-cols-[30px_minmax(0,1fr)] gap-2.5 text-[13px] leading-[1.35] text-[#203253]">
                                    <Clock3 className="size-[27px] stroke-[1.55] text-[#455b7d]" />
                                    <span>
                                        Tes online akan dibuka setelah berkas
                                        dinyatakan lengkap
                                    </span>
                                </li>
                                <li className="grid grid-cols-[30px_minmax(0,1fr)] gap-2.5 text-[13px] leading-[1.35] text-[#203253]">
                                    <ShieldCheck className="size-[27px] stroke-[1.55] text-[#455b7d]" />
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
