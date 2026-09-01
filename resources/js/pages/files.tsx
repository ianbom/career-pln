import { Head } from '@inertiajs/react';
import {
    ArrowLeft,
    ArrowRight,
    Award,
    CalendarDays,
    CheckCircle2,
    ChevronDown,
    Circle,
    Clock3,
    Download,
    FileText,
    GraduationCap,
    IdCard,
    Image,
    MoreVertical,
    Save,
    ShieldCheck,
    UploadCloud,
} from 'lucide-react';
import { useState } from 'react';

const steps = [
    'Data Pribadi',
    'Identitas',
    'Akademik',
    'Dokumen Pendukung',
    'Review & Submit',
];

const documents = [
    {
        title: 'CV (Curriculum Vitae) *',
        filename: 'CV_Ardiansyah_Putra.pdf',
        size: '542 KB',
        icon: FileText,
        iconClass: 'bg-[#377fe1]',
    },
    {
        title: 'KTP *',
        filename: 'KTP_Ardiansyah_Putra.jpg',
        size: '1.2 MB',
        icon: IdCard,
        iconClass: 'bg-[#35bbd3]',
    },
    {
        title: 'Ijazah Terakhir *',
        filename: 'Ijazah_SMA_Ardiansyah.jpg',
        size: '1.6 MB',
        icon: GraduationCap,
        iconClass: 'bg-[#8a45d7]',
    },
    {
        title: 'Transkrip Nilai *',
        filename: 'Transkrip_SMA_Ardiansyah.pdf',
        size: '874 KB',
        icon: FileText,
        iconClass: 'bg-[#f59a00]',
    },
    {
        title: 'Pas Foto *',
        filename: 'PasFoto_Ardiansyah.jpg',
        size: '512 KB',
        icon: Image,
        iconClass: 'bg-[#23b2c7]',
    },
    {
        title: 'Sertifikat Pendukung',
        filename: 'Sertifikat_Lomba_Nasional.pdf',
        size: '645 KB',
        icon: Award,
        iconClass: 'bg-[#f5b900]',
        optional: true,
    },
];

const completeness = [
    { label: 'Data Pribadi', status: 'Lengkap', state: 'complete' },
    { label: 'Identitas', status: 'Belum lengkap', state: 'incomplete' },
    { label: 'Akademik', status: 'Belum lengkap', state: 'incomplete' },
    { label: 'Dokumen Pendukung', status: 'Lengkap', state: 'complete' },
    { label: 'Review & Submit', status: 'Belum mulai', state: 'pending' },
] as const;

function Field({
    label,
    value,
    children,
}: {
    label: string;
    value?: string;
    children?: React.ReactNode;
}) {
    return (
        <label className="block">
            <span className="mb-2 block text-[13px] font-semibold text-[#334360]">
                {label}
            </span>
            {children ?? (
                <input
                    value={value}
                    readOnly
                    className="h-[42px] w-full rounded-md border border-[#d9e0ea] bg-white px-3.5 text-[13px] text-[#53657f] outline-none"
                />
            )}
        </label>
    );
}

function StatusIcon({
    state,
}: {
    state: (typeof completeness)[number]['state'];
}) {
    if (state === 'complete') {
        return <CheckCircle2 className="size-[18px] text-[#1ca66b]" />;
    }

    if (state === 'incomplete') {
        return <Clock3 className="size-[18px] text-[#ff9800]" />;
    }

    return <Circle className="size-[18px] text-[#aab4c4]" />;
}

