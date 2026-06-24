"use client";

import RevealWrapper from "./RevealWrapper";

const items = [
  {
    role: "Anggota Aktif",
    org: "Ambalan Raden Dewi Sartika Gudep 27.078",
    desc: "Anggota aktif ambalan pangkalan SMAN 1 Telagasari, mengikuti berbagai kegiatan kepramukaan dan latihan rutin.",
    tahun: "2024 – Sekarang",
  },
  {
    role: "Pengurus",
    org: "Organisasi Santri Putri Ponpes Miftahul Ulum",
    desc: "Pengurus organisasi santri putri di Pondok Pesantren Miftahul Ulum Pasirkamuning.",
    tahun: "2023 – 2024",
  },
  {
    role: "Sangga Kerja",
    org: "Jambore Cabang Kwarcab Karawang 2025",
    desc: "Terlibat sebagai panitia / sangga kerja dalam penyelenggaraan Jambore Cabang Kwarcab Karawang di Bumi Perkemahan Banyusari.",
    tahun: "2025",
  },
{
    role: "Anggota",
    org: "Saka Wirakartika",
    desc: "Tergabung di Satuan Karya Pramuka Wirakartika dan mengaplikasikan keterampilan yang dimiliki.",
    tahun: "2026",
  },
  {
    role: "Anggota",
    org: "Garuda Airsoftgun Community",
    desc: "Anggota Garuda Airsoftgun Community kategori pelajar, aktif dalam latihan dan kompetisi menembak.",
    tahun: "2025 – Sekarang",
  },
];

export default function Organisasi() {
  return (
    <section className="bg-garuda-mid py-28 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <p className="text-garuda-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Organisasi
          </p>
        </RevealWrapper>
        <RevealWrapper delay={100}>
          <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-16">
            Pengalaman <span className="text-garuda-gold">Organisasi</span>
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.org}
              className="flex gap-5 p-6 bg-garuda-surface border border-garuda-gold/5 rounded transition-all duration-300 hover:border-garuda-gold/20 hover:-translate-y-1"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-garuda-gold/10 flex items-center justify-center text-xl">
                ⚜️
              </div>
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-base sm:text-lg font-bold">
                    {item.org}
                  </h3>
                  <span className="text-xs text-garuda-gold font-semibold whitespace-nowrap">
                    {item.tahun}
                  </span>
                </div>
                <p className="text-garuda-gold/80 text-sm font-medium mt-0.5">{item.role}</p>
                <p className="text-garuda-muted text-sm font-light mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
