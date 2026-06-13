"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import RevealWrapper from "./RevealWrapper";

interface GalleryItem {
  src: string;
  label: string;
}

const items: GalleryItem[] = [
  { src: "/galeri/sangga kerja jamcab karawang 2025.jpeg", label: "Sangga Kerja Jambore Cabang Kwarcab Karawang — Bumi Perkemahan Banyusari 2025" },
  { src: "/galeri/navigasi darat.jpeg", label: "Diklatsar Navigasi Darat — Buperta Cibubur 2025" },
  { src: "/galeri/kanira-ranting.jpeg", label: "KANIRA — Kwartir Ranting Telagasari 2025" },
  { src: "/galeri/hirbak3.jpeg", label: "Latihan Dasar Menembak Hirbak 3 — Kostrad 1 Cilodong 2026" },
  { src: "/galeri/forkab 2026.jpeg", label: "Forkab III KORMI Karawang 2026" },
  { src: "/galeri/forkab 2025.jpeg", label: "Forkab KORMI Karawang 2025" },
  { src: "/galeri/pelantikan laksana.jpeg", label: "Pelantikan Kenaikan Tingkat Laksana" },
  { src: "/galeri/membantu pembina.jpeg", label: "Membantu Pembina — Pelantikan Siaga MI Nurul Huda" },
  { src: "/galeri/membantu pembina (2).jpeg", label: "Kegiatan Pencapaian TKK & Persari Siaga MI Nurul Huda" },
  { src: "/galeri/peta pitak.jpeg", label: "Kegiatan Peta Pita dan Navigasi Medan" },
  { src: "/galeri/forkab2026.jpeg", label: "Forkab III KORMI Karawang — Single Weapon Rifle" },
];

function Lightbox({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/60 hover:text-white text-3xl z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-all"
        aria-label="Tutup"
      >
        ✕
      </button>
      <div
        className="relative w-full h-full max-w-5xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.label}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
        <p className="absolute bottom-0 left-0 right-0 text-center text-white/70 bg-black/60 py-3 sm:py-4 px-4 text-sm">
          {item.label}
        </p>
      </div>
    </div>
  );
}

function GalleryCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded border border-garuda-gold/10 bg-garuda-dark aspect-[4/3] transition-all duration-400 hover:border-garuda-gold/30 hover:shadow-lg hover:shadow-garuda-gold/5"
      onClick={onClick}
    >
      {imgError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <span className="text-4xl opacity-30">📷</span>
          <span className="text-xs text-garuda-muted/50 px-4 text-center leading-relaxed">
            {item.label}
          </span>
        </div>
      ) : (
        <>
          <Image
            src={item.src}
            alt={item.label}
            fill
            className={`object-cover transition-all duration-500 ${
              imgLoaded ? "opacity-100 scale-100 group-hover:scale-105" : "opacity-0"
            }`}
            sizes="(max-width: 768px) 50vw, 33vw"
            onError={() => setImgError(true)}
            onLoad={() => setImgLoaded(true)}
          />
          {!imgLoaded && (
            <div className="absolute inset-0 animate-pulse bg-garuda-mid/50" />
          )}
          {/* Overlay + label */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end">
            <span className="p-3 sm:p-4 text-xs text-white/90 font-light leading-relaxed">
              {item.label}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default function Galeri() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="galeri" className="bg-garuda-surface py-28 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <p className="text-garuda-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Galeri Kegiatan
          </p>
        </RevealWrapper>
        <RevealWrapper delay={100}>
          <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-10">
            Momen <span className="text-garuda-gold">Berharga</span>
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((item) => (
            <GalleryCard
              key={item.label}
              item={item}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </div>

      {selectedItem && (
        <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
}
