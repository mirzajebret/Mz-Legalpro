import React from 'react';
import { Target, Heart, Award, Users, Briefcase, CheckCircle2 } from 'lucide-react';

const AboutPage = () => {
    return (
        <>
            {/* Header */}
            <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[#b8860b] font-bold tracking-widest uppercase text-xs mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Profil Perusahaan</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">Siapa Kami?</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                        SolusiNIB.online hadir sebagai jembatan antara pengusaha visioner dengan kepastian hukum di Indonesia. Kami memadukan keahlian legal dengan teknologi digital untuk menghadirkan layanan legalitas yang mudah, cepat, dan terpercaya.
                    </p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600"
                                alt="Meeting"
                                className="rounded-2xl shadow-lg mt-8 transform hover:-translate-y-2 transition-transform duration-500"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600"
                                alt="Office"
                                className="rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-500"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-serif">Misi Kami</h2>
                            <p className="text-slate-500 mb-8 leading-relaxed text-lg">
                                Menghilangkan hambatan birokrasi bagi pengusaha Indonesia. Kami percaya bahwa memulai bisnis seharusnya mudah, cepat, dan transparan agar ekonomi dapat bertumbuh.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-[#b8860b] flex-shrink-0 shadow-sm">
                                        <Target size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2 font-serif">Akurasi Tanpa Kompromi</h4>
                                        <p className="text-slate-500 leading-relaxed">Setiap dokumen diverifikasi berlapis oleh tim legal ahli untuk mencegah kesalahan di masa depan.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-[#b8860b] flex-shrink-0 shadow-sm">
                                        <Heart size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2 font-serif">Pendekatan Personal</h4>
                                        <p className="text-slate-500 leading-relaxed">Kami memahami setiap bisnis unik. Solusi yang kami tawarkan disesuaikan dengan kebutuhan industri Anda.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <span className="text-[#b8860b] font-bold tracking-widest uppercase text-xs mb-2 block">Tim Ahli</span>
                    <h2 className="text-4xl font-bold text-slate-900 mb-12 font-serif">Bertemu Para Pakar</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sarah Utami, S.H., M.Kn.",
                                role: "Lead Notary Partner",
                                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
                                desc: "Berpengalaman 10+ tahun dalam hukum korporasi dan kenotariatan."
                            },
                            {
                                name: "Budi Hermawan, S.H.",
                                role: "Legal Consultant",
                                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
                                desc: "Spesialisasi dalam perizinan OSS RBA dan Investasi Asing (PMA)."
                            },
                            {
                                name: "Jessica Tan",
                                role: "Client Success Manager",
                                img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
                                desc: "Memastikan perjalanan legalitas Anda berjalan mulus tanpa hambatan."
                            }
                        ].map((member, idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="h-64 overflow-hidden">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <div className="p-6 text-left">
                                    <h3 className="text-xl font-bold text-slate-900 font-serif">{member.name}</h3>
                                    <p className="text-[#b8860b] text-sm font-semibold mb-3">{member.role}</p>
                                    <p className="text-slate-500 text-sm leading-relaxed">{member.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-900 border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6 font-serif">Siap Melangkah Legal?</h2>
                    <p className="text-slate-400 mb-8">Jangan biarkan masalah administrasi menghambat potensi bisnis Anda.</p>
                    <button className="px-8 py-4 bg-[#b8860b] hover:bg-[#9a7009] text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-[#b8860b]/30">
                        Hubungi Tim Kami
                    </button>
                </div>
            </section>
        </>
    );
};

export default AboutPage;