import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    Bell,
    Building2,
    Check,
    ChevronDown,
    FileText,
    GraduationCap,
    Info,
    Mail,
    Map,
    ShieldCheck,
    UserRound,
} from 'lucide-react';
import { dashboard } from '@/routes';

const participantColumns = [
    [
        ['Nama', 'Andi Pratama', UserRound],
        ['Nomor Pendaftaran', 'PLN-BEA-2026-00128', FileText],
        ['Asal Institusi', 'Politeknik Elektronika Negeri Surabaya', Building2],
    ],
    [
        ['Program Studi', 'Teknik Informatika', GraduationCap],
        ['Program', 'Beasiswa PLN 2026', ShieldCheck],
        ['Status Akhir', 'Lolos', ShieldCheck],
    ],
] as const;

const stages = [
    'Pendaftaran',
    'Seleksi Berkas',
    'Tes Online',
    'Interview',
    'Pengumuman',
];

function PageHeader() {
    return (
        <header className="mb-[19px] flex items-start justify-between">
            <div>
                <h1 className="m-0 text-[24px] leading-[1.2] font-extrabold tracking-[-.5px] text-[#0b1b3a]">
                    Pengumuman Seleksi
                </h1>
                <p className="mt-1 text-[15px] text-[#344563]">
                    Hasil akhir proses seleksi Beasiswa PLN.
                </p>
            </div>
            <div className="hidden items-center gap-3.5 md:flex">
                <span className="grid size-[54px] place-items-center rounded-full border-[3px] border-[#e9eff6] bg-[linear-gradient(145deg,#fad2b6_0_35%,#1268a8_36%_65%,#24304a_66%)] text-[15px] font-extrabold text-white">
                    AP
                </span>
                <span className="grid min-w-[105px] gap-[3px]">
                    <strong className="font-heading text-base text-[#0b1b3a]">
                        Andi Pratama
                    </strong>
                    <small className="text-[13px] text-[#61708b]">
                        Mahasiswa
                    </small>
                </span>
                <ChevronDown
                    className="size-5 text-[#1e406b]"
                    aria-hidden="true"
                />
            </div>
        </header>
    );
}

function SelectionBadge() {
    return (
        <div className="relative grid size-[188px] place-items-center">
            <div className="absolute inset-0 rounded-full border border-[#dbeaf9] opacity-70" />
            <div className="absolute inset-[14px] rounded-full border border-[#dbeaf9] opacity-70" />
            <div className="relative grid size-[101px] place-items-center rounded-full bg-[#0874c8] shadow-[0_7px_14px_rgba(0,91,159,.2)]">
                <Check className="size-[63px] stroke-[4] text-white" />
            </div>
            <span className="absolute bottom-[2px] text-[39px] leading-none text-[#ffcf00]">
                ϟ
            </span>
            <span className="absolute bottom-[13px] left-[25px] rotate-[22deg] text-[48px] leading-none text-[#167bd0]">
                ❯
            </span>
            <span className="absolute right-[22px] bottom-[13px] -scale-x-100 -rotate-[22deg] text-[48px] leading-none text-[#167bd0]">
                ❯
            </span>
        </div>
    );
}

function ResultHero() {
    return (
        <section className="relative grid min-h-[231px] overflow-hidden rounded-[11px] border border-[#c8e0fa] bg-[linear-gradient(115deg,#edf7ff,#f7fbff_58%,#eaf4ff)] px-[28px] py-[25px] shadow-[0_3px_12px_rgba(25,83,136,.05)] md:grid-cols-[224px_minmax(0,1fr)_260px] md:items-center md:gap-3">
            <div className="hidden justify-items-center md:grid">
                <SelectionBadge />
            </div>
            <div className="relative z-[1] border-l-0 md:border-l-2 md:border-[#f4c900] md:pl-[34px]">
                <p className="m-0 text-[14px] font-bold text-[#0069bf]">
                    PENGUMUMAN HASIL SELEKSI
                </p>
                <h2 className="mt-[10px] text-[25px] leading-none font-extrabold text-[#0b1b3a]">
                    Selamat, Andi Pratama!
                </h2>
                <p className="mt-[17px] text-[19px] font-semibold text-[#0b1b3a]">
                    Anda dinyatakan{' '}
                    <strong className="font-heading text-[#0874c8]">
                        LOLOS
                    </strong>{' '}
                    sebagai penerima Beasiswa PLN 2026.
                </p>
                <p className="mt-[18px] max-w-[675px] text-[14px] leading-[1.55] text-[#344563]">
                    Terima kasih telah mengikuti seluruh rangkaian proses
                    seleksi. Berdasarkan hasil evaluasi akhir, Anda dinyatakan
                    berhasil menyelesaikan seluruh tahapan seleksi dan terpilih
                    sebagai penerima Beasiswa PLN 2026.
                </p>
            </div>
            <div className="relative z-[1] mt-5 flex justify-center md:mt-0">
                <span className="font-heading inline-flex items-center gap-4 rounded-full bg-[#0874c8] px-[27px] py-[15px] text-[17px] font-bold text-white shadow-[0_5px_12px_rgba(0,91,159,.18)]">
                    <span className="grid size-[22px] place-items-center rounded-full bg-white text-[#0874c8]">
                        <Check className="size-4 stroke-[3]" />
                    </span>
                    LOLOS SELEKSI
                </span>
            </div>
            <div className="pointer-events-none absolute -right-4 -bottom-[55px] hidden h-[220px] w-[370px] rotate-[-8deg] border-[2px] border-[#d5e8fb] opacity-60 md:block" />
        </section>
    );
}

