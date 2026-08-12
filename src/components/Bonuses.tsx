import React from 'react';
import { Gift, CheckCircle, Sparkles, TrendingUp, DollarSign, ShoppingBag, Lightbulb, ArrowRight } from 'lucide-react';

interface BonusesProps {
  onScrollToPricing?: () => void;
}

export default function Bonuses({ onScrollToPricing }: BonusesProps) {
  const bonuses = [
    {
      id: '1',
      number: '01',
      title: 'Set de Etiquetas Gourmet de Diseño (Listas para imprimir)',
      description: 'Colección de etiquetas circulares y rectangulares minimalistas diseñadas para presentar cada sabor con elegancia en tu mesa. ¡Imprime, corta y disfruta!',
      value: '$15',
      icon: ShoppingBag,
      image: 'https://i.imgur.com/76jIiB5.png'
    },
    {
      id: '2',
      number: '02',
      title: 'Guía de Maridajes y Combinaciones',
      description: 'Descubre qué panes, vinos, frutas y aperitivos acompañan a la perfección cada vela salada o dulce para elevar la experiencia.',
      value: '$20',
      icon: Sparkles,
      image: 'https://i.imgur.com/JLMDmFU.png'
    },
    {
      id: '3',
      number: '03',
      title: 'Calculadora de Precios y Costos',
      description: 'Suma ingredientes, mecha y envase. Divide por el rendimiento para obtener tu costo unitario y asegurar una ganancia real.',
      value: '$25',
      icon: DollarSign,
      image: 'https://i.imgur.com/j0yftuY.png'
    },
    {
      id: '4',
      number: '04',
      title: 'Guía de Conservación y Almacenamiento',
      description: 'Aprende cómo conservar tus velas comestibles en perfecto estado, temperatura ideal y tiempos de vida útil.',
      value: '$20',
      icon: Gift,
      image: 'https://i.imgur.com/2VqhVoD.png'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20 mb-3">
            <Gift className="w-3.5 h-3.5" />
            <span>Módulo Bonus del PDF Oficial</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white mb-4">
            Bonus: Cómo Convertirlas en un Negocio Rentable
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Si además de disfrutarlas en casa querés emprender y vender tus propias velas comestibles, este módulo te enseña el paso a paso exacto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bonuses.map((bonus) => {
            const Icon = bonus.icon;
            return (
              <div
                key={bonus.id}
                className="bg-[#FAF7F2] border border-amber-200/80 rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl text-neutral-900 hover:border-amber-400"
              >
                <div className="absolute top-0 right-0 bg-neutral-950 text-amber-300 font-serif font-bold text-xs px-4 py-2 rounded-bl-xl border-l border-b border-amber-500/30 shadow-sm tracking-wider uppercase">
                  REGALO EXCLUSIVO
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-bold text-amber-700">
                      BONO {bonus.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-700">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {bonus.image && (
                    <div className="mb-6 rounded-xl overflow-hidden aspect-video border border-amber-200 shadow-sm">
                      <img 
                        src={bonus.image} 
                        alt={bonus.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950 mb-3 group-hover:text-amber-800 transition-colors">
                    {bonus.title}
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed mb-6 font-normal">
                    {bonus.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 pt-4 border-t border-amber-200/60">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  <span>Incluido en la guía completa de hoy</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-neutral-900 via-amber-950/30 to-neutral-900 p-6 rounded-2xl border border-amber-500/30 max-w-3xl mx-auto shadow-xl">
          <p className="font-serif text-lg text-amber-200 italic">
            "Una idea simple, bien ejecutada, <br className="hidden sm:inline" />
            vale más que un producto complicado a medio hacer."
          </p>
          <span className="text-xs text-neutral-400 uppercase tracking-widest mt-2 block">— Guía Oficial Velas Comestibles</span>
        </div>

        {onScrollToPricing && (
          <div className="mt-12 text-center">
            <button
              onClick={onScrollToPricing}
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/20 transition-all inline-flex items-center gap-3 text-base cursor-pointer uppercase tracking-wider transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-5 h-5 text-black" />
              <span>Obtener Guía + Todos los Bonus ($9,90) - Comprar Ahora</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

