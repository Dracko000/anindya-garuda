"use client";

import RevealWrapper from "./RevealWrapper";

const categories = [
  {
    emoji: "🕌",
    title: "Bidang 1: Agama, Mental & Moral",
    skills: ["SKK Sholat", "SKK Qori", "SKK Penabung"],
  },
  {
    emoji: "🎭",
    title: "Bidang 2: Patriotisme, Seni & Budaya",
    skills: [
      "SKK Pengatur Rumah",
      "SKK Pengatur Meja Makan",
      "SKK Pengatur Ruangan",
      "SKK Juru Gambar",
      "SKK Pembaca",
      "SKK Dirigen & Penyanyi",
    ],
  },
  {
    emoji: "🏃",
    title: "Bidang 3: Kesehatan & Ketangkasan",
    skills: [
      "SKK Gerak Jalan",
      "SKK Pengamat",
      "SKK Perenang",
      "SKK Penyelidik",
      "SKK Pendayung",
    ],
  },
  {
    emoji: "🔧",
    title: "Bidang 4: Keterampilan & Teknik Pembangunan",
    skills: [
      "SKK Juru Kebun",
      "SKK Pengendara Sepeda",
      "SKK Penjahit",
      "SKK Juru Masak",
      "SKK Juru Potret",
      "SKK Penjelajah",
      "SKK Juru Peta",
      "SKK Pengumpul Tanaman Hidup",
      "SKK Juru Kayu",
      "SKK Berkemah",
      "SKK Peternak Lele",
      "SKK Juru Anyam",
      "SKK Juru Tali",
      "SKK Penjilidan Buku",
      "SKK Juru Semboyan",
      "SKK Pengumpul Tanaman Kering",
      "SKK Penangkap Ikan",
    ],
  },
  {
    emoji: "🌍",
    title: "Bidang 5: Sosial & Lingkungan Hidup",
    skills: [
      "SKK Petunjuk Arah",
      "SKK Pengatur Lalu Lintas",
      "SKK Pemadam Kebakaran",
      "SKK Pengaman Kampung",
      "SKK Perawatan Anak",
      "SKK Perawatan Keluarga",
      "SKK Pembantu Ibu",
      "SKK Penghijauan",
      "SKK Juru Penerang",
      "SKK Juru Bahasa",
      "SKK Penerima Tamu",
      "SKK PPPK",
    ],
  },
  {
    emoji: "💻",
    title: "Teknologi & Keterampilan Digital",
    skills: [
      "Mengoperasikan Komputer",
      "Internet",
      "Desain Website",
      "Media Sosial",
      "Dokumentasi Digital",
    ],
  },
];

export default function Keterampilan() {
  return (
    <section id="keterampilan" className="bg-garuda-mid py-28 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <p className="text-garuda-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Keterampilan &amp; SKK
          </p>
        </RevealWrapper>
        <RevealWrapper delay={100}>
          <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-16">
            Syarat Kecakapan <span className="text-garuda-gold">Khusus</span>
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="p-7 sm:p-8 border border-garuda-gold/5 rounded hover:border-garuda-gold/20 transition-all duration-300"
            >
              <h3 className="font-heading text-base sm:text-lg font-bold mb-5 text-garuda-gold">
                {cat.emoji} {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-4 py-1.5 bg-garuda-dark border border-white/5 rounded-full text-xs sm:text-sm text-garuda-muted hover:border-garuda-gold/30 hover:text-garuda-gold transition-all duration-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
