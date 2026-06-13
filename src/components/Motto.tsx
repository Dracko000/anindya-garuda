"use client";

import RevealWrapper from "./RevealWrapper";

export default function Motto() {
  return (
    <section className="bg-garuda-mid py-24 px-6 sm:px-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(212,168,67,0.03),transparent_70%)]" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <RevealWrapper>
          <div className="w-10 h-px bg-garuda-gold mx-auto mb-8" />
          <p className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] leading-relaxed font-bold">
            Satyaku Kudarmakan<br />
            <span className="text-garuda-gold">Darmaku Kubaktikan</span>
          </p>
          <div className="w-10 h-px bg-garuda-gold mx-auto my-8" />
          <p className="text-sm text-garuda-gold tracking-widest uppercase">
            — Motto Gerakan Pramuka —
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}
