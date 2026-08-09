import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: '1',
      quote: '"Hice estas velas para una cena con amigos... la reacción fue increíble. Todos me preguntaron cómo las hice."',
      name: 'Valeria Gómez',
      location: 'Miami, FL',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      rating: 5,
    },
    {
      id: '2',
      quote: '"Pensé que sería difícil, pero todo el proceso fue rapidísimo. Se veían hermosas en la mesa y sabían aún mejor."',
      name: 'Sofía Rossi',
      location: 'Buenos Aires, ARG',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
      rating: 5,
    },
    {
      id: '3',
      quote: '"Las preparé por curiosidad para sorprender a mi familia y ahora todos me encargan para sus cumpleaños y reuniones."',
      name: 'Camila Restrepo',
      location: 'Bogotá, COL',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Experiencias reales de quienes ya transformaron sus reuniones con las Velas Comestibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white text-neutral-900 rounded-xl p-8 shadow-xl flex flex-col justify-between border border-neutral-200 transition-all duration-300 hover:shadow-2xl hover:border-amber-400/50"
            >
              <div>
                <div className="flex items-center gap-1 mb-6 text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="italic text-neutral-700 text-base leading-relaxed mb-8">
                  {review.quote}
                </p>
              </div>

              <div>
                <div className="border-t border-neutral-200 pt-4 flex items-center gap-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-neutral-900 text-base">
                      {review.name}
                    </h4>
                    <p className="text-xs text-neutral-500 font-medium">
                      {review.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
