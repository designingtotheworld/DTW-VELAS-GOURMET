import React, { useState, useEffect } from 'react';
import { Star, ArrowRight, Sparkles, Flame, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  onScrollToPricing: () => void;
  onScrollToRecipes: () => void;
}

const carouselImages = [
  { url: 'https://i.imgur.com/ZPTihxK.png', title: 'Velas Gourmet Artesanales' },
  { url: 'https://i.imgur.com/1KUAoy1.png', title: 'Creaciones Exclusivas' },
  { url: 'https://i.imgur.com/8zQSizA.png', title: 'Sabores Dulces y Salados' },
  { url: 'https://i.imgur.com/sjwT7Y7.png', title: 'Detalles que Sorprenden' },
  { url: 'https://i.imgur.com/vl3Mkcq.png', title: 'El Arte de las Velas Comestibles' },
];

export default function Hero({ onScrollToPricing, onScrollToRecipes }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  return (
    <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden border-b border-amber-900/30">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-600/10 blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Auto-playing Carousel */}
        <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-3 group bg-neutral-900 aspect-[16/9] max-h-[340px]">
          {/* Star & Price badge */}
          <div className="absolute top-4 left-4 z-30 bg-amber-500 text-black font-extrabold px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 text-sm sm:text-base border border-amber-300 animate-pulse">
            <Star className="w-5 h-5 fill-black text-black" />
            <span>SÓLO $6,90 USD</span>
          </div>

          {carouselImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-amber-600 text-white hover:text-black p-2.5 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-amber-600 text-white hover:text-black p-2.5 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>


        </div>

        {/* Main Headline right below first photo/carousel */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.2] mb-6 tracking-tight">
          Crea Velas Comestibles Gourmet <br className="hidden sm:inline" />
          y sorprende a tus invitados{' '}
          <span className="block mt-2 font-serif italic text-amber-400 gold-gradient-text">
            con una mesa original e inolvidable.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-neutral-300 text-lg sm:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Aprende la técnica paso a paso para elaborar velas comestibles de queso, chocolate y mantequilla, y domina la tendencia gastronómica más viral del año.
        </p>

        {/* Full width image FoyEusV */}
        <div className="w-full mb-10 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://i.imgur.com/FoyEusV.png" 
            alt="Vela comestible gourmet destacada" 
            className="w-full h-[320px] sm:h-[520px] object-cover hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Ebook Mockup Showcase in Hero */}
        <div className="max-w-md mx-auto mb-12 p-6 bg-gradient-to-b from-neutral-900 to-neutral-950 border border-amber-500/40 rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
          <div className="relative rounded-2xl overflow-hidden shadow-xl mb-4 border border-amber-500/20">
            <img 
              src="https://i.imgur.com/SRWZ3mL.png" 
              alt="Ebook Guía Definitiva de Velas Comestibles" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-center">
            <span className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full">
              📚 Formato Digital PDF · Acceso Inmediato
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://pay.hotmart.com/P107114275H"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold px-8 py-4 rounded-xl shadow-xl shadow-amber-600/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 text-lg cursor-pointer no-underline uppercase tracking-wide"
          >
            <Sparkles className="w-5 h-5 text-black shrink-0" />
            <span>QUIERO MI GUÍA POR SÓLO $6,90 USD</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>
          
          <button
            onClick={onScrollToRecipes}
            className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-amber-500/30 hover:border-amber-500/60 font-medium px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-base cursor-pointer"
          >
            <span>Ver Recetas y Contenido</span>
          </button>
        </div>

        {/* Trust Badges under CTA */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-neutral-400 mb-10">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" /> Acceso inmediato de por vida
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" /> Garantía de satisfacción de 7 días
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" /> Compatible con cualquier nivel
          </span>
        </div>

        {/* Masterclass Warning Callout */}
        <div className="bg-neutral-950/90 border border-amber-500/40 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto shadow-2xl relative text-left">
          <div className="absolute top-0 left-6 -translate-y-1/2 bg-amber-500 text-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Aviso Importante
          </div>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
            Muchos intentan hacer velas comestibles viendo tutoriales sueltos, pero terminan usando ingredientes tóxicos, mechas incorrectas o mezclas que se derriten antes de tiempo. En esta Masterclass aprenderás la técnica profesional y segura.
          </p>
        </div>

      </div>
    </section>
  );
}
