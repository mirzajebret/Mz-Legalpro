import React from 'react';
import { Target, Heart, Award, Users } from 'lucide-react';

const AboutPage = () => {
    return (
        <>
            {/* Header */}
            <section className="pt-32 pb-12 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-[#313c45] mb-4">Tentang Kami</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        LegalPro Indonesia adalah mitra terpercaya bagi ribuan pengusaha dalam mengurus legalitas bisnis mereka.
                    </p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                alt="Office Life"
                                className="rounded-2xl shadow-xl"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-[#313c45] mb-6">Misi Kami</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Menghilangkan hambatan birokrasi bagi pengusaha Indonesia. Kami percaya bahwa memulai bisnis seharusnya mudah, cepat, dan transparan.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-[#778ca4]/10 rounded-lg flex items-center justify-center text-[#778ca4] flex-shrink-0">
                                        <Target size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#313c45] mb-1">Akurasi & Kecepatan</h4>
                                        <p className="text-sm text-slate-500">Memastikan dokumen legalitas Anda selesai tepat waktu dengan data yang akurat.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-[#778ca4]/10 rounded-lg flex items-center justify-center text-[#778ca4] flex-shrink-0">
                                        <Heart size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#313c45] mb-1">Pelayanan Prima</h4>
                                        <p className="text-sm text-slate-500">Dukungan konsultasi penuh dari awal hingga izin terbit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats/Team placeholder */}
            <section className="py-20 bg-[#313c45] text-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Tim Profesional</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                            <Users className="w-10 h-10 text-[#778ca4] mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Konsultan Hukum</h3>
                            <p className="text-[#b3bfcb] text-sm">Ahli dalam hukum korporasi dan ketenagakerjaan.</p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                            <Award className="w-10 h-10 text-[#778ca4] mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Notaris Mitra</h3>
                            <p className="text-[#b3bfcb] text-sm">Jaringan notaris terpercaya di seluruh Indonesia.</p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                            <Target className="w-10 h-10 text-[#778ca4] mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Support Agent</h3>
                            <p className="text-[#b3bfcb] text-sm">Siap membantu Anda 24/7 untuk segala pertanyaan.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
