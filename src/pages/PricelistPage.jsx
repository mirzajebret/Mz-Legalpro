import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricelistPage = () => {
    const pricelist = [
        {
            category: "Pendirian Badan Usaha",
            items: [
                { name: "Pendirian PT Biasa", price: "Rp 3.500.000", desc: "Akta, SK, NIB, NPWP" },
                { name: "Pendirian PT Perorangan", price: "Rp 1.500.000", desc: "Sertifikat, NIB, NPWP" },
                { name: "Pendirian CV", price: "Rp 2.500.000", desc: "Akta, SK, NIB, NPWP" },
                { name: "Pendirian Yayasan", price: "Rp 4.000.000", desc: "Untuk sosial & kemanusiaan" },
                { name: "Pendirian Perkumpulan", price: "Rp 4.000.000", desc: "Komunitas & Organisasi" },
                { name: "Pendirian Koperasi", price: "Hubungi Kami", desc: "Primer / Sekunder" },
                { name: "Pendirian PT PMA", price: "Mulai Rp 15.000.000", desc: "Full Service + LKPM" },
            ]
        },
        {
            category: "Izin & Legalitas Lain",
            items: [
                { name: "NIB (Nomor Induk Berusaha)", price: "Rp 500.000", desc: "RBA Low Risk" },
                { name: "NPWP Perusahaan/Pribadi", price: "Rp 300.000", desc: "Pendaftaran Online" },
                { name: "Penerbitan BNRI", price: "Rp 750.000", desc: "Berita Negara RI" },
                { name: "Virtual Office", price: "Mulai Rp 2.500.000/thn", desc: "Alamat Bisnis Prestisius" },
            ]
        }
    ];

    return (
        <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-[#313c45] mb-4">Daftar Harga Layanan</h1>
                <p className="text-slate-500">Transparan, tanpa biaya tersembunyi.</p>
            </div>

            <div className="grid gap-12">
                {pricelist.map((section, idx) => (
                    <div key={idx}>
                        <h2 className="text-2xl font-bold text-[#313c45] mb-6 border-b border-slate-200 pb-2">{section.category}</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {section.items.map((item, itemIdx) => (
                                <div key={itemIdx} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="font-bold text-lg text-[#313c45]">{item.name}</h3>
                                    </div>
                                    <p className="text-sm text-slate-500 mb-6">{item.desc}</p>
                                    <div className="flex items-end justify-between">
                                        <span className="text-xl font-bold text-[#778ca4]">{item.price}</span>
                                        <button className="px-4 py-2 bg-[#313c45] text-white text-sm rounded-lg hover:bg-[#778ca4] transition-colors">
                                            Pesan
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center bg-slate-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-[#313c45] mb-4">Butuh Penawaran Khusus?</h3>
                <p className="text-slate-500 mb-6">Untuk korporasi atau kebutuhan massal, hubungi tim kami untuk harga spesial.</p>
                <button className="px-6 py-3 bg-[#778ca4] text-white rounded-xl font-semibold hover:bg-[#313c45] transition-all">
                    Hubungi Sales
                </button>
            </div>
        </div>
    );
};

export default PricelistPage;
