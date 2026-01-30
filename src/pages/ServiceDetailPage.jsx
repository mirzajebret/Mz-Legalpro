import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Star, ArrowLeft, Shield, FileText, Clock } from 'lucide-react';

const ServiceDetailPage = () => {
    const { id } = useParams();
    const [serviceData, setServiceData] = useState(null);

    // Enhanced Mock Data
    const servicesDB = {
        'pt-biasa': {
            title: "Pendirian PT (Perseroan Terbatas)",
            heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
            desc: "Badan usaha berbadan hukum yang modalnya terdiri dari saham-saham. Memberikan perlindungan aset pribadi pemegang saham.",
            benefits: ["Aset pribadi aman (terpisah)", "Lebih bonafit di mata klien", "Bisa ikut tender pemerintah"],
            timeline: "3-5 Hari Kerja",
            packages: [
                {
                    name: "LITE",
                    price: "Rp 3.500.000",
                    features: ["Pengecekan Nama PT", "Akta Pendirian Notaris", "SK Kemenkumham", "NPWP Badan", "NIB (OSS RBA)"]
                },
                {
                    name: "PRO",
                    price: "Rp 5.500.000",
                    recommended: true,
                    features: ["Semua fitur LITE", "BNRI (Berita Negara)", "Rekening Bank Perusahaan", "Stempel Perusahaan", "Draft Perjanjian Pemegang Saham"]
                },
                {
                    name: "COMPLETE",
                    price: "Rp 8.000.000",
                    features: ["Semua fitur PRO", "Virtual Office (1 Tahun)", "PKP (Pengusaha Kena Pajak)", "EFIN Badan"]
                }
            ]
        },
        'pt-perorangan': {
            title: "Pendirian PT Perorangan",
            heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
            desc: "Solusi revolusioner UU Cipta Kerja. Badan usaha berbadan hukum yang didirikan oleh 1 orang saja untuk Usaha Mikro & Kecil.",
            benefits: ["Hanya butuh 1 orang pendiri", "Proses sangat cepat (1 hari)", "Pemisahan harta pribadi & usaha"],
            timeline: "1-2 Hari Kerja",
            packages: [
                {
                    name: "BASIC",
                    price: "Rp 1.500.000",
                    features: ["Pernyataan Pendirian", "Sertifikat Kemenkumham", "NPWP Badan", "NIB (OSS RBA)"]
                },
                {
                    name: "PRO",
                    price: "Rp 2.500.000",
                    recommended: true,
                    features: ["Semua fitur BASIC", "Stempel Perusahaan", "Rekening Bank", "Laporan Pajak Nihil (1 Thn)"]
                }
            ]
        },
        'cv': {
            title: "Pendirian CV (Persekutuan Komanditer)",
            heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200",
            desc: "Bentuk badan usaha warisan Belanda yang masih populer untuk kemitraan bisnis sederhana.",
            benefits: ["Biaya pendirian lebih murah", "Struktur pengambilan keputusan simpel", "Tidak ada modal minimal"],
            timeline: "3-5 Hari Kerja",
            packages: [
                {
                    name: "BASIC",
                    price: "Rp 2.500.000",
                    features: ["Pengecekan Nama", "Akta Notaris", "SK Kemenkumham", "NPWP Badan", "NIB"]
                },
                {
                    name: "LENGKAP",
                    price: "Rp 4.000.000",
                    recommended: true,
                    features: ["Semua fitur BASIC", "BNRI", "Rekening Bank"]
                }
            ]
        }
    };

    useEffect(() => {
        if (servicesDB[id]) {
            setServiceData(servicesDB[id]);
        } else {
            setServiceData({
                title: `Layanan ${id.replace('-', ' ').toUpperCase()}`,
                heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
                desc: "Layanan legalitas profesional untuk kebutuhan bisnis Anda. Tim kami akan membantu mengurus segala dokumen yang diperlukan.",
                benefits: ["Konsultasi Gratis", "Proses Transparan", "Legalitas Terjamin"],
                timeline: "Contact Us",
                packages: [
                    {
                        name: "STANDARD",
                        price: "Hubungi Kami",
                        features: ["Konsultasi Legal", "Pengurusan Dokumen Utama", "Monitoring Progress"]
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
                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {serviceData.packages.map((pkg, idx) => (
                        <div key={idx} className={`relative bg-white p-8 rounded-3xl border transition-all duration-300 ${pkg.recommended ? 'border-[#b8860b] shadow-2xl scale-105 z-10' : 'border-slate-100 shadow-sm hover:shadow-xl'}`}>
                            {pkg.recommended && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#b8860b] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">
                                    REKOMENDASI
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">{pkg.name}</h3>
                            <div className="text-3xl font-bold text-slate-900 mb-6">{pkg.price}</div>

                            <ul className="space-y-4 mb-8">
                                {pkg.features.map((feat, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600">
                                        <CheckCircle2 className="text-[#b8860b] shrink-0 w-5 h-5" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>

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