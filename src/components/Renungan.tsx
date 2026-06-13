"use client";

import RevealWrapper from "./RevealWrapper";

export default function Renungan() {
  return (
    <section className="bg-garuda-mid py-24 px-6 sm:px-8 border-t border-garuda-gold/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <RevealWrapper>
          <p className="text-garuda-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Renungan
          </p>
          <h2 className="font-heading font-bold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight mb-6">
            Makna <span className="text-garuda-gold">Garuda</span>
          </h2>
          <div className="space-y-4 text-garuda-muted font-light leading-relaxed">
            <p>
              Garuda bukan sekadar lencana di dada. Ia adalah janji — janji untuk
              selalu setia pada Tri Satya, menjalankan Dasa Darma, dan menjadi insan
              yang berguna bagi bangsa, negara, dan sesama.
            </p>
            <p>
              Setiap langkah dalam kepramukaan adalah investasi karakter. Bukan hanya
              untuk diri sendiri, tetapi untuk Indonesia yang lebih baik.
            </p>
          </div>
          <div className="mt-6 pl-5 border-l-2 border-garuda-gold">
            <p className="font-heading text-lg sm:text-xl text-garuda-gold italic">
              &ldquo;Pramuka hari ini adalah pemimpin di masa depan.&rdquo;
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={100} className="flex justify-center">
          <svg
            viewBox="0 0 200 200"
            fill="none"
            className="w-[180px] h-[180px] opacity-20"
          >
            <path
              d="M100 20 L125 60 L180 45 L155 85 L195 105 L150 115 L165 160 L130 135 L120 180 L100 155 L80 180 L70 135 L35 160 L50 115 L5 105 L45 85 L20 45 L75 60 L100 20Z"
              stroke="#d4a843"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M100 50 L115 75 L145 68 L130 90 L158 105 L128 112 L138 138 L115 120 L110 150 L100 128 L90 150 L85 120 L62 138 L72 112 L42 105 L70 90 L55 68 L85 75 L100 50Z"
              stroke="#d4a843"
              strokeWidth="1"
              fill="none"
              opacity="0.5"
            />
            <circle cx="100" cy="100" r="30" stroke="#d4a843" strokeWidth="0.8" fill="none" opacity="0.4" />
            <circle cx="100" cy="100" r="40" stroke="#d4a843" strokeWidth="0.5" fill="none" opacity="0.3" />
          </svg>
        </RevealWrapper>
      </div>
    </section>
  );
}
