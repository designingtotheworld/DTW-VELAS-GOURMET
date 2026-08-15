import React from 'react';
import { Check, ShieldCheck, Lock, CreditCard, Sparkles, ArrowRight } from 'lucide-react';

export default function CheckoutBlock() {
  const features = [
    'Acceso a las 23 recetas paso a paso',
    'Set de Etiquetas Gourmet de Diseño (Listas para imprimir)',
    'Guía de Maridajes y Combinaciones',
    'Calculadora de Precios y Costos',
    'Guía de Conservación y Almacenamiento',
    'Acceso de por vida'
  ];

  return (
    <section id="checkout" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#12141c] text-neutral-100 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Título y Mockup del Ebook */}
        <div className="text-center mb-10">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block mb-4">
            OFERTA ESPECIAL DE LANZAMIENTO
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white tracking-tight mb-6">
            Acceso Instantáneo
          </h2>
          <div className="max-w-md mx-auto mb-8 transform hover:scale-105 transition-transform duration-500">
            <img 
              src="https://i.imgur.com/SRWZ3mL.png" 
              alt="Ebook Velas Comestibles Mockup" 
              className="w-full h-auto rounded-2xl shadow-2xl border-2 border-amber-500/30 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white text-neutral-900 rounded-3xl shadow-2xl overflow-hidden border border-amber-900/10">
          
          {/* Caja superior naranja */}
          <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white py-4 px-6 text-center font-bold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 shadow-inner">
            <span>🔥</span>
            <span>60% DE DESCUENTO — SOLO HOY</span>
            <span>🔥</span>
          </div>

          <div className="p-8 sm:p-12">
            
            {/* Precios */}
            <div className="text-center mb-8">
              <div className="inline-block bg-neutral-900 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3 border border-neutral-800">
                ANTES <span className="line-through text-neutral-300">$25 USD</span>
              </div>
              <div className="text-amber-700 text-xs sm:text-sm uppercase tracking-widest font-bold mb-2">
                OFERTA DE LANZAMIENTO
              </div>
              <div className="flex items-center justify-center gap-1 font-serif font-bold text-neutral-950 mb-3">
                <span className="text-4xl sm:text-5xl text-amber-700 self-start mt-2">US$</span>
                <span className="text-6xl sm:text-7xl tracking-tighter">6</span>
                <span className="text-4xl sm:text-5xl text-neutral-950 self-start mt-2">,90</span>
                <span className="text-xl text-neutral-600 self-end mb-3 ml-1">USD</span>
              </div>
              <p className="text-neutral-600 text-xs sm:text-sm max-w-lg mx-auto font-medium leading-relaxed bg-amber-50/80 border border-amber-200/80 p-3.5 rounded-xl mb-3">
                (El sistema convierte el monto automáticamente a tu moneda local al pagar: Pesos Argentinos, Pesos Mexicanos, Pesos Colombianos, Soles, Euros, etc.)
              </p>
              
              {/* ATENCIÓN ARGENTINA */}
              <div className="max-w-lg mx-auto bg-blue-50/90 border border-blue-200 text-blue-900 p-3.5 rounded-xl text-xs sm:text-sm font-medium flex items-start gap-2.5 text-left shadow-sm">
                <span className="text-lg shrink-0">🇦🇷</span>
                <div>
                  <strong className="font-bold text-blue-950 block mb-0.5">ATENCIÓN ARGENTINA:</strong>
                  <span>Al presionar el botón de compra, Hotmart convertirá el valor automáticamente a Pesos Argentinos (ARS) para que puedas pagar en pesos con tus tarjetas locales.</span>
                </div>
              </div>
            </div>

            {/* Lista de características */}
            <div className="max-w-md mx-auto mb-10 space-y-3.5">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3.5 text-neutral-800 text-base font-normal">
                  <div className="w-6 h-6 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>



            {/* Botones de Pago a Hotmart */}
            <div className="space-y-4 max-w-lg mx-auto">
              <a
                href="https://pay.hotmart.com/P107114275H"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-amber-600/20 transition-all flex items-center justify-center gap-3 text-base sm:text-lg cursor-pointer tracking-wide uppercase transform hover:-translate-y-0.5 active:translate-y-0 no-underline text-center"
              >
                <Sparkles className="w-5 h-5 shrink-0" />
                <span>QUIERO MI GUÍA DE VELAS COMESTIBLES</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>
            </div>

            <div className="mt-6 space-y-2 text-center text-neutral-600 text-xs sm:text-sm font-medium">
              <p className="flex items-center justify-center gap-2">
                <span>🔒</span>
                <span>Pago 100% seguro y procesado en tu moneda local a través de Hotmart.</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span>🌎</span>
                <span>Acceso Internacional: Puedes abonar con tarjetas de crédito, débito y los métodos de pago locales de tu país.</span>
              </p>
            </div>

          </div>
        </div>

        {/* Seguridad Pie */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-neutral-400 text-xs font-medium">
          <div className="flex items-center gap-2 bg-neutral-900/60 border border-neutral-800 px-4 py-2 rounded-xl">
            <div className="w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <span>Sitio Seguro (Google Safe Site)</span>
          </div>

          <div className="flex items-center gap-2 bg-neutral-900/60 border border-neutral-800 px-4 py-2 rounded-xl">
            <div className="w-5 h-5 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400">
              <Lock className="w-3.5 h-3.5" />
            </div>
            <span>Compra Protegida & Encriptada 256-bit</span>
          </div>
        </div>

      </div>
    </section>
  );
}
