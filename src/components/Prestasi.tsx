"use client";

import RevealWrapper from "./RevealWrapper";

const items = [
  {
    icon: "🏅",
    title: "Calon Pramuka Garuda Penegak",
    desc: "Telah memenuhi seluruh persyaratan Pramuka Garuda Penegak, mengumpulkan SKK dari 5 bidang, mengikuti pendidikan dan pelatihan, serta aktif dalam organisasi dan pengabdian masyarakat.",
    medal: "2026",
  },
  {
    icon: "🥇",
    title: "Juara 3 Forkab III KORMI",
    desc: "Juara 3 CTS 1 On 1 Single Weapon Rifle Spring Putri Forkab III KORMI Kabupaten Karawang Tahun 2026.",
    medal: "2026",
  },
  {
    icon: "🔫",
    title: "Juara 3 KORMI Karawang",
    desc: "Juara 3 CTS 1 On 1 Kategori Pelajar Putri KORMI Kabupaten Karawang Tahun 2025.",
    medal: "2025",
  },
  {
    icon: "🧭",
    title: "Diklatsar Navigasi Darat",
    desc: "Mengikuti Diklatsar Navigasi Darat se Jabodetabek dan sekitarnya di Buperta Cibubur Jakarta Timur Tahun 2025.",
    medal: "Navigasi",
  },
  {
    icon: "🏕️",
    title: "Sangga Kerja Jambore Cabang",
    desc: "Terlibat sebagai Sangga Kerja Jambore Cabang Kwarcab Karawang di Bumi Perkemahan Banyusari Tahun 2025.",
    medal: "Panitia",
  },
{
    icon: "🎯",
    title: "Anggota Garuda Airsoftgun Community",
    desc: "Anggota Garuda Airsoftgun Community Kategori Pelajar, mengikuti Latihan Dasar Menembak Hirbak 3 di Kostrad 1 Cilodong Depok.",
    medal: "Airsoftgun",
  },
  {
    icon: "📜",
    title: "Kursus Safe From Harm",
    desc: "Menyelesaikan kursus Safe From Harm Ayo Pramuka Kwarnas: SFH 1, SFH 2, dan SFH 3.",
    medal: "Sertifikasi",
  },
  {
    icon: "🤝",
    title: "Saka Wirakartika",
    desc: "Tergabung di Satuan Karya Pramuka Saka Wirakartika dan mengaplikasikan keterampilan di satuan karya.",
    medal: "Saka",
  },
];

export default function Prestasi() {
  return (
    <section id="prestasi" className="bg-garuda-surface py-28 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <p className="text-garuda-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Prestasi &amp; Penghargaan
          </p>
        </RevealWrapper>
        <RevealWrapper delay={100}>
          <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-16">
            Capaian <span className="text-garuda-gold">Terbaik</span>
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="group bg-garuda-mid border border-garuda-gold/5 rounded p-8 sm:p-10 transition-all duration-400
                         hover:border-garuda-gold/20 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/20
                         relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-garuda-gold to-transparent
                              scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
              <span className="text-3xl sm:text-4xl block mb-5">{item.icon}</span>
              <h3 className="font-heading text-lg sm:text-xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-garuda-muted text-sm font-light leading-relaxed">
                {item.desc}
              </p>
              <span className="inline-block mt-4 px-3 py-1.5 bg-garuda-gold text-garuda-dark text-[0.65rem] font-bold tracking-widest uppercase rounded-sm">
                {item.medal}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
