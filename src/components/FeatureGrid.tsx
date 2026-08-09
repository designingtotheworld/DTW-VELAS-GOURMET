import React from 'react';
import { Sparkles, CheckCircle2, Clock, ShieldCheck, Flame, BookOpen, Utensils } from 'lucide-react';

export default function FeatureGrid() {
  const lightCards = [
    {
      title: "Creative recipes people don't expect",
      description: "Sweet and savoury combinations served in an elegant, surprising way.",
      icon: Sparkles
    },
    {
      title: "Simple ingredients",
      description: "No hard-to-find ingredients or expensive equipment.",
      icon: Utensils
    },
    {
      title: "Beginner-friendly",
      description: "A clear, visual method that's easy to follow.",
      icon: BookOpen
    },
    {
      title: "Ready in around 30 minutes",
      description: "Quick to make and perfect for any occasion.",
      icon: Clock
    },
    {
      title: 'A genuine "wow" moment',
      description: "The little detail guests keep talking about long after dinner.",
      icon: Flame
    },
    {
      title: "Learn it once, use it whenever you like",
      description: "Lifetime access, so you can come back to the materials whenever you need them.",
      icon: ShieldCheck
    }
  ];

  const savouryRecipes = [
    {
      title: "Sun-Dried Tomato & Basil",
      description: "A rich colour that looks beautiful on the table as the candle starts to melt.",
      image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&auto=format&fit=crop&q=80"
    },
    {
      title: "Herb Butter",
      description: "A classic made more elegant and aromatic with simple ingredients.",
      image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=600&auto=format&fit=crop&q=80"
    },
    {
      title: "Cream Cheese with Herbs & Nuts",
      description: "Creamy, savoury and finished with a crunchy, nutty touch.",
      image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&auto=format&fit=crop&q=80"
    }
  ];

  const sweetRecipes = [
    {
      title: "Brown Butter & Honey",
      description: "Classic brown butter with a rich, nutty aroma and a touch of honey.",
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&auto=format&fit=crop&q=80"
    },
    {
      title: "Creamy Chocolate with Sea Salt",
      description: "A dessert-style fondue effect that truly surprises at the table.",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&auto=format&fit=crop&q=80"
    },
    {
      title: "Tropical Coconut Delight",
      description: "An exotic aroma with a smooth, creamy coconut flavour.",
      image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=600&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* --- TARJETAS SUPERIORES (Fondo claro, 6 tarjetas en grid 3x2) --- */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-amber-600 font-semibold text-xs uppercase tracking-widest bg-amber-100 px-3.5 py-1 rounded-full border border-amber-200">
              ¿Por qué elegir esta Masterclass?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-neutral-900 mt-3 mb-2">
              Todo lo que necesitas saber
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lightCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div 
                  key={idx}
                  className="bg-neutral-100 text-neutral-900 border border-amber-300/60 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between group hover:border-amber-500"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-700 mb-5 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-neutral-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        {/* --- SECCIÓN PRINCIPAL (Fondo oscuro) --- */}
        <div className="pt-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20">
              Recetario Destacado
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white mt-4 mb-3">
              23 step-by-step recipes — genuinely easy to make
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              Perfect for dinner parties, special occasions and thoughtful gifts.
            </p>
          </div>

          {/* [CATEGORÍA 1: SALADOS] SAVOURY EXAMPLES */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="bg-amber-500 text-black font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow">
                SAVOURY EXAMPLES
              </span>
              <div className="h-px bg-amber-900/40 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {savouryRecipes.map((recipe, idx) => (
                <div 
                  key={idx}
                  className="bg-neutral-900/95 border border-amber-900/30 rounded-2xl overflow-hidden shadow-xl hover:border-amber-500/50 transition-all group flex flex-col"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs text-amber-300 font-medium border border-amber-500/30">
                      Salado
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-medium text-amber-100 mb-2 group-hover:text-amber-400 transition-colors">
                        {recipe.title}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {recipe.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* [CATEGORÍA 2: DULCES] SWEET EXAMPLES */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="bg-amber-500 text-black font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow">
                SWEET EXAMPLES
              </span>
              <div className="h-px bg-amber-900/40 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sweetRecipes.map((recipe, idx) => (
                <div 
                  key={idx}
                  className="bg-neutral-900/95 border border-amber-900/30 rounded-2xl overflow-hidden shadow-xl hover:border-amber-500/50 transition-all group flex flex-col"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs text-amber-300 font-medium border border-amber-500/30">
                      Dulce
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-medium text-amber-100 mb-2 group-hover:text-amber-400 transition-colors">
                        {recipe.title}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {recipe.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
