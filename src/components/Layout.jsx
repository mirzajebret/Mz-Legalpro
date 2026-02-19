import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Menu,
    X,
    Bot,
    MessageSquare,
    ChevronRight,
    Phone,
    MapPin,
    Mail
} from 'lucide-react';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-1 group">
                            <img
                                src="/assets/images/solusinib.png"
                                alt="SolusiNIB Logo"
                                className={`h-10 w-auto object-contain transition-all bg-none duration-300 ${scrolled ? 'invert' : ''}`}
                            />

                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            {['/', '/tentang-kami', '/pricelist'].map((path) => (
                                <Link
                                    key={path}
                                    to={path}
                                    className={`text-sm font-medium transition-all duration-300 relative py-1 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#b8860b] after:bottom-0 after:left-0 after:transition-all hover:after:w-full
                                    ${isActive(path) ? 'text-[#b8860b] after:w-full' : (scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/90 hover:text-white')}`}
                                >
                                    {path === '/' ? 'Layanan' : path.replace('/', '').replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                </Link>
                            ))}

                            <a href="#ai-assistant" className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${scrolled ? 'border-slate-200 text-slate-600 hover:border-[#b8860b] hover:text-[#b8860b]' : 'border-white/20 text-white hover:bg-white/10'}`}>
                                <Bot size={16} /> <span className="text-xs font-semibold">AI Assistant</span>
                            </a>

                            <button className="px-6 py-2.5 bg-[#b8860b] text-white text-sm font-semibold rounded-full hover:bg-[#9a7009] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-orange-900/10">
                                Konsultasi Gratis
                            </button>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 rounded-lg ${scrolled ? 'text-slate-900' : 'text-white lg:text-white'}`}>
                                {isMenuOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-slate-900/95 z-40 transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-8 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {['/', '/tentang-kami', '/pricelist'].map((path) => (
                        <Link
                            key={path}
                            to={path}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-2xl font-serif text-white hover:text-[#b8860b] transition-colors"
                        >
                            {path === '/' ? 'Layanan' : path.replace('/', '').replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </Link>
                    ))}
                    <button className="mt-4 px-8 py-3 bg-[#b8860b] text-white rounded-full font-bold">
                        Mulai Konsultasi
                    </button>
                </div>
            </nav>

            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#b8860b]/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-2 space-y-6">
                            <div className="flex items-center gap-1">
                                <img
                                    src="/assets/images/solusinib.png"
                                    alt="SolusiNIB Logo"
                                    className="h-12 w-auto object-contain"
                                />
                            </div>
                            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
                                SolusiNIB.online hadir sebagai platform legalitas digital terpercaya. Kami membantu pengusaha Indonesia mengurus NIB, NPWP, pendirian PT, CV, dan izin usaha dengan mudah, cepat, dan transparan.
                            </p>
                            <div className="flex gap-4 pt-2">
                                {/* Facebook */}
                                <a href="https://www.facebook.com/profile.php?id=100085240159029" target="_blank" rel="noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#1877F2] flex items-center justify-center transition-colors"
                                    aria-label="Facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.03 4.388 11.028 10.125 11.927v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796v8.437C19.612 23.1 24 18.102 24 12.073z" />
                                    </svg>
                                </a>
                                {/* Instagram */}
                                <a href="https://www.instagram.com/solusinib.online/" target="_blank" rel="noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#833ab4] flex items-center justify-center transition-colors"
                                    aria-label="Instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </a>
                                {/* TikTok */}
                                <a href="https://www.tiktok.com/@solusinib.online" target="_blank" rel="noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-black flex items-center justify-center transition-colors"
                                    aria-label="TikTok">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h5 className="font-bold text-white mb-6 font-serif tracking-wide">Layanan</h5>
                            <ul className="space-y-4 text-sm">
                                <li><Link to="/layanan/pt-perorangan" className="hover:text-[#b8860b] transition-colors flex items-center gap-2"><ChevronRight size={14} /> Pendirian PT</Link></li>
                                <li><Link to="/layanan/cv" className="hover:text-[#b8860b] transition-colors flex items-center gap-2"><ChevronRight size={14} /> Pendirian CV</Link></li>
                                <li><Link to="/layanan/nib-npwp" className="hover:text-[#b8860b] transition-colors flex items-center gap-2"><ChevronRight size={14} /> Izin Usaha (NIB)</Link></li>
                                <li><Link to="/layanan/pt-pma" className="hover:text-[#b8860b] transition-colors flex items-center gap-2"><ChevronRight size={14} /> Konsultasi Hukum</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h5 className="font-bold text-white mb-6 font-serif tracking-wide">Kantor Kami</h5>
                            <ul className="space-y-4 text-sm">
                                <li className="flex gap-3 items-start">
                                    <MapPin className="text-[#b8860b] shrink-0" size={18} />
                                    <span>Menara Sudirman Lt. 15<br />Jl. Jend. Sudirman Kav. 60<br />Jakarta Selatan 12190</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <Mail className="text-[#b8860b] shrink-0" size={18} />
                                    <span>hello@solusinib.online</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <Phone className="text-[#b8860b] shrink-0" size={18} />
                                    <span>+6213 2124 5011</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                        <p>© 2025 SolusiNIB.online. All rights reserved.</p>
                        <div className="flex gap-8">
                            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                            <Link to="#" className="hover:text-white transition-colors">Disclaimer</Link>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Floating CTA */}
            <div className="fixed bottom-8 right-12 z-40">
                <a href="https://wa.me/621321245011" target="_blank" rel="noreferrer" className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 hover:shadow-[#25D366]/40 transition-all duration-300 relative group">
                    <div className="absolute inset-0 bg-green-400/50 rounded-full animate-ping opacity-75"></div>
                    <MessageSquare fill="white" size={24} className="relative z-10" />
                    <span className="absolute right-16 bg-white text-slate-800 px-3 py-1 rounded-lg text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Chat WhatsApp
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Layout;