import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Scale,
    Menu,
    X,
    Bot,
    MessageSquare
} from 'lucide-react';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Helper to determining if link is active (simple version)
    const isActive = (path) => location.pathname === path;

    return (
        <div className="min-h-screen font-sans selection:bg-[#778ca4] selection:text-white bg-white">
            {/* Navigation */}
            <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="p-2 bg-[#313c45] rounded-lg">
                                <Scale className="text-white w-6 h-6" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-[#313c45]">
                                LEGAL<span className="text-[#778ca4]">PRO</span>
                            </span>
                        </Link>

                        <div className="hidden md:flex items-center gap-8">
                            <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-[#778ca4]' : 'text-[#313c45] hover:text-[#778ca4]'}`}>Layanan</Link>
                            <Link to="/tentang-kami" className={`text-sm font-medium transition-colors ${isActive('/tentang-kami') ? 'text-[#778ca4]' : 'text-[#313c45] hover:text-[#778ca4]'}`}>Tentang Kami</Link>
                            <Link to="/pricelist" className={`text-sm font-medium transition-colors ${isActive('/pricelist') ? 'text-[#778ca4]' : 'text-[#313c45] hover:text-[#778ca4]'}`}>Pricelist</Link>
                            <a href="#ai-assistant" className="text-sm font-medium text-[#778ca4] flex items-center gap-1">
                                <Bot size={16} /> AI Assistant
                            </a>
                            <button className="px-5 py-2.5 bg-[#313c45] text-white text-sm font-medium rounded-full hover:bg-[#778ca4] transition-all shadow-lg shadow-slate-200">
                                Konsultasi Gratis
                            </button>
                        </div>

                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-slate-100 p-4 shadow-lg">
                        <div className="flex flex-col gap-4">
                            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-[#313c45]">Layanan</Link>
                            <Link to="/tentang-kami" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-[#313c45]">Tentang Kami</Link>
                            <Link to="/pricelist" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-[#313c45]">Pricelist</Link>
                        </div>
                    </div>
                )}
            </nav>

            <main>
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-[#f8fafc] py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-2">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="p-1.5 bg-[#313c45] rounded-md">
                                    <Scale className="text-white w-5 h-5" />
                                </div>
                                <span className="text-lg font-bold tracking-tight text-[#313c45]">
                                    LEGAL<span className="text-[#778ca4]">PRO</span>
                                </span>
                            </div>
                            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                                Penyedia jasa legalitas badan usaha dengan pengalaman kerja di kantor Notaris. Memberikan kepastian hukum dan kemudahan bagi pengusaha di seluruh Indonesia.
                            </p>
                        </div>
                        <div>
                            <h5 className="font-bold text-[#313c45] mb-6">Tautan Cepat</h5>
                            <ul className="space-y-4 text-sm text-slate-500">
                                <li><Link to="/layanan/pt-perorangan" className="hover:text-[#778ca4]">Pendirian PT</Link></li>
                                <li><Link to="/layanan/cv" className="hover:text-[#778ca4]">Pendirian CV</Link></li>
                                <li><Link to="/pricelist" className="hover:text-[#778ca4]">Pricelist</Link></li>
                                <li><Link to="/tentang-kami" className="hover:text-[#778ca4]">Kontak</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold text-[#313c45] mb-6">Kontak</h5>
                            <ul className="space-y-4 text-sm text-slate-500">
                                <li>hello@legalpro.id</li>
                                <li>+62 812 3456 7890</li>
                                <li>Jakarta Selatan, Indonesia</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between gap-4 text-xs text-slate-400 font-medium">
                        <p>© 2024 LegalPro Indonesia. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/terms">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Floating CTA (WhatsApp) */}
            <div className="fixed bottom-6 right-6 z-50">
                <button className="flex items-center gap-2 p-4 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 hover:scale-105 transition-all group">
                    <MessageSquare fill="white" />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold">
                        WhatsApp Kami
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Layout;
