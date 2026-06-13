"use client";

import RevealWrapper from "./RevealWrapper";

export default function Kontak() {
  return (
    <section id="kontak" className="bg-garuda-surface py-20 px-6 sm:px-8 border-t border-garuda-gold/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
        <RevealWrapper>
          <h2 className="font-heading text-xl sm:text-2xl font-bold">
            Mari <span className="text-garuda-gold">Terhubung</span>
          </h2>
          <p className="text-garuda-muted font-light mt-2 text-sm">
          Siap mengabdi dan berkolaborasi untuk Indonesia.
          </p>
        </RevealWrapper>
        <RevealWrapper delay={100} className="flex flex-wrap gap-4">
          <a
            href="mailto:kusumawardanianindya@gmail.com"
            className="flex items-center gap-2 px-6 py-3 border border-white/10 rounded-full text-sm font-medium transition-all duration-300 hover:border-garuda-gold hover:text-garuda-gold hover:-translate-y-0.5"
          >
            📧 Email
          </a>
          <a
            href="https://instagram.com/alin_03230"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-white/10 rounded-full text-sm font-medium transition-all duration-300 hover:border-garuda-gold hover:text-garuda-gold hover:-translate-y-0.5"
          >
            📱 @alin_03230
          </a>
          <a
            href="https://wa.me/6281511884117"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-white/10 rounded-full text-sm font-medium transition-all duration-300 hover:border-garuda-gold hover:text-garuda-gold hover:-translate-y-0.5"
          >
            📞 0815-1188-4117
          </a>
        </RevealWrapper>
      </div>
    </section>
  );
}
