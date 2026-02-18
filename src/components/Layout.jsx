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
                                {/* Social placeholders */}
                                <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#b8860b] flex items-center justify-center transition-colors cursor-pointer">
                                    <span className="font-bold">IG</span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#b8860b] flex items-center justify-center transition-colors cursor-pointer">
                                    <span className="font-bold">LN</span>
                                </div>
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