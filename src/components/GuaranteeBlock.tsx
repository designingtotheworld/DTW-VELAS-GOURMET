import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function GuaranteeBlock() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-neutral-100">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 border-2 border-amber-500/40 rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />
          
          <div className="w-16 h-16 bg-amber-500/20 border border-amber-500/40 rounded-2xl flex items-center justify-center text-amber-400 mx-auto mb-6 shadow-lg">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block mb-4">
            GARANTÍA 100% LIBRE DE RIESGO
          </span>

          <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white mb-6">
            Garantía Incondicional de 7 Días
          </h3>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Prueba las recetas y el método paso a paso en tu casa. Si en los primeros 7 días sientes que la guía no cumple con tus expectativas o no logras sorprender a tus invitados, te devolvemos el 100% de tu dinero inmediatamente, sin preguntas ni complicaciones. Riesgo cero para ti.
          </p>
        </div>
      </div>
    </section>
  );
}
