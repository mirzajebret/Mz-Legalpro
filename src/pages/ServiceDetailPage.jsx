import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Star, ArrowLeft, Shield, FileText, Clock, AlertCircle } from 'lucide-react';
import { getServiceById } from '../data/servicesData';

const ServiceDetailPage = () => {
    const { id } = useParams();
    const [serviceData, setServiceData] = useState(null);

    useEffect(() => {
        const data = getServiceById(id);
        if (data) {
            setServiceData(data);
        } else {
            // Fallback for unknown services
            setServiceData({
                title: `Layanan ${id.replace('-', ' ').toUpperCase()}`,
                heroImage: "https://images.unsplash.com/photo-1551836022-8b2858c9c69b?w=500&auto=format&fit=crop&q=80&w=600",
                desc: "Layanan legalitas profesional untuk kebutuhan bisnis Anda. Tim kami akan membantu mengurus segala dokumen yang diperlukan.",
                benefits: ["Konsultasi Gratis", "Proses Transparan", "Legalitas Terjamin"],
                timeline: "Contact Us",
                packages: [
                    {
                        name: "BASIC",
                        price: "Rp 5.500.000",
                        features: ["Akta Pendirian", "SK Kemenkop UKM", "NPWP Badan", "NIB", "Draft AD/ART"]
                    },
                    {
                        name: "LENGKAP",
                        price: "Rp 7.500.000",
                        recommended: true,
                        features: ["Semua fitur BASIC", "BNRI", "Stempel", "Konsultasi Kepengurusan"]
                    }
                ]
            });
        }
    }, [id]);

    if (!serviceData) return <div className="h-screen flex items-center justify-center bg-slate-50"><div className="animate-pulse text-slate-400">Loading...</div></div>;

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Header Hero */}
            <div className="relative h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src={serviceData.heroImage} alt={serviceData.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <Link to="/" className="inline-flex items-center text-sm text-white/70 hover:text-white mb-6 transition-colors border border-white/20 px-4 py-2 rounded-full backdrop-blur-md">
                        <ArrowLeft size={16} className="mr-2" /> Kembali ke Beranda
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif leading-tight">{serviceData.title}</h1>
                    <p className="text-slate-200 max-w-2xl mx-auto text-lg leading-relaxed">{serviceData.desc}</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-20">
                {/* Info Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 flex items-start gap-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                            <Shield size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-1">Jaminan Legal</h4>
                            <p className="text-sm text-slate-500">100% Sah & Terdaftar</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 flex items-start gap-4">
                        <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
                            <Clock size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-1">Estimasi Waktu</h4>
                            <p className="text-sm text-slate-500">{serviceData.timeline}</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 flex items-start gap-4">
                        <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                            <FileText size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-1">All-in-One</h4>
                            <p className="text-sm text-slate-500">Berkas lengkap terima jadi</p>
                        </div>
                    </div>
                </div>

                {/* Packages */}
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-10 font-serif">Pilihan Paket</h2>

                {/* Use 4-column grid for NIB & NPWP, 3-column for others */}
                <div className={`grid gap-8 items-start ${id === 'nib-npwp' ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'}`}>
                    {serviceData.packages.map((pkg, idx) => (
                        <div key={idx} className={`relative bg-white p-8 rounded-3xl border transition-all duration-300 flex flex-col ${pkg.recommended ? 'border-[#b8860b] shadow-2xl lg:scale-105 z-10' : 'border-slate-100 shadow-sm hover:shadow-xl'}`}>
                            {pkg.recommended && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#b8860b] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">
                                    TOP SELLER
                                </div>
                            )}

                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">{pkg.name}</h3>
                                {pkg.desc && (
                                    <p className="text-xs text-slate-500 leading-relaxed">{pkg.desc}</p>
                                )}
                            </div>

                            <div className="text-3xl font-bold text-slate-900 mb-6">{pkg.price}</div>

                            <ul className="space-y-4 mb-6 flex-grow">
                                {pkg.features.map((feat, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600">
                                        <CheckCircle2 className="text-[#b8860b] shrink-0 w-5 h-5" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            {pkg.note && (
                                <div className="mb-6 p-3 bg-amber-50 border border-amber-200 rounded-xl">
                                    <div className="flex items-start gap-2">
                                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                                        <p className="text-xs text-amber-800 leading-relaxed">{pkg.note}</p>
                                    </div>
                                </div>
                            )}

                            <button className={`w-full py-4 rounded-xl font-bold transition-all ${pkg.recommended ? 'bg-[#b8860b] text-white hover:bg-[#9a7009] shadow-lg hover:shadow-[#b8860b]/30' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}>
                                Konsultasi Paket Ini
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailPage;