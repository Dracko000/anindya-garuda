"use client";

import RevealWrapper from "./RevealWrapper";

const items = [
  {
    emoji: "🏫",
    title: "Membantu Pembina di Gudep",
    desc: "Aktif membantu pembina putri MI Nurul Huda Cikampek dalam kegiatan pelantikan kenaikan tingkat dan pencapaian TKK golongan Siaga.",
  },
  {
    emoji: "🌱",
    title: "Penghijauan",
    desc: "Melaksanakan penghijauan dan pengelolaan tanaman hidup sebagai bagian dari SKK Penghijauan dan kepedulian lingkungan.",
  },
  {
    emoji: "🏘️",
    title: "Pengaman Kampung",
    desc: "Terlibat dalam kegiatan pengamanan kampung dan gotong royong menjaga ketertiban masyarakat di lingkungan tempat tinggal.",
  },
  {
    emoji: "🆘",
    title: "PPPK & Kemanusiaan",
    desc: "Menguasai Pertolongan Pertama Pada Kecelakaan (PPPK) dan siap siaga dalam kegiatan kemanusiaan dan pertolongan darurat.",
  },
];

export default function Bhakti() {
  return (
    <section className="bg-garuda-mid py-28 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <p className="text-garuda-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Pengabdian
          </p>
        </RevealWrapper>
        <RevealWrapper delay={100}>
          <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-16">
            Bhakti &amp; <span className="text-garuda-gold">Kontribusi</span>
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="group p-8 bg-garuda-surface border border-garuda-gold/5 rounded text-center transition-all duration-300 hover:border-garuda-gold/20 hover:-translate-y-1"
            >
              <span className="text-3xl sm:text-4xl block mb-4">{item.emoji}</span>
              <h3 className="text-base sm:text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-garuda-muted text-sm font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
