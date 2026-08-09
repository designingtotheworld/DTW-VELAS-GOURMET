import React from 'react';
import { ShieldCheck, Thermometer, Layers, Snowflake, Sparkles, Flame } from 'lucide-react';

export default function HowItWorks() {
  const essentials = [
    {
      title: '1. La Mecha',
      description: 'Es lo único que NO se come. Usá siempre mecha de algodón encerada con cera de abeja natural (no parafina) o cáñamo encerada.',
      icon: Flame
    },
    {
      title: '2. Los Moldes',
      description: 'Vasos de vidrio térmico, latas pequeñas o moldes de silicona apta para horno/frío. Cuanto más lindo el recipiente, mayor valor percibido.',
      icon: Layers
    },
    {
      title: '3. La Temperatura',
      description: 'Nunca viertas líquido hirviendo sobre la mecha: puede deformarla. Esperá que esté tibio (probá con el dedo limpio: no debe quemar).',
      icon: Thermometer
    },
    {
      title: '4. El Armado',
      description: 'Colocá la mecha primero, bien centrada y sostenida (podés usar un palillo apoyado en los bordes) y después volcá el líquido despacio.',
      icon: Sparkles
    },
    {
      title: '5. El Frío',
      description: 'Llevá al refrigerador entre 1 y 2 horas hasta que esté completamente firme antes de encender o mover la vela.',
      icon: Snowflake
    },
    {
      title: '6. Seguridad',
      description: 'Servila siempre sobre un plato amplio, nunca la dejes encendida sin supervisión, y recordá: la mecha no se come, se retira al mojar.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Guía Esencial
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal mt-4 mb-4 text-white">
            Lo Esencial Antes de Empezar
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Los 6 pilares fundamentales extraídos directamente de la guía oficial para asegurar un resultado perfecto en cada vela.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {essentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-neutral-900/80 border border-amber-900/30 rounded-2xl p-6 hover:border-amber-500/50 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-xl font-medium text-amber-200">
                      {item.title}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
