"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-6 sm:px-8 pt-24 pb-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-garuda-dark via-garuda-mid to-garuda-surface" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_20%,rgba(26,74,46,0.15),transparent_70%),radial-gradient(ellipse_50%_50%_at_80%_80%,rgba(212,168,67,0.06),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255,255,255,0.03) 80px, rgba(255,255,255,0.03) 81px)",
          }}
        />
      </div>

      {/* Decorative circles */}
      <div className="absolute w-[600px] h-[600px] -top-[200px] -right-[150px] rounded-full border border-garuda-gold/10 animate-[float_20s_ease-in-out_infinite]" />
      <div className="absolute w-[300px] h-[300px] bottom-[10%] -left-[80px] rounded-full border border-garuda-gold/5 animate-[float_25s_ease-in-out_infinite_reverse]" />

      {/* Garuda SVG emblem */}
      <div className="absolute z-1 w-[500px] h-[500px] right-[5%] top-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none hidden lg:block">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full animate-pulse">
          <path d="M100 10 L130 50 L190 30 L160 70 L200 90 L150 100 L170 150 L130 120 L120 170 L100 150 L80 170 L70 120 L30 150 L50 100 L0 90 L40 70 L10 30 L70 50 L100 10Z" fill="#d4a843" opacity="0.8" />
          <path d="M100 40 L115 65 L145 55 L130 78 L160 88 L130 94 L145 118 L120 100 L115 130 L100 110 L85 130 L80 100 L55 118 L70 94 L40 88 L70 78 L55 55 L85 65 L100 40Z" fill="#d4a843" opacity="0.4" />
          <circle cx="100" cy="95" r="12" fill="#d4a843" opacity="0.6" />
          <path d="M80 110 C85 120, 115 120, 120 110" stroke="#d4a843" strokeWidth="2" fill="none" opacity="0.5" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="max-w-[720px]">
          <div className="animate-[fadeInUp_0.8s_ease_0.2s_both]">
            <span className="inline-flex items-center gap-2 bg-garuda-gold/10 border border-garuda-gold/20 px-5 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase text-garuda-gold mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-garuda-gold rounded-full animate-pulse" />
              Anindya K. Wardani — Garuda Penegak
            </span>
          </div>
          <h1 className="animate-[fadeInUp_0.8s_ease_0.4s_both] font-heading font-black text-[clamp(2.8rem,7vw,6rem)] leading-[1.05] mb-2">
            Anindya Kusuma<br />
            <span className="text-garuda-gold">Wardani</span>
          </h1>
          <p className="animate-[fadeInUp_0.8s_ease_0.5s_both] text-[clamp(1rem,2vw,1.3rem)] font-light text-garuda-muted mb-3 tracking-[0.15em] uppercase">
            Pramuka Garuda — Siap Mengabdi
          </p>
          <p className="animate-[fadeInUp_0.8s_ease_0.6s_both] text-base text-garuda-muted/80 font-light max-w-[540px] mb-10 leading-relaxed">
            Seorang Pramuka Penegak dari SMA Negeri 1 Telagasari, Kwarcab Karawang,
            yang berkomitmen pada nilai-nilai luhur kepanduan, pengabdian masyarakat,
            dan pembentukan karakter generasi muda Indonesia.
          </p>
          <div className="animate-[fadeInUp_0.8s_ease_0.7s_both] flex gap-4 flex-wrap">
            <a
              href="#tentang"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-garuda-gold text-garuda-dark font-semibold text-sm tracking-widest uppercase hover:bg-garuda-gold-light hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-garuda-gold/20"
            >
              Jelajahi
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-transparent text-garuda-text border border-white/20 font-semibold text-sm tracking-widest uppercase hover:border-garuda-gold hover:text-garuda-gold hover:-translate-y-0.5 transition-all duration-300"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-garuda-muted text-[0.65rem] tracking-[0.2em] uppercase animate-[fadeInUp_1s_ease_1.5s_both]">
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-garuda-gold to-transparent animate-[scrollLine_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
