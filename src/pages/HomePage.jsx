import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ShieldCheck,
    FileText,
    UserCheck,
    Zap,
    MessageSquare,
    ArrowRight,
    CheckCircle2,
    Briefcase,
    Scale,
    Bot,
    Users,
    Building,
    Globe,
    Star,
    TrendingUp
} from 'lucide-react';

const HomePage = () => {
    const [activeTab, setActiveTab] = useState('utama');
    const [aiMessage, setAiMessage] = useState("");
    const [isAiLoading, setIsAiLoading] = useState(false);

    // Image Assets (Unsplash)
    const heroImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069";
    const officeImage = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000";

    const services = [
        {
            id: 'pt-biasa',
            title: "Pendirian PT",
            desc: "Struktur badan hukum terkuat untuk bisnis skala menengah hingga besar.",
            icon: <Building className="w-6 h-6" />,
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
            category: "utama",
            price: "Mulai 5.9jt"
        },
        {
            id: 'pt-perorangan',
            title: "PT Perorangan",
            desc: "Solusi legalitas instan untuk UMK dengan perlindungan aset pribadi.",
            icon: <UserCheck className="w-6 h-6" />,
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
            category: "utama",
            price: "Mulai 1.5jt"
        },
        {
            id: 'cv',
            title: "Pendirian CV",
            desc: "Pilihan ekonomis dan fleksibel untuk memulai usaha kemitraan.",
            icon: <Briefcase className="w-6 h-6" />,
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=80&w=600",
            category: "utama",
            price: "Mulai 4.5jt"
        },
        {
            id: 'pt-pma',
            title: "PT PMA (Asing)",
            desc: "Layanan penuh untuk investor asing yang ingin berbisnis di Indonesia.",
            icon: <Globe className="w-6 h-6" />,
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&auto=format&fit=crop&q=80&w=600",
            category: "utama",
            price: "Custom"
        },
        {
            id: 'Koperasi',
            title: "Pendirian Koperasi",
            desc: "Layanan penuh untuk pendirian Koperasi di Indonesia.",
            icon: <Globe className="w-6 h-6" />,
            image: "https://images.unsplash.com/photo-1551836022-8b2858c9c69b?w=500&auto=format&fit=crop&q=80&w=600",
            category: "utama",
            price: "Mulai 5.5jt"
        },
        {
            id: 'nib-npwp',
            title: "Penerbitan NIB",
            desc: "Penerbitan NIB untuk usaha Anda, ter-RDTR maupun non-RDTR.",
            icon: <FileText className="w-6 h-6" />,
            image: "/assets/images/addon/addon-nib.webp",
            category: "addon",
            price: "Mulai 1.5jt"
        },
        {
            id: 'nib-npwp',
            title: "Pembuatan NPWP",
            desc: "Pengurusan pembuatan NPWP baik untuk perorangan maupun badan usaha.",
            icon: <FileText className="w-6 h-6" />,
            image: "/assets/images/addon/addon-npwp.png",
            category: "addon",
            price: "Mulai 150rb"
        }
    ];

    const askAi = () => {
        setIsAiLoading(true);
        setTimeout(() => {
            setAiMessage("Berdasarkan UU Cipta Kerja terbaru, modal dasar pendirian PT kini berdasarkan kesepakatan para pendiri. Namun, untuk PT PMA minimal investasi adalah Rp10 Miliar diluar tanah dan bangunan. Apakah Anda ingin simulasi biaya?");
            setIsAiLoading(false);
        }, 1500);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="Modern Corporate Office"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 animate-in slide-in-from-left duration-700 fade-in">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide uppercase">
                                <Zap size={14} className="text-[#b8860b]" />
                                <span>Terintegrasi Sistem OSS RBA & AHU Online</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight font-serif">
                                Bangun Bisnis <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b8860b] to-[#fcd34d]">Tanpa Batas</span>
                            </h1>

                            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                                Platform legalitas digital #1 di Indonesia. Urus pendirian PT, CV, dan Izin Usaha semudah belanja online. Dijamin 100% Sah & Legal.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button className="px-8 py-4 bg-[#b8860b] hover:bg-[#9a7009] text-white rounded-xl font-bold hover:shadow-xl hover:shadow-[#b8860b]/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                                    Selengkapnya <ArrowRight size={18} />
                                </button>
                                <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group">
                                    <MessageSquare size={18} /> Konsultasi Gratis
                                </button>
                            </div>

                            <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                                <div>
                                    <p className="text-3xl font-bold text-white font-serif">2.500+</p>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider">Perusahaan Berdiri</p>
                                </div>
                                <div className="w-px h-10 bg-white/10"></div>
                                <div>
                                    <p className="text-3xl font-bold text-white font-serif">98%</p>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider">Tingkat Kepuasan</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Cards Graphic */}
                        <div className="hidden md:block relative h-[500px]">
                            <div className="absolute top-10 right-10 w-72 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-1000 delay-300">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-green-500/20 rounded-full">
                                        <CheckCircle2 className="text-green-400" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Izin Terbit!</h4>
                                        <p className="text-slate-300 text-xs">PT Maju Bersama Tbk.</p>
                                    </div>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-full bg-green-400 rounded-full"></div>
                                </div>
                            </div>

                            <div className="absolute bottom-20 left-10 w-80 p-6 bg-slate-800/90 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-1000 delay-500 z-20">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-[#b8860b]/20 rounded-full">
                                        <Scale className="text-amber-400" size={24} />
                                    </div>
                                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">Legalitas</span>
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">Dokumen Lengkap</h3>
                                <p className="text-slate-400 text-sm">Akta, SK, NIB, NPWP dalam satu dashboard.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="layanan" className="py-24 bg-slate-50 relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-[#b8860b] font-bold tracking-widest uppercase text-xs mb-2 block">Solusi Kami</span>
                        <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Layanan Legalitas Terpadu</h2>
                        <p className="text-slate-500 text-lg">Kami menyederhanakan proses hukum yang rumit menjadi langkah-langkah mudah yang bisa dipantau secara real-time.</p>
                    </div>

                    <div className="flex justify-center mb-12">
                        <div className="flex p-1.5 bg-white rounded-full border border-slate-200 shadow-sm">
                            <button
                                onClick={() => setActiveTab('utama')}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === 'utama' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
                            >
                                Pendirian Badan Usaha
                            </button>
                            <button
                                onClick={() => setActiveTab('addon')}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === 'addon' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
                            >
                                Pengurusan NIB & NPWP
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.filter(s => activeTab === 'all' || s.category === activeTab).map((item, idx) => (
                            <div key={idx} className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100 flex flex-col">
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-all z-10"></div>
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1 rounded-full z-20 shadow-sm">
                                        {item.price}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#b8860b] mb-6 group-hover:bg-[#b8860b] group-hover:text-white transition-colors duration-300 shadow-sm">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                                        {item.desc}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-slate-100">
                                        <Link to={`/layanan/${item.id}`} className="flex items-center justify-between text-slate-700 font-semibold text-sm group-hover:text-[#b8860b] transition-colors">
                                            {item.category === 'utama' ? 'Selengkapnya' : 'Cek Harga'} <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Assistant Feature - Dark Mode UI */}
            <section id="ai-assistant" className="py-24 bg-slate-900 overflow-hidden relative">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                    <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[#b8860b] blur-[100px]"></div>
                    <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] rounded-full bg-blue-600 blur-[100px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold mb-6 tracking-widest uppercase animate-pulse">
                                <Bot size={14} /> AI Powered 2.0
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">
                                Konsultan Hukum Digital <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Dalam Saku Anda.</span>
                            </h2>
                            <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                                Tidak perlu menunggu jam kerja untuk bertanya. LegalAI Assistant kami dilatih dengan ribuan peraturan perundang-undangan terbaru (UU Cipta Kerja) untuk menjawab keraguan Anda secara instan.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="flex gap-4 items-start">
                                    <div className="p-2 bg-slate-800 rounded-lg text-[#b8860b]">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Validasi Data</h4>
                                        <p className="text-slate-500 text-xs">Cek ketersediaan nama PT otomatis.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="p-2 bg-slate-800 rounded-lg text-[#b8860b]">
                                        <TrendingUp size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Simulasi Biaya</h4>
                                        <p className="text-slate-500 text-xs">Estimasi modal & pajak transparan.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chat UI Interface */}
                        <div className="bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-1 shadow-2xl">
                            <div className="bg-slate-900 rounded-xl overflow-hidden flex flex-col h-[500px]">
                                {/* Chat Header */}
                                <div className="p-4 bg-slate-800 border-b border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg">
                                                <Bot size={20} />
                                            </div>
                                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-800"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-sm">LegalAI Assistant</h4>
                                            <p className="text-[10px] text-green-400 font-medium">Online • Mengetik...</p>
                                        </div>
                                    </div>
                                    <button className="text-slate-500 hover:text-white"></button>
                                </div>

                                {/* Chat Body */}
                                <div className="flex-1 p-6 overflow-y-auto space-y-6">
                                    {/* Bot Message */}
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white shrink-0 text-xs">AI</div>
                                        <div className="space-y-2 max-w-[85%]">
                                            <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none text-slate-200 text-sm shadow-sm border border-white/5">
                                                Halo! Saya siap membantu Anda. Silakan tanya tentang syarat pendirian PT, CV, atau peraturan perpajakan terbaru.
                                            </div>
                                            <span className="text-[10px] text-slate-500 ml-1">10:00 AM</span>
                                        </div>
                                    </div>

                                    {/* User Message (Static Example) */}
                                    <div className="flex gap-4 flex-row-reverse">
                                        <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-white shrink-0 text-xs">ME</div>
                                        <div className="space-y-2 max-w-[85%]">
                                            <div className="bg-[#b8860b] p-4 rounded-2xl rounded-tr-none text-white text-sm shadow-md">
                                                Apa syarat minimal modal untuk PT PMA?
                                            </div>
                                            <span className="text-[10px] text-slate-500 text-right mr-1 block">10:02 AM</span>
                                        </div>
                                    </div>

                                    {/* Dynamic Response */}
                                    {isAiLoading && (
                                        <div className="flex gap-4">
                                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white shrink-0 text-xs">AI</div>
                                            <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none text-slate-200 text-sm w-16 flex items-center justify-center gap-1">
                                                <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></div>
                                                <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-100"></div>
                                                <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-200"></div>
                                            </div>
                                        </div>
                                    )}

                                    {aiMessage && (
                                        <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-4">
                                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white shrink-0 text-xs">AI</div>
                                            <div className="space-y-2 max-w-[85%]">
                                                <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none text-slate-200 text-sm shadow-sm border border-white/5 leading-relaxed">
                                                    {aiMessage}
                                                </div>
                                                <span className="text-[10px] text-slate-500 ml-1">Just Now</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Chat Input */}
                                <div className="p-4 bg-slate-800 border-t border-white/5">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Ketik pertanyaan hukum Anda..."
                                            className="w-full bg-slate-900 text-white pl-4 pr-12 py-3.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#b8860b] placeholder:text-slate-600"
                                            onKeyDown={(e) => e.key === 'Enter' && askAi()}
                                        />
                                        <button
                                            onClick={askAi}
                                            disabled={isAiLoading}
                                            className="absolute right-2 top-2 p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 transition-all"
                                        >
                                            <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us / Trust Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-blue-400/20 rounded-[2rem] -rotate-3 blur-md"></div>
                            <img
                                src={officeImage}
                                alt="Professional Team"
                                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                            />
                            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                                <div className="flex gap-1 mb-2">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="fill-[#fcd34d] text-[#fcd34d]" />)}
                                </div>
                                <p className="text-slate-600 text-sm italic">"Proses sangat cepat, dalam 1 hari SK Kemenkum sudah terbit. Pelayanan sangat responsif!"</p>
                                <div className="mt-4 flex items-center gap-3">
                                    <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-xs">Alif S.</p>
                                        <p className="text-slate-500 text-[10px]">PT Digi Kreatif</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <span className="text-[#b8860b] font-bold tracking-widest uppercase text-xs mb-2 block">Kenapa LegalPro?</span>
                            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Mitra Strategis Pertumbuhan Bisnis Anda</h2>
                            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                                Kami bukan sekadar biro jasa, melainkan konsultan yang memastikan pondasi bisnis Anda kuat secara hukum agar Anda bisa fokus pada ekspansi.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900">Jaminan Keabsahan 100%</h4>
                                        <p className="text-slate-500 text-sm">Dokumen diterbitkan langsung oleh instansi terkait (Kemenkum, BKPM, KPP).</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                                        <Zap size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900">Kilat & Transparan</h4>
                                        <p className="text-slate-500 text-sm">Sistem tracking realtime. Tanpa biaya tersembunyi di tengah proses.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900">Dukungan Purna Jual</h4>
                                        <p className="text-slate-500 text-sm">Konsultasi gratis pasca pendirian terkait pajak dan pelaporan.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;