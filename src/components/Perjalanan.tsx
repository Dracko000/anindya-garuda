"use client";

import { useEffect, useRef } from "react";
import RevealWrapper from "./RevealWrapper";

function TimelineItem({
  year,
  role,
  desc,
  tags,
  delay = 0,
}: {
  year: string;
  role: string;
  desc: string;
  tags: string[];
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex gap-8 sm:gap-10 pb-12 last:pb-0 timeline-item opacity-0 translate-y-6 transition-all duration-700 ease-out"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 w-12 sm:w-14 flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-garuda-mid border-[2.5px] border-garuda-gold mt-1 z-10 transition-all duration-300" />
      </div>
      <div className="flex-1">
        <div className="font-heading text-xl sm:text-2xl font-bold text-garuda-gold mb-1">
          {year}
        </div>
        <div className="text-base sm:text-lg font-semibold mb-2">{role}</div>
        <p className="text-garuda-muted text-sm font-light leading-relaxed">
          {desc}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-[0.65rem] tracking-widest uppercase text-garuda-gold bg-garuda-gold/5 border border-garuda-gold/10 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const items = [
  {
    year: "2026",
    role: "Calon Pramuka Garuda Penegak",
    desc: "Mempersiapkan dan melengkapi seluruh persyaratan Pramuka Garuda Penegak. Mengikuti kursus Safe From Harm (SFH 1,2,3) dari Ayo Pramuka Kwarnas. Tergabung di Saka Wirakartika. Latihan Dasar Menembak Hirbak 3 di Kostrad 1 Cilodong Depok. Meraih Juara 3 CTS 1 On 1 Single Weapon Rifle Spring Putri Forkab III KORMI Karawang.",
    tags: ["Garuda", "Saka", "Menembak"],
  },
  {
    year: "2025",
    role: "Penegak Laksana — Organisasi & Kepemimpinan",
    desc: "Aktif di Ambalan Raden Dewi Sartika Gudep 27.078. Mengikuti Sangga Kerja Jambore Cabang Kwarcab Karawang di Bumi Perkemahan Banyusari. Diklatsar Navigasi Darat se Jabodetabek di Buperta Cibubur Jakarta Timur. Latihan Gabungan dengan Ambalan SMK Negeri 1 Karawang. Meraih Juara 3 CTS 1 On 1 Kategori Pelajar Putri KORMI Karawang.",
    tags: ["Jambore", "Navigasi", "Juara"],
  },
  {
    year: "2024 – 2025",
    role: "Penegak Bantara — Laksana",
    desc: "Menyelesaikan SKU Penegak Bantara dan Laksana. Aktif dalam Pengurus Organisasi Santri Putri Ponpes Miftahul Ulum Pasirkamuning. Mengikuti berbagai kegiatan KANIRA di Kwartir Ranting Telagasari. Memperoleh berbagai Tanda Kecakapan Khusus (TKK) dari 5 bidang.",
    tags: ["Bantara", "Laksana", "KANIRA"],
  },
  {
    year: "2015 – 2021",
    role: "Siaga — Penggalang",
    desc: "Awal mula perjalanan kepramukaan. Mengikuti pendidikan di SDN Pasirkamuning 1 dan SMPIT Al Miftah Pasirkamuning. Mengenal dasar-dasar kepanduan, persahabatan, dan kecintaan pada alam. Menumbuhkan jiwa kepemimpinan dan kedisiplinan.",
    tags: ["Siaga", "Penggalang", "Awal"],
  },
];

export default function Perjalanan() {
  return (
    <section id="perjalanan" className="bg-garuda-mid py-28 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <p className="text-garuda-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Perjalanan
          </p>
        </RevealWrapper>
        <RevealWrapper delay={100}>
          <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-16">
            Jejak <span className="text-garuda-gold">Kepramukaan</span>
          </h2>
        </RevealWrapper>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[25px] sm:left-[29px] top-0 bottom-0 w-px bg-gradient-to-b from-garuda-gold/40 via-garuda-gold/10 to-transparent" />
          {items.map((item, i) => (
            <TimelineItem key={item.year} {...item} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
