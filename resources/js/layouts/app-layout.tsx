import { Link } from '@inertiajs/react';
import {
    Bell,
    BriefcaseBusiness,
    Headphones,
    Home,
    Laptop,
    Menu,
    Megaphone,
    UserRound,
    UsersRound,
    X,
} from 'lucide-react';
import { useState } from 'react';
import { dashboard, files, onlineTest } from '@/routes';
import { useCurrentUrl } from '@/hooks/use-current-url';
import type { BreadcrumbItem } from '@/types';

const navigation = [
    { label: 'Dashboard', icon: Home, href: dashboard() },
    { label: 'Berkas', icon: BriefcaseBusiness, href: files() },
    { label: 'Tes Online', icon: Laptop, href: onlineTest() },
    { label: 'Pengumuman', icon: Megaphone, href: '/announcement' },
];

function PlnLogo() {
    return (
        <div
            className="inline-flex items-center gap-2.5 text-[22px] font-bold tracking-[-0.6px] whitespace-nowrap text-[#0763ad]"
            aria-label="Beasiswa PLN"
        >
            <span
                className="grid size-[45px] place-items-center bg-[#ffdf00]"
                aria-hidden="true"
            >
                <svg
                    className="size-[34px] fill-[#0083ca] stroke-[#e81e2b] [stroke-linecap:round] [stroke-linejoin:round]"
                    viewBox="0 0 48 48"
                    role="img"
                    strokeWidth="3"
                >
                    <path d="M28 3 12 28h11l-5 17 18-26H25z" />
                    <path d="M8 25h29M10 31h20" fill="none" />
                </svg>
            </span>
            <span>Beasiswa PLN</span>
        </div>
    );
}

function SidebarArtwork() {
    return (
        <img
            src="/tower.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-[18px] h-[255px] w-full object-cover object-bottom opacity-70"
        />
    );
}

export default function AppLayout({
    breadcrumbs: _breadcrumbs = [],
    children,
}: {
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isCurrentUrl } = useCurrentUrl();
    const sidebarState = menuOpen
        ? 'translate-x-0'
        : '-translate-x-full xl:translate-x-0';

    return (
        <div className="min-h-dvh overflow-x-clip bg-[#f8fafc] font-sans text-[#0b1b3a]">
            <button
                type="button"
                className="fixed top-3.5 left-3.5 z-10 grid size-11 place-items-center rounded-lg border border-[#d7e5f1] bg-white text-[#075fae] shadow-[0_3px_12px_rgba(11,27,58,.1)] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#1686ce]/45 xl:hidden"
                onClick={() => setMenuOpen(true)}
                aria-label="Buka menu navigasi"
            >
                <Menu />
            </button>
            {menuOpen && (
                <button
                    type="button"
                    className="fixed inset-0 z-20 border-0 bg-[#0b1b3a]/35 xl:hidden"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Tutup menu navigasi"
                />
            )}
            <aside
                className={
                    'fixed inset-y-0 left-0 z-30 flex w-[264px] flex-col overflow-hidden border-r border-[#e6edf5] bg-white shadow-[14px_0_40px_rgba(11,27,58,.14)] transition-transform duration-200 xl:shadow-none ' +
                    sidebarState
                }
            >
                <div className="flex h-[100px] shrink-0 items-center justify-between px-7 pt-[27px] pb-5">
                    <PlnLogo />
                    <button
                        type="button"
                        className="grid place-items-center border-0 bg-transparent text-[#18335d] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#1686ce]/45 xl:hidden"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Tutup menu navigasi"
                    >
                        <X className="size-[22px]" />
                    </button>
                </div>
                <nav
                    className="grid gap-2 px-3.5 py-1.5"
                    aria-label="Navigasi student"
                >
                    {navigation.map(({ label, icon: Icon, href }) =>
                        href ? (
                            <Link
                                key={label}
                                href={href}
                                className={
                                    'flex h-[49px] w-full items-center gap-5 rounded-[9px] px-[18px] text-left text-[15px] no-underline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#1686ce]/45 ' +
                                    (isCurrentUrl(href)
                                        ? 'bg-gradient-to-r from-[#087ac3] to-[#0066b4] font-bold text-white shadow-[0_8px_18px_rgba(0,109,184,.19)]'
                                        : 'font-[550] text-[#11254b] hover:bg-[#f1f8fd]')
                                }
                                onClick={() => setMenuOpen(false)}
                            >
                                <Icon className="size-[22px] stroke-[1.8]" />
                                <span>{label}</span>
                            </Link>
                        ) : (
                            <button
                                type="button"
                                key={label}
                                className="flex h-[49px] w-full items-center gap-5 rounded-[9px] border-0 bg-transparent px-[18px] text-left text-[15px] font-[550] text-[#11254b] hover:bg-[#f1f8fd] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#1686ce]/45"
                                onClick={() => setMenuOpen(false)}
                            >
                                <Icon className="size-[22px] stroke-[1.8]" />
                                <span>{label}</span>
                            </button>
                        ),
                    )}
                </nav>
                <div className="min-h-[30px] flex-1" />
                <SidebarArtwork />
                <div className="absolute inset-x-0 bottom-0 h-[18px] bg-[#ffd800]" />
            </aside>
            <main className="min-h-dvh w-full min-w-0 xl:ml-[264px] xl:w-[calc(100%-264px)]">
                <div className="flex min-h-16 items-center justify-between border-b border-[#e6edf5] bg-white px-3.5 pt-3.5 pb-2 pl-[70px] xl:hidden">
                    <PlnLogo />
                    <span className="relative text-[#1e365c]">
                        <Bell className="size-6" />
                        <b className="absolute -top-1.5 -right-2 grid size-[17px] place-items-center rounded-full bg-[#f0444d] text-[10px] text-white">
                            3
                        </b>
                    </span>
                </div>
                {children}
            </main>
        </div>
    );
}
