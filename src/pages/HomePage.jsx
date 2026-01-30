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
    Globe
} from 'lucide-react';

const HomePage = () => {
    const [activeTab, setActiveTab] = useState('utama');
    const [aiMessage, setAiMessage] = useState("");
    const [isAiLoading, setIsAiLoading] = useState(false);

    const services = [
        {
            id: 'pt-biasa',
            title: "Pendirian PT",
            desc: "Pengurusan lengkap Akta Notaris, SK Kemenkumham, hingga legalitas dasar.",
            icon: <ShieldCheck className="w-6 h-6" />,
            category: "utama"
        },
        {
            id: 'pt-perorangan',
            title: "PT Perorangan",
            desc: "Solusi usaha untuk satu orang pendiri dengan tanggung jawab terbatas.",
            icon: <UserCheck className="w-6 h-6" />,
            category: "utama"
        },
        {
            id: 'cv',
            title: "Pendirian CV",
            desc: "Solusi cepat untuk UMKM yang ingin memiliki legalitas usaha resmi.",
            icon: <Briefcase className="w-6 h-6" />,
            category: "utama"
        },
        {
            id: 'perkumpulan',
            title: "Perkumpulan",
            desc: "Legalitas untuk komunitas atau organisasi non-profit.",
            icon: <Users className="w-6 h-6" />,
            category: "utama"
        },
        {
            id: 'yayasan',
            title: "Yayasan",
            desc: "Badan hukum untuk kegiatan sosial, keagamaan, dan kemanusiaan.",
            icon: <Building className="w-6 h-6" />,
            category: "utama"
        },
        {
            id: 'koperasi',
            title: "Koperasi",
            desc: "Badan usaha yang beranggotakan orang-seorang atau badan hukum koperasi.",
            icon: <Users className="w-6 h-6" />,
            category: "utama"
        },
        {
            id: 'pt-pma',
            title: "PT PMA",
            desc: "Penanaman Modal Asing untuk investor luar negeri di Indonesia.",
            icon: <Globe className="w-6 h-6" />,
            category: "utama"
        },
        {
            id: 'npwp',
            title: "Pembuatan NPWP",
            desc: "Pengurusan NPWP Pribadi maupun Badan Usaha secara instan.",
            icon: <FileText className="w-6 h-6" />,
            category: "addon"
        },
        {
            id: 'nib',
            title: "Pengurusan NIB",
            desc: "Registrasi pada sistem OSS RBA untuk mendapatkan NIB & Izin Usaha.",
            icon: <UserCheck className="w-6 h-6" />,
            category: "addon"
        },
        {
            id: 'bnri',
            title: "Penerbitan BNRI",
            desc: "Pengumuman dalam Berita Negara Republik Indonesia untuk keabsahan publik.",
            icon: <Scale className="w-6 h-6" />,
            category: "addon"
        }
    ];

    const askAi = () => {
        setIsAiLoading(true);
        setTimeout(() => {
            setAiMessage("Berdasarkan peraturan terbaru, untuk mendirikan PT Persekutuan Modal, Anda minimal memerlukan 2 pemegang saham dan modal dasar yang ditentukan dalam RUPS. Apakah Anda ingin saya buatkan checklist dokumennya?");
            setIsAiLoading(false);
        }, 1500);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d5dbe2]/30 border border-[#b3bfcb]/30 text-[#313c45] text-sm font-medium mb-8">
                        <Zap size={14} className="text-[#778ca4]" />
                        <span>Terintegrasi dengan sistem OSS RBA & AHU</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#313c45] leading-[1.1] mb-6">
                        Legalkan Bisnis Anda <br />
                        <span className="text-[#778ca4]">Tanpa Birokrasi Rumit.</span>
                    </h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Kami membantu pengurusan badan hukum PT, CV, hingga perizinan berusaha (NIB) dengan standar kantor Notaris. Profesional, cepat, dan transparan.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-[#313c45] text-white rounded-xl font-semibold hover:shadow-xl hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2">
                            Mulai Konsultasi <ArrowRight size={18} />
                        </button>
                        <Link to="/pricelist" className="px-8 py-4 bg-white text-[#313c45] border border-[#d5dbe2] rounded-xl font-semibold hover:bg-slate-50 transition-all">
                            Lihat Pricelist
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="layanan" className="py-20 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <h2 className="text-3xl font-bold text-[#313c45] mb-4">Layanan Legalitas</h2>
                            <p className="text-slate-500">Pilih layanan yang sesuai dengan kebutuhan skala bisnis Anda.</p>
                        </div>
                        <div className="flex p-1 bg-white rounded-lg border border-slate-200">
                            <button
                                onClick={() => setActiveTab('utama')}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'utama' ? 'bg-[#778ca4] text-white shadow-sm' : 'text-slate-500'}`}
                            >
                                Layanan Utama
                            </button>
                            <button
                                onClick={() => setActiveTab('addon')}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'addon' ? 'bg-[#778ca4] text-white shadow-sm' : 'text-slate-500'}`}
                            >
                                Add-ons
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.filter(s => activeTab === 'all' || s.category === activeTab).map((item, idx) => (
                            <div key={idx} className="group p-8 bg-white border border-slate-100 rounded-2xl hover:border-[#778ca4]/50 hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 bg-[#d5dbe2]/30 rounded-xl flex items-center justify-center text-[#778ca4] mb-6 group-hover:bg-[#778ca4] group-hover:text-white transition-colors">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#313c45] mb-3">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                        {item.desc}
                                    </p>
                                </div>

                                {item.category === 'utama' ? (
                                    <Link to={`/layanan/${item.id}`} className="flex items-center gap-2 text-[#778ca4] font-semibold text-sm cursor-pointer group-hover:gap-3 transition-all mt-auto">
                                        Pelajari Lebih Lanjut <ArrowRight size={16} />
                                    </Link>
                                ) : (
                                    <Link to="/pricelist" className="flex items-center gap-2 text-[#778ca4] font-semibold text-sm cursor-pointer group-hover:gap-3 transition-all mt-auto">
                                        Harga <ArrowRight size={16} />
                                    </Link>
                                )}

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Assistant Feature Showcase */}
            <section id="ai-assistant" className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-[#313c45] rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative shadow-2xl">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#778ca4]/20 to-transparent pointer-events-none"></div>

                        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#d5dbe2] text-xs font-bold mb-6 tracking-widest uppercase">
                                    AI Powered Experience
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Konsultasi Hukum Dasar <br /> Kini Lebih Cerdas.
                                </h2>
                                <p className="text-[#b3bfcb] mb-8 leading-relaxed">
                                    Gunakan LegalAI untuk mendapatkan jawaban instan mengenai regulasi pendirian usaha di Indonesia. Dilatih khusus dengan data peraturan Kemenkumham terbaru.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center gap-3 text-white/90">
                                        <CheckCircle2 className="text-[#778ca4]" size={20} />
                                        <span>Cek ketersediaan nama perusahaan</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-white/90">
                                        <CheckCircle2 className="text-[#778ca4]" size={20} />
                                        <span>Simulasi biaya pajak pendirian</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-xl">
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                                    <div className="w-10 h-10 bg-[#778ca4] rounded-full flex items-center justify-center text-white">
                                        <Bot size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#313c45]">LegalAI Assistant</h4>
                                        <span className="text-[10px] text-green-500 font-bold uppercase tracking-wider">Online Sekarang</span>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-6 min-h-[150px]">
                                    <div className="bg-slate-50 p-4 rounded-xl rounded-tl-none mr-8">
                                        <p className="text-sm text-slate-600">Halo! Saya asisten AI legal Anda. Apa yang ingin Anda tanyakan hari ini?</p>
                                    </div>
                                    {aiMessage && (
                                        <div className="bg-[#d5dbe2]/50 p-4 rounded-xl rounded-tl-none mr-8 animate-in fade-in slide-in-from-bottom-2">
                                            <p className="text-sm text-[#313c45]">{aiMessage}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Tanya syarat pendirian PT..."
                                        className="w-full p-4 bg-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#778ca4]/50"
                                    />
                                    <button
                                        onClick={askAi}
                                        disabled={isAiLoading}
                                        className="absolute right-2 top-2 p-2 bg-[#313c45] text-white rounded-lg hover:bg-[#778ca4] disabled:opacity-50 transition-all"
                                    >
                                        {isAiLoading ? "..." : <MessageSquare size={18} />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-20 border-t border-slate-50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-[#313c45] mb-12">Mengapa Memilih Kami?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="p-4">
                            <h4 className="text-4xl font-black text-[#778ca4] mb-2">100+</h4>
                            <p className="text-slate-500 text-sm font-medium">Badan Usaha Terdaftar</p>
                        </div>
                        <div className="p-4">
                            <h4 className="text-4xl font-black text-[#778ca4] mb-2">3-5</h4>
                            <p className="text-slate-500 text-sm font-medium">Hari Kerja Estimasi</p>
                        </div>
                        <div className="p-4">
                            <h4 className="text-4xl font-black text-[#778ca4] mb-2">100%</h4>
                            <p className="text-slate-500 text-sm font-medium">Transparansi Biaya</p>
                        </div>
                        <div className="p-4">
                            <h4 className="text-4xl font-black text-[#778ca4] mb-2">Pro</h4>
                            <p className="text-slate-500 text-sm font-medium">Standar Notaris</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
