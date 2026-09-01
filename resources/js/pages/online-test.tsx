import { Head } from '@inertiajs/react';
import {
    AlarmClock,
    ArrowLeft,
    ArrowRight,
    Bookmark,
    CheckCircle2,
    Clock3,
    FileText,
    Flag,
    Info,
    LockKeyhole,
    Send,
    TrendingUp,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const initialAnswers: Record<number, string> = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'A',
    5: 'B',
    6: 'D',
    7: 'D',
    9: 'A',
    10: 'C',
    11: 'B',
    12: 'D',
    20: 'A',
};
const choices = [
    'Perusahaan Listrik Nasional',
    'Perusahaan Layanan Nasional',
    'Pusat Listrik Negara',
    'Perusahaan Listrik Negara',
];

function formatTime(totalSeconds: number) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return [hours, minutes, seconds]
        .map((value) => String(value).padStart(2, '0'))
        .join(':');
}

function Panel({
    children,
    className = '',
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section
            className={
                'rounded-[10px] border border-[#e7edf5] bg-white shadow-[0_3px_10px_rgba(26,66,108,.08)] ' +
                className
            }
        >
            {children}
        </section>
    );
}

export default function OnlineTest() {
    const [activeQuestion, setActiveQuestion] = useState(7);
    const [answers, setAnswers] = useState(initialAnswers);
    const [markedQuestions, setMarkedQuestions] = useState(new Set([8, 13]));
    const [essay, setEssay] = useState('');
    const [secondsRemaining, setSecondsRemaining] = useState(4365);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const interval = window.setInterval(
            () => setSecondsRemaining((seconds) => Math.max(0, seconds - 1)),
            1000,
        );
        return () => window.clearInterval(interval);
    }, []);

    const answeredCount = Object.keys(answers).length;
    const progress = Math.round((answeredCount / 22) * 100);
    const currentAnswer = answers[activeQuestion];

    function selectAnswer(answer: string) {
        setAnswers((current) => ({ ...current, [activeQuestion]: answer }));
    }
    function toggleMark() {
        setMarkedQuestions((current) => {
            const next = new Set(current);
            if (next.has(activeQuestion)) {
                next.delete(activeQuestion);
            } else {
                next.add(activeQuestion);
            }
            return next;
        });
    }

    return (
        <>
            <Head title="Tes Online" />
            <div className="mx-auto w-full max-w-[1672px] px-[clamp(16px,2.5vw,42px)] py-7">
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_475px] xl:gap-6">
                    <div className="min-w-0 space-y-6">
                        <Panel className="grid min-h-[110px] grid-cols-1 items-center gap-4 px-6 py-5 sm:grid-cols-2 lg:grid-cols-2 lg:gap-0">
                            <div className="flex min-w-0 items-center gap-4 lg:border-r lg:border-[#dfe7f0] lg:pr-7">
                                <FileText className="size-10 shrink-0 text-[#0069d9]" />
                                <span>
                                    <small className="block text-xs text-[#3d4d6d]">
                                        Nama Ujian:
                                    </small>
                                    <strong className="mt-1 block text-sm">
                                        Tes Seleksi Beasiswa PLN
                                    </strong>
                                </span>
                            </div>
                            <div className="flex min-w-0 items-center gap-4 lg:border-r lg:border-[#dfe7f0] lg:px-7">
                                <FileText className="size-9 shrink-0 text-[#006db8]" />
                                <span>
                                    <small className="block text-xs text-[#3d4d6d]">
                                        Jumlah Soal:
                                    </small>
                                    <strong className="mt-1 block text-sm">
                                        20 Pilihan Ganda + 2 Essay
                                    </strong>
                                </span>
                            </div>
                        </Panel>
                        <Panel className="p-6">
                            <span className="inline-flex rounded-md bg-gradient-to-r from-[#006ecf] to-[#0058bb] px-4 py-2 text-sm font-bold text-white shadow-[0_3px_8px_rgba(0,93,184,.25)]">
                                Soal {activeQuestion} dari 22
                            </span>
                            <h1 className="mt-4 text-[20px] font-bold tracking-[-.3px]">
                                {activeQuestion === 7
                                    ? 'Apa kepanjangan dari PLN?'
                                    : 'Pilih jawaban yang paling tepat untuk soal ini.'}
                            </h1>
                            <div className="mt-4 space-y-[10px]">
                                {choices.map((choice, index) => {
                                    const letter = String.fromCharCode(
                                        65 + index,
                                    );
                                    const selected = currentAnswer === letter;
                                    return (
                                        <button
                                            type="button"
                                            key={letter}
                                            onClick={() => selectAnswer(letter)}
                                            className={
                                                'grid min-h-[52px] w-full grid-cols-[25px_25px_minmax(0,1fr)] items-center gap-3 rounded-[8px] border px-4 text-left text-[14px] transition focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#1686ce]/45 ' +
                                                (selected
                                                    ? 'border-[#4d83f3] bg-[#f2f8ff] text-[#16386c]'
                                                    : 'border-[#d3deeb] bg-white text-[#263b60] hover:border-[#9abced]')
                                            }
                                        >
                                            <span
                                                className={
                                                    'grid size-5 place-items-center rounded-full border-2 ' +
                                                    (selected
                                                        ? 'border-[#547ff3] bg-[#547ff3] ring-2 ring-[#d9e6ff]'
                                                        : 'border-[#8ba0c0]')
                                                }
                                            >
                                                <span
                                                    className={
                                                        selected
                                                            ? 'size-1.5 rounded-full bg-white'
                                                            : ''
                                                    }
                                                />
                                            </span>
                                            <strong>{letter}.</strong>
                                            <span>{choice}</span>
                                        </button>
                                    );
                                })}
                            </div>
                            <div className="mt-5 flex flex-col gap-3 border-t border-[#dbe4ef] pt-5 sm:flex-row sm:items-center sm:justify-between">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveQuestion((current) =>
                                            Math.max(1, current - 1),
                                        )
                                    }
                                    className="inline-flex h-[45px] items-center justify-center gap-3 rounded-[7px] border border-[#cedbea] bg-white px-6 text-sm font-semibold text-[#1c3158] hover:bg-[#f7faff]"
                                >
                                    <ArrowLeft className="size-5" />
                                    Sebelumnya
                                </button>
                                <button
                                    type="button"
                                    onClick={toggleMark}
                                    className="inline-flex h-[45px] items-center justify-center gap-3 rounded-[7px] border border-[#cedbea] bg-white px-6 text-sm font-semibold text-[#1c3158] hover:bg-[#f7faff]"
                                >
                                    <Bookmark className="size-5" />
                                    {markedQuestions.has(activeQuestion)
                                        ? 'Hapus Tanda'
                                        : 'Tandai untuk Ditinjau'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveQuestion((current) =>
                                            Math.min(22, current + 1),
                                        )
                                    }
                                    className="inline-flex h-[45px] items-center justify-center gap-3 rounded-[7px] bg-gradient-to-r from-[#006ecf] to-[#0058bb] px-6 text-sm font-semibold text-white shadow-[0_3px_8px_rgba(0,93,184,.25)]"
                                >
                                    Selanjutnya
                                    <ArrowRight className="size-5" />
                                </button>
                            </div>
                        </Panel>
                      
                    </div>
                    <aside className="space-y-4">
                        <Panel className="border-l-[7px] border-l-[#ffb500] px-6 py-5">
                            <div className="flex items-center gap-3 text-[16px] font-bold">
                                <AlarmClock className="size-6 text-[#0069d9]" />
                                Sisa Waktu
                            </div>
                            <div className="mt-3 h-0.5 bg-[#f7aa00]" />
                            <p className="mt-4 text-center text-[44px] font-extrabold tracking-[3px] text-[#0069d9]">
                                {formatTime(secondsRemaining)}
                            </p>
                        </Panel>
                        <Panel className="p-5">
                            <h2 className="flex items-center gap-3 text-[16px] font-bold">
                                <TrendingUp className="size-6 text-[#0069d9]" />
                                Progress Pengerjaan
                            </h2>
                            <div className="mt-3 flex items-end justify-between">
                                <p className="text-sm text-[#52637f]">
                                    {answeredCount} dari 22 soal telah
                                    dikerjakan
                                </p>
                                <strong className="text-xs text-[#536583]">
                                    {progress}%
                                </strong>
                            </div>
                            <div className="mt-4 h-[9px] overflow-hidden rounded-full bg-[#e6edf5]">
                                <div
                                    className="h-full bg-[#0069d9]"
                                    style={{ width: progress + '%' }}
                                />
                            </div>
                        </Panel>
                        <Panel className="p-5">
                            <h2 className="text-[16px] font-bold">
                                Navigasi Soal
                            </h2>
                            <div className="mt-4 grid grid-cols-5 gap-2 sm:grid-cols-10">
                                {Array.from(
                                    { length: 22 },
                                    (_, index) => index + 1,
                                ).map((number) => {
                                    const active = number === activeQuestion;
                                    const marked = markedQuestions.has(number);
                                    const answered = Boolean(answers[number]);
                                    return (
                                        <button
                                            type="button"
                                            key={number}
                                            onClick={() =>
                                                setActiveQuestion(number)
                                            }
                                            className={
                                                'grid h-[38px] place-items-center rounded-[6px] border text-sm font-medium focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#1686ce]/45 ' +
                                                (active
                                                    ? 'border-[#0069d9] bg-[#0069d9] text-white'
                                                    : marked
                                                      ? 'border-[#ffaf00] bg-white text-[#1f365d]'
                                                      : answered
                                                        ? 'border-[#3a7ff2] bg-[#f7fbff] text-[#075dc0]'
                                                        : 'border-transparent bg-[#f0f2f5] text-[#3f5171]')
                                            }
                                        >
                                            {number}
                                        </button>
                                    );
                                })}
                            </div>
                            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-[11px] text-[#314665] sm:grid-cols-4">
                                <span className="flex items-center gap-2">
                                    <i className="size-[18px] rounded-sm bg-[#0069d9]" />
                                    Soal Aktif
                                </span>
                                <span className="flex items-center gap-2">
                                    <i className="size-[18px] rounded-sm border border-[#3a7ff2] bg-[#f7fbff]" />
                                    Sudah Dijawab
                                </span>
                                <span className="flex items-center gap-2">
                                    <i className="size-[18px] rounded-sm bg-[#f0f2f5]" />
                                    Belum Dijawab
                                </span>
                                <span className="flex items-center gap-2">
                                    <i className="size-[18px] rounded-sm border border-[#ffaf00] bg-white" />
                                    Ditandai
                                </span>
                            </div>
                        </Panel>
                        <Panel className="p-4">
                            <button
                                type="button"
                                disabled={submitted}
                                onClick={() => setSubmitted(true)}
                                className="flex h-[45px] w-full items-center justify-center gap-3 rounded-[6px] bg-gradient-to-r from-[#006ecf] to-[#0058bb] text-[16px] font-semibold text-white shadow-[0_3px_8px_rgba(0,93,184,.25)] disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                <Send className="size-5" />
                                {submitted
                                    ? 'Jawaban Terkirim'
                                    : 'Kirim Jawaban'}
                            </button>
                            <p className="mt-3 flex gap-3 text-[12px] leading-[1.35] text-[#5d6e89]">
                                <LockKeyhole className="size-5 shrink-0" />
                                Pastikan seluruh jawaban telah diperiksa sebelum
                                mengirim. Jawaban yang telah dikirim tidak dapat
                                diubah kembali.
                            </p>
                        </Panel>
                    </aside>
                </div>
            </div>
        </>
    );
}
