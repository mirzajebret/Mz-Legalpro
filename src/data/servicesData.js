// Service Data Configuration
// Best practice: Centralized data management for all services

export const servicesData = {
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
                features: ["Pengecekan Nama PT", "Akta Pendirian Notaris", "SK Kemenkum",]
            },
            {
                name: "PRO",
                price: "Rp 5.500.000",
                recommended: true,
                features: ["Semua fitur LITE", "Desain Stempel Perusahaan", "NPWP Badan"]
            },
            {
                name: "COMPLETE",
                price: "Rp 8.000.000",
                features: ["Semua fitur PRO", "NIB (OSS RBA)", "Company Profile Standar", "Draft Sirkuler"]
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
                features: ["Pernyataan Pendirian", "Sertifikat Kemenkum", "NPWP Badan", "NIB (OSS RBA)"]
            },
            {
                name: "PRO",
                price: "Rp 2.500.000",
                recommended: true,
                features: ["Semua fitur BASIC", "Stempel Perusahaan", "Company Profile Standar"]
            }
        ]
    },
    'cv': {
        title: "Pendirian CV (Persekutuan Komanditer)",
        heroImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=80&w=600",
        desc: "Bentuk badan usaha warisan Belanda yang masih populer untuk kemitraan bisnis sederhana.",
        benefits: ["Biaya pendirian lebih murah", "Struktur pengambilan keputusan simpel", "Tidak ada modal minimal"],
        timeline: "3-5 Hari Kerja",
        packages: [
            {
                name: "BASIC",
                price: "Rp 2.500.000",
                features: ["Pengecekan Nama", "Akta Notaris", "SK Kemenkum"]
            },
            {
                name: "LENGKAP",
                price: "Rp 4.000.000",
                recommended: true,
                features: ["Semua fitur BASIC", "NPWP Badan", "NIB"]
            }
        ]
    },
    'pt-pma': {
        title: "PT PMA (Penanaman Modal Asing)",
        heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200",
        desc: "Layanan penuh untuk investor asing yang ingin berbisnis di Indonesia dengan dukungan konsultasi BKPM.",
        benefits: ["Konsultasi BKPM lengkap", "Pengurusan izin lokasi", "Dukungan pelaporan LKPM"],
        timeline: "7-14 Hari Kerja",
        packages: [
            {
                name: "STANDARD",
                price: "Hubungi Kami",
                features: ["Konsultasi BKPM", "Akta & SK Kemenkum", "NIB", "NPWP Badan", "Izin Lokasi Dasar"]
            },
            {
                name: "PREMIUM",
                price: "Custom Quote",
                recommended: true,
                features: ["Semua fitur STANDARD", "Laporan LKPM", "Konsultasi Pajak", "Dukungan Banking"]
            }
        ]
    },
    'koperasi': {
        title: "Pendirian Koperasi",
        heroImage: "https://images.unsplash.com/photo-1551836022-8b2858c9c69b?w=500&auto=format&fit=crop&q=80&w=600",
        desc: "Layanan penuh untuk pendirian Koperasi di Indonesia sesuai regulasi Kemenkop UKM.",
        benefits: ["Sesuai regulasi Kemenkop", "Struktur kepengurusan lengkap", "Dukungan AD/ART"],
        timeline: "5-7 Hari Kerja",
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
    },
    'nib-npwp': {
        title: "Pengurusan NIB & NPWP",
        heroImage: "/assets/images/addon/addon-nib.webp",
        desc: "Layanan profesional untuk penerbitan NIB (Nomor Induk Berusaha) dan pembuatan NPWP untuk badan usaha maupun perorangan.",
        benefits: ["Proses cepat & mudah", "Terintegrasi OSS RBA", "Harga transparan sesuai kategori"],
        timeline: "2-5 Hari Kerja",
        packages: [
            {
                name: "NIB Lokasi ter-RDTR",
                price: "Rp 500.000*",
                features: [
                    "Penerbitan NIB via OSS RBA",
                    "Konsultasi tingkat risiko usaha",
                    "Konsultasi skala usaha",
                    "Monitoring proses real-time",
                    "Support hingga NIB terbit"
                ],
                note: "Harga final tergantung tingkat risiko dan skala usaha"
            },
            {
                name: "NIB Lokasi non-RDTR",
                price: "Rp 700.000*",
                recommended: true,
                features: [
                    "Semua fitur NIB ter-RDTR",
                    "Pengurusan persetujuan lokasi",
                    "Konsultasi kesesuaian lokasi",
                    "Handling proses validasi tambahan",
                    "Garansi hingga NIB terbit"
                ],
                note: "Harga final tergantung tingkat risiko dan skala usaha"
            },
            {
                name: "NPWP Badan",
                price: "Rp 500.000*",
                desc: "Untuk badan usaha (PT, CV, Koperasi, dll)",
                features: [
                    "Registrasi NPWP Badan",
                    "Pengurusan ke KPP terkait",
                    "Kartu NPWP & SKT",
                    "EFIN (jika diperlukan)",
                    "Konsultasi perpajakan dasar"
                ]
            },
            {
                name: "NPWP Perorangan",
                price: "Rp 150.000*",
                desc: "Untuk pengusaha perorangan",
                features: [
                    "Registrasi NPWP Pribadi",
                    "Pengurusan ke KPP",
                    "Kartu NPWP",
                    "EFIN (jika diperlukan)",
                    "Panduan penggunaan"
                ]
            }
        ]
    }
};

// Helper function to get service by ID
export const getServiceById = (id) => {
    return servicesData[id] || null;
};

// Helper function to get all service IDs
export const getAllServiceIds = () => {
    return Object.keys(servicesData);
};
