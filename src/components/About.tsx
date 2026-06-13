"use client";

import Image from "next/image";
import RevealWrapper from "./RevealWrapper";

export default function About() {
  return (
    <section id="tentang" className="bg-garuda-surface py-28 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <RevealWrapper>
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-[200px] h-[200px] border border-garuda-gold/10 -z-1 hidden lg:block" />
              <div className="relative w-full aspect-[3/4] rounded overflow-hidden bg-gradient-to-br from-garuda-lighter to-garuda-mid border border-garuda-gold/10">
                {/* Foto Profile */}
                <Image
                  src="/galeri/profile.jpeg"
                  alt="Anindya Kusuma Wardani"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 border-[10px] sm:border-[12px] border-garuda-gold/30 pointer-events-none" />
              </div>
              <div className="absolute -bottom-5 -right-5 w-[150px] h-[150px] border border-garuda-gold/5 -z-1 hidden lg:block" />
            </div>

            {/* Data diri */}
            <div className="mt-8 space-y-3 text-sm text-garuda-muted/80 font-light">
              {[
                ["NTA", "09.15.27.171008.0001"],
                ["TTL", "Depok, 17 Oktober 2008"],
                ["Jenis Kelamin", "Perempuan"],
                ["Pangkalan", "SMA Negeri 1 Telagasari"],
                ["Gudep", "09.15.27.078"],
                ["Kwartir Cabang", "Karawang"],
                ["Alamat", "Jl. Pramuka, Dusun Krajan, Pasirkamuning, Telagasari, Karawang"],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-3">
                  <span className="text-garuda-gold font-medium min-w-[100px]">{label}</span>
                  <span className="text-garuda-muted">{value}</span>
                </div>
              ))}
            </div>
          </RevealWrapper>

          <RevealWrapper delay={100}>
            <p className="text-garuda-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Tentang Saya
            </p>
            <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-6">
              Pramuka <span className="text-garuda-gold">Sepanjang</span> Hidup
            </h2>
            <div className="space-y-5 text-garuda-muted font-light leading-relaxed">
              <p>
                Nama saya <strong className="text-garuda-text">Anindya Kusuma Wardani</strong>,
                seorang pelajar yang selalu ingin belajar menggali pengalaman dan pengetahuan
                untuk mengembangkan diri, mempelajari hal-hal baru yang dapat memberikan
                pengetahuan dan pengalaman baru, membangun mental, membentuk karakter agar
                terus bertumbuh menjadi pribadi yang lebih baik untuk kemajuan dan kesuksesan
                dalam menggapai cita-cita di masa mendatang, serta selalu membanggakan kedua
                orang tua.
              </p>
              <p>
                Sebagai calon Pramuka Garuda, saya berkomitmen untuk terus mengamalkan
                Tri Satya dan Dasa Darma dalam kehidupan sehari-hari, serta menjadi
                teladan bagi generasi muda Indonesia.
              </p>
            </div>

            {/* Pendidikan */}
            <div className="mt-8">
              <h3 className="font-heading font-bold text-lg text-garuda-gold mb-3">Pendidikan</h3>
              <div className="space-y-2">
                {[
                  ["SMAN 1 Telagasari", "2024 – Sekarang"],
                  ["SMPIT Al Miftah Pasirkamuning", "2021 – 2024"],
                  ["SDN Pasirkamuning 1", "2015 – 2021"],
                ].map(([sekolah, tahun]) => (
                  <div key={sekolah} className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-garuda-gold/40 flex-shrink-0" />
                    <span className="text-garuda-muted">{sekolah}</span>
                    <span className="text-garuda-subtle ml-auto">{tahun}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { num: "12+", label: "Tahun Pramuka" },
                { num: "30+", label: "SKK Tercapai" },
                { num: "5+", label: "Organisasi" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-garuda-mid py-6 px-4 text-center rounded border border-garuda-gold/5 hover:border-garuda-gold/20 hover:-translate-y-1 transition-all"
                >
                  <div className="font-heading text-2xl font-bold text-garuda-gold">
                    {s.num}
                  </div>
                  <div className="text-xs text-garuda-muted mt-1 tracking-widest uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
