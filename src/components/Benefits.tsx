import React from 'react';
import { ChefHat, ShoppingCart, Users, Clock, Sparkles, Award, ArrowRight } from 'lucide-react';

interface BenefitsProps {
  onScrollToPricing?: () => void;
}

export default function Benefits({ onScrollToPricing }: BenefitsProps) {
  const benefitsList = [
    {
      icon: ChefHat,
      title: "Recetas creativas que la gente no espera",
      description: "Combinaciones dulces y saladas servidas de una manera elegante y sorprendente."
    },
    {
      icon: ShoppingCart,
      title: "Ingredientes simples",
      description: "Sin ingredientes difíciles de encontrar ni equipos costosos."
    },
    {
      icon: Users,
      title: "Apto para principiantes",
      description: "Un método claro y visual que es fácil de seguir."
    },
    {
      icon: Clock,
      title: "Listo en unos 30 minutos",
      description: "Rápido de hacer y perfecto para cualquier ocasión."
    },
    {
      icon: Sparkles,
      title: "Un verdadero momento \"guau\"",
      description: "El pequeño detalle del que los invitados siguen hablando mucho después de la cena."
    },
    {
      icon: Award,
      title: "Aprende una vez, úsalo cuando quieras",
      description: "Acceso de por vida, para que puedas volver a los materiales cuando lo necesites."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-100 text-neutral-900 border-b border-amber-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 leading-[1.2]">
            ¿Por qué estas velas comestibles causan tan buena impresión?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefitsList.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-neutral-200/80 hover:border-amber-400 rounded-2xl p-8 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-neutral-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {onScrollToPricing && (
          <div className="mt-14 text-center">
            <a
              href="https://pay.hotmart.com/P107114275H"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl transition-all inline-flex items-center gap-3 text-base cursor-pointer uppercase tracking-wider no-underline"
            >
              <Sparkles className="w-5 h-5" />
              <span>Obtener Acceso Completo ($6,90) - Comprar Ahora</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

