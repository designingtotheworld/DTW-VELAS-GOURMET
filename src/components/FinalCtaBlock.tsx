import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Lock } from 'lucide-react';

export default function FinalCtaBlock() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-950 to-black text-white text-center border-t border-amber-900/30">
      <div className="max-w-4xl mx-auto">
        <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block mb-4">
          ACCESO INMEDIATO Y VITALICIO
        </span>
        
        <h2 className="font-serif text-3xl sm:text-5xl font-normal mb-6 tracking-tight">
          ¿Listo para dominar el arte de las <br className="hidden sm:inline" />
          <span className="text-amber-400 italic">Velas Comestibles Gourmet?</span>
        </h2>

        <p className="text-neutral-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-light">
          Obtén hoy el recetario completo, los 4 bonos de regalo y comienza a sorprender a todos en tu próxima reunión.
        </p>

        <div className="max-w-md mx-auto mb-8">
          <a
            href="https://pay.hotmart.com/P107114275H"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-bold py-5 px-8 rounded-2xl shadow-2xl shadow-amber-600/30 transition-all flex items-center justify-center gap-3 text-lg sm:text-xl cursor-pointer tracking-wide uppercase transform hover:-translate-y-1 active:translate-y-0 no-underline"
          >
            <Sparkles className="w-6 h-6 text-black shrink-0" />
            <span>QUIERO MI GUÍA DE VELAS COMESTIBLES</span>
            <ArrowRight className="w-6 h-6 shrink-0" />
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-neutral-400">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" /> Pago seguro por Hotmart
          </span>
          <span className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-400" /> Conversión automática a tu moneda local
          </span>
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" /> Acceso inmediato en PDF
          </span>
        </div>
      </div>
    </section>
  );
}
