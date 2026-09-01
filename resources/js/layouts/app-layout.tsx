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
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const navigation = [
    { label: 'Dashboard', icon: Home, active: true },
    { label: 'Profil Saya', icon: UserRound },
    { label: 'Berkas', icon: BriefcaseBusiness },
    { label: 'Tes Online', icon: Laptop },
    { label: 'Interview', icon: UsersRound },
    { label: 'Pengumuman', icon: Megaphone },
];

function PlnLogo() {
    return (
        <div className="pln-brand" aria-label="Beasiswa PLN">
            <span className="pln-brand-mark" aria-hidden="true">
                <svg viewBox="0 0 48 48" role="img">
                    <path d="M28 3 12 28h11l-5 17 18-26H25z" />
                    <path d="M8 25h29M10 31h20" />
                </svg>
            </span>
            <span>Beasiswa PLN</span>
        </div>
    );
}

function SidebarArtwork() {
    return (
        <svg
            className="pln-sidebar-art"
            viewBox="0 0 264 220"
            aria-hidden="true"
        >
            <g fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M168 210 194 70l28 140M178 157h35M174 179h43M184 130h24M194 70l-13 18h27z" />
                <path d="M194 92 224 84M194 92l-28-6M194 92l6 33" />
                <path d="M25 210V153M25 153l-25 18M25 153l28 11M25 153l4-30" />
                <path d="M89 210v-76M89 134l-37 20M89 134l36 15M89 134l5-39" />
                <path d="M130 210v-48M130 162l-24 13M130 162l23 10M130 162l3-25" />
            </g>
            <g fill="currentColor" opacity=".18">
                <path d="M0 178h26v32H0zM30 188h19v22H30zM53 170h31v40H53zM87 190h25v20H87zM116 181h24v29h-24zM224 185h18v25h-18zM244 169h20v41h-20z" />
                <path d="M0 146c36 1 40-21 72-18 31 3 43 18 73 10 31-9 42-30 89-22 12 2 22 6 30 11v83H0z" />
            </g>
        </svg>
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

    return (
        <div className="pln-shell">
            <button
                type="button"
                className="pln-mobile-menu"
                onClick={() => setMenuOpen(true)}
                aria-label="Buka menu navigasi"
            >
                <Menu />
            </button>
            {menuOpen && (
                <button
                    type="button"
                    className="pln-sidebar-backdrop"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Tutup menu navigasi"
                />
            )}
            <aside className={`pln-sidebar ${menuOpen ? 'is-open' : ''}`}>
                <div className="pln-sidebar-top">
                    <PlnLogo />
                    <button
                        type="button"
                        className="pln-sidebar-close"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Tutup menu navigasi"
                    >
                        <X />
                    </button>
                </div>
                <nav className="pln-navigation" aria-label="Navigasi student">
                    {navigation.map(({ label, icon: Icon, active }) =>
                        active ? (
                            <Link
                                key={label}
                                href={dashboard()}
                                className="pln-nav-item is-active"
                                onClick={() => setMenuOpen(false)}
                            >
                                <Icon />
                                <span>{label}</span>
                            </Link>
                        ) : (
                            <button
                                type="button"
                                key={label}
                                className="pln-nav-item"
                                onClick={() => setMenuOpen(false)}
                            >
                                <Icon />
                                <span>{label}</span>
                            </button>
                        ),
                    )}
                </nav>
                <div className="pln-sidebar-spacer" />
                <div className="pln-help-card">
                    <Headphones aria-hidden="true" />
                    <div>
                        <strong>Butuh Bantuan?</strong>
                        <p>
                            Hubungi kami melalui email atau{' '}
                            <span>pusat bantuan.</span>
                        </p>
                    </div>
                </div>
                <SidebarArtwork />
                <div className="pln-sidebar-stripe" />
            </aside>
            <main className="pln-main">
                <div className="pln-mobile-brand">
                    <PlnLogo />
                    <span className="pln-mobile-alert">
                        <Bell />
                        <b>3</b>
                    </span>
                </div>
                {children}
            </main>
        </div>
    );
}
