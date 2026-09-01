import { GraduationCap, UserRound } from 'lucide-react';

export default function OnlineTestLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-dvh bg-[#f8fafc] font-sans text-[#0b1b3a]">
            <header className="flex h-[84px] items-center justify-between border-b-2 border-[#006db8] bg-white px-[clamp(24px,3vw,48px)]">
                <div className="font-heading inline-flex items-center gap-3 text-[22px] font-bold tracking-[-.5px] text-[#075da8]">
                    <span className="relative grid size-12 place-items-center text-[#006db8]">
                        <GraduationCap className="size-[43px] fill-[#006db8] text-white" />
                        <span className="absolute right-0 bottom-0 text-[22px] leading-none text-[#ffbd00]">
                            ϟ
                        </span>
                    </span>
                    <span>Beasiswa PLN</span>
                </div>
                <div className="flex items-center gap-2 text-[16px] font-semibold text-[#10244a]">
                    <UserRound className="size-7 stroke-[1.7] text-[#31486d]" />
                    <span className="font-heading">Andi Pratama</span>
                </div>
            </header>
            <main>{children}</main>
        </div>
    );
}
