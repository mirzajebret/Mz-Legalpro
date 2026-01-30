import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Star, ArrowRight } from 'lucide-react';

const ServiceDetailPage = () => {
    const { id } = useParams();
    const [serviceData, setServiceData] = useState(null);

    // Mock Data Database
    const servicesDB = {
        'pt-biasa': {
            title: "Pendirian PT (Perseroan Terbatas)",
            desc: "Badan usaha berbadan hukum yang modalnya terdiri dari saham-saham.",
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
            desc: "Badan usaha untuk UMK yang didirikan oleh 1 orang saja.",
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
            desc: "Badan usaha non-badan hukum yang didirikan minimal 2 orang.",
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
        // Simulate fetching data or getting from static DB
        if (servicesDB[id]) {
            setServiceData(servicesDB[id]);
        } else {
            // Fallback or generic data for other services
            setServiceData({
                title: `Layanan ${id.replace('-', ' ').toUpperCase()}`,
                desc: "Layanan legalitas profesional untuk kebutuhan bisnis Anda.",
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

    if (!serviceData) return <div className="pt-40 text-center">Loading...</div>;

    return (
        <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <Link to="/" className="inline-flex items-center text-sm text-slate-400 hover:text-[#778ca4] mb-4">
                    &larr; Kembali ke Beranda
                </Link>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#313c45] mb-4">{serviceData.title}</h1>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg">{serviceData.desc}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
                {serviceData.packages.map((pkg, idx) => (
                    <div key={idx} className={`relative p-8 rounded-3xl border ${pkg.recommended ? 'border-[#778ca4] bg-[#f8fafc] shadow-xl scale-105 z-10' : 'border-slate-100 bg-white shadow-sm'} transition-all`}>
                        {pkg.recommended && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#778ca4] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">
                                PALING LARIS
                            </div>
                        )}
                        <h3 className="text-xl font-bold text-[#313c45] mb-2">{pkg.name}</h3>
                        <div className="text-3xl font-black text-[#313c45] mb-6">{pkg.price}</div>

                        <ul className="space-y-4 mb-8">
                            {pkg.features.map((feat, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600">
                                    <CheckCircle2 className="text-[#778ca4] shrink-0 w-5 h-5" />
                                    <span>{feat}</span>
                                </li>
                            ))}
                        </ul>

                        <button className={`w-full py-4 rounded-xl font-bold transition-all ${pkg.recommended ? 'bg-[#313c45] text-white hover:bg-[#778ca4]' : 'bg-slate-100 text-[#313c45] hover:bg-slate-200'}`}>
                            Pilih Paket
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceDetailPage;
