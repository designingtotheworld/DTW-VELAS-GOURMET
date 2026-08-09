import React, { useState } from 'react';
import { Check, ShieldCheck, Lock, CreditCard, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CheckoutBlock() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<'card' | 'paypal'>('card');

  const handleCheckout = (method: 'card' | 'paypal') => {
    setIsSuccess(true);
  };

  const features = [
    '23 recetas paso a paso',
    'Guía para tu primera vela perfecta',
    'Lista de compras lista para usar',
    'Guía "Momento WOW"',
    'Recetas para ocasiones especiales',
    'Acceso de por vida'
  ];

  return (
    <section id="checkout" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#12141c] text-neutral-100 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-white tracking-tight">
            Acceso Instantáneo
          </h2>
        </div>

        {isSuccess ? (
          <div className="bg-white text-neutral-900 rounded-3xl p-8 sm:p-12 text-center shadow-2xl animate-fade-in border border-amber-500/30">
            <div className="w-20 h-20 bg-amber-100 border border-amber-300 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-neutral-900 mb-4">
              ¡Compra Exitosa!
            </h3>
            <p className="text-neutral-600 text-base mb-6 leading-relaxed">
              Tu acceso a <strong className="text-amber-700">Velas Comestibles Gourmet</strong> ha sido procesado correctamente. Hemos enviado tus credenciales de acceso a tu correo electrónico.
            </p>
            <div className="bg-neutral-100 p-4 rounded-xl border border-neutral-200 text-xs text-neutral-500 mb-8 font-mono">
              ID de Transacción: #VCG-{Math.floor(100000 + Math.random() * 900000)} • Acceso Vitalicio Activado
            </div>
            <button
              onClick={() => setIsSuccess(false)}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-3 rounded-xl transition-all cursor-pointer shadow-lg"
            >
              Volver
            </button>
          </div>
        ) : (
          /* Main Card */
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
                <div className="text-neutral-400 text-base sm:text-lg font-medium mb-1 line-through">
                  Normalmente $38
                </div>
                <div className="flex items-center justify-center gap-2 font-serif font-bold text-neutral-950 mb-2">
                  <span className="text-4xl sm:text-5xl text-amber-700">US$</span>
                  <span className="text-6xl sm:text-7xl tracking-tighter">15</span>
                </div>
                <p className="text-neutral-500 text-sm font-medium">
                  Pago único • Acceso de por vida
                </p>
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

              {/* Payment logos row */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-4 mb-8 border-y border-neutral-100 opacity-90">
                <span className="px-2 py-1 bg-neutral-50 border border-neutral-200 rounded font-bold text-[10px] text-neutral-700 tracking-wider">Mastercard</span>
                <span className="px-2 py-1 bg-neutral-50 border border-neutral-200 rounded font-extrabold text-[10px] text-blue-800 tracking-wider">VISA</span>
                <span className="px-2 py-1 bg-neutral-50 border border-neutral-200 rounded font-bold text-[10px] text-orange-700 tracking-wider">DISCOVER</span>
                <span className="px-2 py-1 bg-neutral-50 border border-neutral-200 rounded font-bold text-[10px] text-blue-900 tracking-wider">AMEX</span>
                <span className="px-2 py-1 bg-neutral-50 border border-neutral-200 rounded font-bold text-[10px] text-black tracking-wider"> Pay</span>
                <span className="px-2 py-1 bg-neutral-50 border border-neutral-200 rounded font-bold text-[10px] text-neutral-800 tracking-wider">G Pay</span>
                <span className="px-2 py-1 bg-neutral-50 border border-neutral-200 rounded font-bold text-[10px] text-indigo-700 tracking-wider">stripe</span>
                <span className="px-2 py-1 bg-neutral-50 border border-neutral-200 rounded font-bold text-[10px] text-blue-600 tracking-wider">PayPal</span>
              </div>

              {/* Botones de Pago */}
              <div className="space-y-4 max-w-lg mx-auto">
                <button
                  onClick={() => handleCheckout('card')}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-amber-600/20 transition-all flex items-center justify-center gap-3 text-base cursor-pointer tracking-wide uppercase transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>PAGAR SEGURO CON TARJETA</span>
                </button>

                <button
                  onClick={() => handleCheckout('paypal')}
                  className="w-full bg-white hover:bg-neutral-50 text-neutral-900 border-2 border-amber-600 font-bold py-4 px-6 rounded-2xl shadow-sm transition-all flex items-center justify-center gap-3 text-base cursor-pointer tracking-wide uppercase transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span className="text-blue-700 font-extrabold text-lg">P</span>
                  <span>PAGAR CON PAYPAL</span>
                </button>
              </div>

            </div>
          </div>
        )}

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
