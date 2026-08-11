import React from 'react';
import { Flame, Heart } from 'lucide-react';

export default function RecipeShowcase() {
  const savouryRecipes = [
    {
      title: "Tomate seco y albahaca",
      description: "Un color rico que se ve hermoso en la mesa cuando la vela comienza a derretirse.",
      image: "https://i.imgur.com/pFRYagP.png"
    },
    {
      title: "Mantequilla de hierbas",
      description: "Un clásico hecho más elegante y aromático con ingredientes simples.",
      image: "https://i.imgur.com/XjRYpcJ.png"
    },
    {
      title: "Queso crema con hierbas y nueces",
      description: "Cremoso, salado y terminado con un toque crujiente de nuez.",
      image: "https://i.imgur.com/VpWCtwR.png"
    }
  ];

  const sweetRecipes = [
    {
      title: "Mantequilla tostada y miel",
      description: "Mantequilla tostada clásica con un aroma rico a nuez y un toque de miel.",
      image: "https://i.imgur.com/vge62sJ.png"
    },
    {
      title: "Chocolate cremoso con sal marina",
      description: "Un efecto fondue estilo postre que realmente sorprende en la mesa.",
      image: "https://i.imgur.com/qT1ra5F.png"
    },
    {
      title: "Delicia de coco tropical",
      description: "Un aroma exótico con un suave y cremoso sabor a coco.",
      image: "https://i.imgur.com/13O4mnu.png"
    }
  ];

  return (
    <section id="recetas" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white border-b border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
            23 recetas paso a paso – genuinamente fáciles de hacer
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg italic font-light">
            Perfectas para cenas, ocasiones especiales y regalos pensados.
          </p>
        </div>

        {/* Contenido / Índice del Recetario Preview */}
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-amber-950/30 border border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                Índice & Contenido
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                Todo lo que incluye el recetario digital
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Un recetario completo, diseñado paso a paso y con fotografías reales para que cada vela comestible quede perfecta desde el primer intento.
              </p>
              <ul className="space-y-2 text-sm text-neutral-300 pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>Índice detallado de recetas dulces y saladas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>Guía de mechas comestibles y moldes adecuados</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>Tiempos de preparación y temperaturas exactas</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-amber-500/30 group">
                <img 
                  src="https://i.imgur.com/RQcoCna.jpeg" 
                  alt="Contenido del Recetario"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Category 1: Salados */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-amber-500 font-semibold tracking-wide uppercase text-sm">
            <Flame className="w-5 h-5 fill-amber-500/20" />
            <span>EJEMPLOS SALADOS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {savouryRecipes.map((recipe, idx) => (
              <div 
                key={idx}
                className="bg-neutral-900/60 border border-neutral-800 rounded-2xl overflow-hidden shadow-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-medium text-neutral-100 mb-2">
                      {recipe.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed font-light">
                      {recipe.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category 2: Dulces */}
        <div className="space-y-6 pt-8">
          <div className="flex items-center gap-2 text-amber-500 font-semibold tracking-wide uppercase text-sm">
            <Heart className="w-5 h-5 fill-amber-500/20" />
            <span>EJEMPLOS DULCES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sweetRecipes.map((recipe, idx) => (
              <div 
                key={idx}
                className="bg-neutral-900/60 border border-neutral-800 rounded-2xl overflow-hidden shadow-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-medium text-neutral-100 mb-2">
                      {recipe.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed font-light">
                      {recipe.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