export default function Files() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <>
            <Head title="Berkas" />
            <div className="mx-auto w-full max-w-[1440px] overflow-x-clip px-[clamp(16px,2.4vw,34px)] pt-[25px] pb-8">
                <header className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                        <h1 className="text-[30px] font-extrabold tracking-[-0.65px] text-[#14233f] max-sm:text-[25px]">
                            Berkas
                        </h1>
                        <p className="mt-2 text-[15px] text-[#64728a] max-sm:text-[13px]">
                            Lengkapi data dan unggah berkas secara bertahap.
                            Pastikan semua informasi sesuai dan dokumen jelas.
                        </p>
                    </div>
                    <div className="w-full max-w-[410px] pt-2">
                        <div className="mb-3 flex items-center justify-between text-[14px]">
                            <span className="font-bold text-[#126ed4]">
                                75%
                            </span>
                            <span className="font-semibold text-[#2475cc]">
                                lengkap
                            </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-[#e7e9ed]">
                            <div className="h-full w-3/4 rounded-full bg-[#2477db]" />
                        </div>
                    </div>
                </header>

                <div className="mt-7 grid gap-5 xl:grid-cols-[minmax(0,1fr)_310px]">
                    <section className="overflow-hidden rounded-[10px] border border-[#e2e8f0] bg-white shadow-[0_3px_10px_rgba(26,66,108,.08)]">
                        <div className="flex overflow-x-auto border-b border-[#e2e8f0] px-4">
                            {steps.map((step, index) => {
                                const active = activeStep === index;

                                return (
                                    <button
                                        type="button"
                                        key={step}
                                        onClick={() => setActiveStep(index)}
                                        className={
                                            'relative flex shrink-0 items-center gap-2.5 px-4 py-[18px] text-[13px] font-semibold transition-colors sm:px-5 ' +
                                            (active
                                                ? 'text-[#1c73d7]'
                                                : 'text-[#718097] hover:text-[#3d5e8e]')
                                        }
                                    >
                                        <span
                                            className={
                                                'grid size-[23px] place-items-center rounded-full text-[11px] ' +
                                                (active
                                                    ? 'bg-[#2679db] text-white'
                                                    : 'bg-[#f0f2f5] text-[#6f7b8f]')
                                            }
                                        >
                                            {index + 1}
                                        </span>
                                        {step}
                                        {active && (
                                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#1674e2]" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="p-5 sm:p-6">
                            <h2 className="text-[19px] font-extrabold tracking-[-.3px] text-[#20314d]">
                                Data Pribadi
                            </h2>
                            <p className="mt-1.5 text-[13px] text-[#7a879b]">
                                Lengkapi informasi diri sesuai dengan identitas
                                resmi.
                            </p>

                            <div className="mt-5 grid gap-x-5 gap-y-4 md:grid-cols-2">
                                <Field
                                    label="Nama Lengkap"
                                    value="Ardiansyah Putra"
                                />
                                <Field label="Tanggal Lahir">
                                    <div className="relative">
                                        <input
                                            value="14/05/2003"
                                            readOnly
                                            className="h-[42px] w-full rounded-md border border-[#d9e0ea] bg-white px-3.5 pr-10 text-[13px] text-[#53657f] outline-none"
                                        />
                                        <CalendarDays className="absolute top-1/2 right-3.5 size-[18px] -translate-y-1/2 text-[#718097]" />
                                    </div>
                                </Field>
                                <Field label="Jenis Kelamin">
                                    <div className="relative">
                                        <select className="h-[42px] w-full appearance-none rounded-md border border-[#d9e0ea] bg-white px-3.5 pr-10 text-[13px] text-[#53657f] outline-none">
                                            <option>Laki-laki</option>
                                        </select>
                                        <ChevronDown className="pointer-events-none absolute top-1/2 right-3.5 size-[18px] -translate-y-1/2 text-[#53657f]" />
                                    </div>
                                </Field>
                                <Field label="Alamat Lengkap">
                                    <div>
                                        <textarea
                                            value="Jl. Mawar No. 12, RT 03/RW 05, Kel. Sukamaju, Kec. Cicendo, Kota Bandung, Jawa Barat 40175"
                                            readOnly
                                            className="h-[76px] w-full resize-none rounded-md border border-[#d9e0ea] bg-white px-3.5 py-2.5 text-[13px] leading-[1.35] text-[#53657f] outline-none"
                                        />
                                        <span className="mt-1 block text-right text-[10px] text-[#92a0b4]">
                                            87 / 200
                                        </span>
                                    </div>
                                </Field>
                            </div>

                            <div className="mt-5 grid gap-4 md:grid-cols-2">
                                {documents.map(
                                    ({
                                        title,
                                        filename,
                                        size,
                                        icon: Icon,
                                        iconClass,
                                        optional,
                                    }) => (
                                        <article
                                            key={title}
                                            className="flex min-w-0 items-center gap-3.5 rounded-[8px] border border-[#e0e6ef] bg-white p-3 shadow-[0_1px_3px_rgba(22,47,84,.025)]"
                                        >
                                            <span
                                                className={
                                                    'grid size-[44px] shrink-0 place-items-center rounded-md text-white ' +
                                                    iconClass
                                                }
                                            >
                                                <Icon className="size-[23px] stroke-[1.8]" />
                                            </span>
                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="truncate text-[13px] font-bold text-[#34425a]">
                                                        {title}
                                                    </h3>
                                                    <span
                                                        className={
                                                            optional
                                                                ? 'rounded bg-[#e9f4ff] px-1.5 py-0.5 text-[9px] font-bold text-[#2c80da]'
                                                                : 'rounded bg-[#dcf6e9] px-1.5 py-0.5 text-[9px] font-bold text-[#28a76e]'
                                                        }
                                                    >
                                                        {optional
                                                            ? 'Opsional'
                                                            : 'Terunggah'}
                                                    </span>
                                                </div>
                                                <p className="mt-1.5 flex items-center gap-1 truncate text-[11px] text-[#65748b]">
                                                    <Download className="size-3.5 shrink-0" />
                                                    {filename}
                                                </p>
                                                <span className="ml-[18px] block text-[9px] text-[#9aa6b7]">
                                                    {size}
                                                </span>
                                            </div>
                                            <div className="flex flex-col items-center justify-between self-stretch py-0.5">
                                                <button
                                                    type="button"
                                                    className="text-[#52627a] hover:text-[#1975d5]"
                                                    aria-label={'Menu ' + title}
                                                >
                                                    <MoreVertical className="size-[18px]" />
                                                </button>
                                                <CheckCircle2 className="size-[18px] text-[#25a86e]" />
                                            </div>
                                        </article>
                                    ),
                                )}
                            </div>

                            <button
                                type="button"
                                className="mt-5 flex min-h-[92px] w-full flex-col items-center justify-center gap-2 rounded-md border border-dashed border-[#88c3fa] bg-[#f7fbff] text-center hover:bg-[#f2f8ff] sm:flex-row sm:gap-4"
                            >
                                <UploadCloud className="size-8 text-[#1978df]" />
                                <span>
                                    <span className="block text-[13px] font-bold text-[#2475d9]">
                                        Seret & lepas file di sini atau klik
                                        untuk memilih file
                                    </span>
                                    <span className="mt-1 block text-[11px] text-[#76859b]">
                                        Format yang diterima: PDF, JPG, JPEG,
                                        PNG (Maks. 5 MB per file)
                                    </span>
                                </span>
                            </button>
                        </div>

                        <footer className="flex flex-col gap-3 border-t border-[#e5eaf1] p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                            <button
                                type="button"
                                className="inline-flex h-[40px] items-center justify-center gap-2 self-start rounded-md border border-[#dce3ec] bg-white px-4 text-[12px] font-semibold text-[#2374d4] shadow-sm hover:bg-[#f8fbff]"
                            >
                                <Save className="size-4" />
                                Simpan Draft
                            </button>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    type="button"
                                    className="inline-flex h-[40px] items-center justify-center gap-2 rounded-md border border-[#dce3ec] bg-white px-4 text-[12px] font-semibold text-[#68778e] shadow-sm hover:bg-[#f8fafc]"
                                >
                                    <ArrowLeft className="size-4" />
                                    Sebelumnya
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex h-[40px] items-center justify-center gap-2 rounded-md bg-[#1675dd] px-4 text-[12px] font-semibold text-white shadow-[0_3px_7px_rgba(22,117,221,.25)] hover:bg-[#0c68cb]"
                                >
                                    Simpan & Lanjutkan
                                    <ArrowRight className="size-4" />
                                </button>
                            </div>
                        </footer>
                    </section>

                    <aside className="space-y-5">
                        <section className="rounded-[10px] border border-[#e2e8f0] bg-white p-5 shadow-[0_3px_10px_rgba(26,66,108,.08)]">
                            <h2 className="text-[17px] font-extrabold tracking-[-.3px] text-[#34425a]">
                                Ringkasan Kelengkapan
                            </h2>
                            <div className="mt-4">
                                {completeness.map(
                                    ({ label, status, state }) => (
                                        <div
                                            key={label}
                                            className="flex items-center justify-between border-b border-[#e8ecf1] py-4 last:border-0"
                                        >
                                            <span className="flex items-center gap-3 text-[13px] font-medium text-[#56647b]">
                                                <StatusIcon state={state} />
                                                {label}
                                            </span>
                                            <span
                                                className={
                                                    'text-[12px] font-semibold ' +
                                                    (state === 'complete'
                                                        ? 'text-[#22a36b]'
                                                        : state === 'incomplete'
                                                          ? 'text-[#ff9500]'
                                                          : 'text-[#8c98aa]')
                                                }
                                            >
                                                {status}
                                            </span>
                                        </div>
                                    ),
                                )}
                            </div>
                            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2 border-t border-[#e8ecf1] pt-4 text-[10px] text-[#68758a]">
                                <span className="flex items-center gap-1.5">
                                    <CheckCircle2 className="size-4 text-[#22a36b]" />
                                    Lengkap
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Clock3 className="size-4 text-[#ff9500]" />
                                    Belum lengkap
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Circle className="size-4 text-[#aab4c4]" />
                                    Belum mulai
                                </span>
                            </div>
                        </section>

                        <section className="rounded-[10px] border border-[#bdddfd] bg-gradient-to-br from-[#f7fbff] to-[#edf7ff] p-5">
                            <div className="flex gap-3.5">
                                <ShieldCheck className="size-6 shrink-0 text-[#1d75d6]" />
                                <div>
                                    <h2 className="text-[14px] font-bold text-[#2573cd]">
                                        Pastikan data sesuai
                                    </h2>
                                    <p className="mt-3 text-[12px] leading-[1.5] text-[#687791]">
                                        Periksa kembali semua data dan dokumen
                                        sebelum melanjutkan ke tahap berikutnya.
                                    </p>
                                    <button
                                        type="button"
                                        className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold text-[#1974d8]"
                                    >
                                        Pelajari lebih lanjut
                                        <ArrowRight className="size-4" />
                                    </button>
                                </div>
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
        </>
    );
}
