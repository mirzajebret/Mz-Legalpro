import React from 'react';
import { Check, Shield } from 'lucide-react';

const PricelistPage = () => {
    const pricelist = [
        {
            category: "Pendirian Badan Usaha",
            items: [
                { name: "Pendirian PT Perorangan", price: "Rp 1.500.000", desc: "Cocok untuk UMK pemula", features: ["Sertifikat Pendirian", "NPWP Badan", "NIB (OSS RBA)", "Draft Surat Pernyataan"] },
                { name: "Pendirian CV", price: "Rp 2.500.000", desc: "Pilihan hemat kemitraan", popular: true, features: ["Akta Notaris", "SK Kemenkum", "NPWP Badan", "NIB (OSS RBA)", "Merek Dagang (Cek)"] },
                { name: "Pendirian PT Biasa", price: "Rp 3.500.000", desc: "Standard perusahaan bonafit", features: ["Akta Notaris", "SK Kemenkum", "NPWP Badan", "NIB (OSS RBA)", "BNRI (Optional)"] },
            ]
        },
        {
            category: "Layanan Khusus",
            items: [
                { name: "Yayasan / Perkumpulan", price: "Rp 4.000.000", desc: "Badan hukum sosial/non-profit", features: ["Akta Notaris", "SK Kemenkum", "NPWP Badan", "NIB"] },
                { name: "PT PMA (Asing)", price: "Mulai Rp 15jt", desc: "Penanaman Modal Asing", features: ["Akta & SK", "NIB", "Laporan LKPM", "Izin Lokasi", "Konsultasi BKPM"] },
            ]
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <div className="bg-slate-900 pt-32 pb-20 px-4 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif relative z-10">Investasi Legalitas</h1>
                <p className="text-slate-400 relative z-10 text-lg">Harga transparan, tanpa biaya tersembunyi di tengah proses.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid gap-20">
                    {pricelist.map((section, idx) => (
                        <div key={idx}>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="h-px bg-slate-200 flex-grow"></div>
                                <h2 className="text-2xl font-bold text-slate-800 font-serif uppercase tracking-wider">{section.category}</h2>
                                <div className="h-px bg-slate-200 flex-grow"></div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {section.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className={`relative bg-white border p-8 rounded-3xl transition-all duration-300 flex flex-col ${item.popular ? 'border-[#b8860b] shadow-2xl scale-105 z-10' : 'border-slate-100 shadow-sm hover:shadow-xl'}`}>
                                        {item.popular && (
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#b8860b] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-lg flex items-center gap-1">
                                                <Shield size={12} fill="white" /> PALING LARIS
                                            </div>
                                        )}

                                        <div className="mb-6">
                                            <h3 className="font-bold text-xl text-slate-900 font-serif mb-2">{item.name}</h3>
                                            <p className="text-sm text-slate-500">{item.desc}</p>
                                        </div>

                                        <div className="mb-8 pb-8 border-b border-slate-100">
                                            <span className="text-3xl font-bold text-slate-900">{item.price}</span>
                                            {item.price.includes("Mulai") && <span className="text-xs text-slate-400 ml-1">/ nett</span>}
                                        </div>

                                        <ul className="space-y-4 mb-8 flex-grow">
                                            {item.features.map((feat, fIdx) => (
                                                <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600">
                                                    <div className="mt-0.5 p-0.5 rounded-full bg-green-100 text-green-600">
                                                        <Check size={12} strokeWidth={3} />
                                                    </div>
                                                    <span>{feat}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <button className={`w-full py-4 rounded-xl font-bold transition-all ${item.popular ? 'bg-[#b8860b] text-white hover:bg-[#9a7009] shadow-lg hover:shadow-[#b8860b]/30' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}>
                                            Pilih Paket
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 p-10 md:p-16 rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#b8860b]/20 rounded-full blur-3xl"></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif relative z-10">Butuh Penawaran Khusus Korporasi?</h3>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto relative z-10">Untuk pendirian lebih dari 5 entitas atau kebutuhan legalitas kompleks, tim sales kami siap memberikan penawaran terbaik.</p>
                    <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all relative z-10">
                        Hubungi Tim B2B
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PricelistPage;