import React from 'react';
import { Zap, ListChecks, ChevronRight } from 'lucide-react';

export default function HowItWorksSteps() {
  const steps = [
    {
      number: "01",
      title: "Elige tu receta",
      description: "Todo ya está preparado y organizado para ti."
    },
    {
      number: "02",
      title: "Sigue el método",
      description: "Claro, visual y fácil de seguir."
    },
    {
      number: "03",
      title: "Sirve y observa la reacción",
      description: "Ese pequeño detalle especial que llama la atención y se gana todos los elogios."
    }
  ];

  return (
    <section className="w-full">
      {/* Parte Superior: Fondo claro - Pasos */}
      <div className="bg-neutral-100 text-neutral-900 py-24 px-4 sm:px-6 lg:px-8 border-b border-amber-200">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-neutral-900 leading-[1.2]">
              PREPARA TUS VELAS COMESTIBLES <br className="hidden sm:inline" />
              EN 30MIN EN 3 SIMPLES PASOS
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white border border-neutral-200/80 rounded-2xl p-8 relative flex flex-col justify-between shadow-sm hover:shadow-md transition-all group"
              >
                <div>
                  <div className="font-serif text-5xl sm:text-6xl font-light text-amber-400/80 mb-4 tracking-tight">
                    {step.number}
                  </div>
                  <h3 className="font-serif text-xl font-medium text-neutral-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Parte Inferior: Fondo oscuro - Simplicidad */}
      <div className="bg-neutral-950 text-white py-24 px-4 sm:px-6 lg:px-8 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Columna Izquierda: Imagen vertical */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 aspect-[4/5] max-w-md mx-auto lg:max-w-none">
                <img 
                  src="https://i.imgur.com/B09lS96.png" 
                  alt="Mujer preparando una vela en la cocina"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Columna Derecha: Contenido */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="inline-block text-amber-500 font-semibold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 mb-6">
                  ABSOLUTA SIMPLICIDAD
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white mb-6 leading-[1.15]">
                  “No soy muy buena en la cocina...”
                </h2>
                <p className="text-neutral-400 text-base sm:text-lg leading-relaxed font-light">
                  Perfecto. Esto <strong className="text-neutral-200 font-medium">NO</strong> está diseñado para chefs expertos. Fue creado para personas comunes que quieren hacer algo hermoso, diferente y genuinamente impresionante.
                </p>
              </div>

              <div className="space-y-6 pt-2">
                {/* Punto 1 */}
                <div className="flex gap-4 items-start bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex-shrink-0 flex items-center justify-center text-amber-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-neutral-100 mb-1">
                      Sin horno. Sin técnicas complicadas. Sin equipos especiales.
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed font-light">
                      Pasos simples. Sin estrés, sin técnicas difíciles y sin pasar horas en la cocina.
                    </p>
                  </div>
                </div>

                {/* Punto 2 */}
                <div className="flex gap-4 items-start bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex-shrink-0 flex items-center justify-center text-amber-400">
                    <ListChecks className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-neutral-100 mb-1">
                      Solo sigue mi método:
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed font-light">
                      30 minutos + ingredientes simples + las ganas de impresionar.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
