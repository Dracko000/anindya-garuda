"use client";

import RevealWrapper from "./RevealWrapper";

const items = [
  {
    emoji: "🏗️",
    title: "Proyek Pembangunan",
    desc: "Telah selesai melaksanakan kegiatan pembangunan sebagai bagian dari persyaratan Pramuka Garuda, mendokumentasikan seluruh proses dari persiapan hingga hasil akhir.",
  },
  {
    emoji: "🌐",
    title: "Website Pramuka Garuda",
    desc: "Membangun website portofolio Pramuka Garuda perorangan berbasis Next.js dan Tailwind CSS sebagai media informasi dan dokumentasi pencapaian.",
  },
  {
    emoji: "📱",
    title: "Media Sosial & Branding",
    desc: "Aktif di media sosial (Instagram: @anindya_1710, TikTok, Facebook, Ayo Pramuka) untuk menyebarkan semangat kepramukaan.",
  },
  {
    emoji: "📸",
    title: "Dokumentasi & Portofolio Digital",
    desc: "Mendokumentasikan seluruh pencapaian SKK, kegiatan organisasi, dan bukti fisik dalam portofolio digital berbasis website dan PDF.",
  },
];

export default function ProyekProduktif() {
  return (
    <section className="bg-garuda-surface py-28 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <p className="text-garuda-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Proyek Produktif
          </p>
        </RevealWrapper>
        <RevealWrapper delay={100}>
          <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-16">
            Karya &amp; <span className="text-garuda-gold">Proyek</span>
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="group p-8 bg-garuda-mid border border-garuda-gold/5 rounded transition-all duration-300 hover:border-garuda-gold/20 hover:-translate-y-1"
            >
              <span className="text-3xl sm:text-4xl block mb-4">{item.emoji}</span>
              <h3 className="font-heading text-base sm:text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-garuda-muted text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