function ParticipantInfo() {
    return (
        <section className="mt-4 rounded-[11px] border border-[#e6edf4] bg-white px-[21px] py-[15px] shadow-[0_3px_11px_rgba(26,66,108,.07)]">
            <h2 className="flex items-center gap-3 text-[17px] font-extrabold text-[#0b1b3a]">
                <UserRound className="size-[21px] text-[#0874c8]" />
                Informasi Peserta
            </h2>
            <div className="mt-[7px] grid md:grid-cols-2 md:divide-x md:divide-[#e2eaf2]">
                {participantColumns.map((column, columnIndex) => (
                    <div
                        className={
                            columnIndex === 1 ? 'md:pl-[38px]' : 'md:pr-[27px]'
                        }
                        key={columnIndex}
                    >
                        {column.map(([label, value, Icon]) => (
                            <div
                                className="grid min-h-[41px] grid-cols-[28px_193px_minmax(0,1fr)] items-center border-b border-[#e5ebf2] last:border-0"
                                key={label}
                            >
                                <Icon className="size-[19px] text-[#126dcc]" />
                                <span className="text-[13px] text-[#23385d]">
                                    {label}
                                </span>
                                {label === 'Status Akhir' ? (
                                    <span className="w-fit rounded-full border border-[#cbead3] bg-[#eaf8ed] px-[17px] py-[5px] text-[13px] font-semibold text-[#24934c]">
                                        {value}
                                    </span>
                                ) : (
                                    <strong className="text-[13px] text-[#10254b]">
                                        {value}
                                    </strong>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}

function SelectionJourney() {
    return (
        <section className="mt-4 rounded-[11px] border border-[#e6edf4] bg-white px-[21px] py-[17px] shadow-[0_3px_11px_rgba(26,66,108,.07)]">
            <h2 className="flex items-center gap-3 text-[17px] font-extrabold text-[#0b1b3a]">
                <Map className="size-[21px] text-[#0874c8]" />
                Perjalanan Seleksi Anda
            </h2>
            <div className="relative mt-[15px] grid grid-cols-5">
                <div className="absolute top-[19px] right-[7.7%] left-[7.7%] h-0.5 bg-[#1d9b48]" />
                <div className="absolute top-[19px] right-[7.7%] h-0.5 w-[7.7%] bg-[#126dcc]" />
                {stages.map((stage, stageIndex) => (
                    <div
                        className="relative z-[1] grid justify-items-center gap-[9px] text-center"
                        key={stage}
                    >
                        <span
                            className={
                                'grid size-[37px] place-items-center rounded-full border-2 bg-white ' +
                                (stageIndex === stages.length - 1
                                    ? 'border-[#1475d0] text-[#1475d0]'
                                    : 'border-[#209b4b] text-[#209b4b]')
                            }
                        >
                            <Check className="size-[21px] stroke-[2.5]" />
                        </span>
                        <span
                            className={
                                stageIndex === stages.length - 1
                                    ? 'text-[13px] font-semibold text-[#126dcc]'
                                    : 'text-[13px] text-[#132650]'
                            }
                        >
                            {stage}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

function NextSteps() {
    return (
        <section className="mt-4 rounded-[11px] border border-[#e6edf4] bg-white px-[21px] py-[16px] shadow-[0_3px_11px_rgba(26,66,108,.07)]">
            <h2 className="flex items-center gap-3 text-[17px] font-extrabold text-[#0b1b3a]">
                <Info className="size-[21px] rounded bg-[#0874c8] p-[2px] text-white" />
                Informasi Selanjutnya
            </h2>
            <p className="mt-[8px] text-[13px] text-[#23385d]">
                Informasi mengenai administrasi penerimaan dan tahapan
                selanjutnya akan disampaikan melalui email yang terdaftar pada
                akun Anda.
            </p>
            <div className="mt-[14px] grid items-center gap-4 lg:grid-cols-[1fr_1fr_1fr_293px]">
                <div className="flex items-center gap-4 border-r border-[#e0e8f1] pr-4 text-[13px] text-[#132650]">
                    <Mail className="size-[25px] shrink-0 text-[#0b1b3a]" />
                    <span>
                        Pastikan email dan nomor
                        <br />
                        telepon Anda aktif
                    </span>
                </div>
                <div className="flex items-center gap-4 border-r border-[#e0e8f1] pr-4 text-[13px] text-[#132650]">
                    <Bell className="size-[25px] shrink-0 text-[#0b1b3a]" />
                    <span>
                        Periksa informasi terbaru
                        <br />
                        secara berkala
                    </span>
                </div>
                <div className="flex items-center gap-4 text-[13px] text-[#132650]">
                    <FileText className="size-[25px] shrink-0 text-[#0b1b3a]" />
                    <span>Simpan nomor pendaftaran Anda</span>
                </div>
                <Link
                    href={dashboard()}
                    className="inline-flex h-[51px] items-center justify-center gap-5 rounded-[7px] bg-[#0874c8] text-[16px] font-bold text-white no-underline shadow-[0_4px_10px_rgba(0,91,159,.16)]"
                >
                    <ArrowRight className="size-[24px]" />
                    Kembali ke Dashboard
                </Link>
            </div>
        </section>
    );
}

export default function Announcement() {
    return (
        <>
            <Head title="Pengumuman Seleksi" />
            <div className="relative z-[1] mx-auto w-full max-w-[1440px] overflow-x-clip px-[clamp(16px,2.4vw,34px)] pt-[25px] pb-[52px]">
                <PageHeader />
                <ResultHero />
                <ParticipantInfo />
            </div>
        </>
    );
}
