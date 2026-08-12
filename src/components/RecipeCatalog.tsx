import React, { useState } from 'react';
import { RecipeItem } from '../types';
import { Clock, Check, Sparkles, X, ChefHat, Flame, BookOpen } from 'lucide-react';
import gourmetButterImg from '../assets/images/gourmet_butter_candle_1786489150297.jpg';

export default function RecipeCatalog() {
  const [activeTab, setActiveTab] = useState<'todas' | 'salada' | 'dulce'>('todas');
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeItem | null>(null);

  const recipes: RecipeItem[] = [
    // 5 Dulces
    {
      id: 'd1',
      category: 'dulce',
      title: 'Vela de Chocolate Clásica',
      subtitle: 'Para mojar frutillas · Ideal San Valentín / cumpleaños',
      description: 'Una vela irresistible de chocolate cobertura con aceite vegetal para lograr una textura fluida al derretir.',
      prepTime: '20 mins',
      image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&auto=format&fit=crop&q=80',
      highlights: ['Para mojar frutillas y bananas', 'Textura fluida perfecta', '100% comestible'],
      ingredients: [
        '200 g de chocolate cobertura (semi amargo o con leche)',
        '1 cda de aceite vegetal neutro (para que quede más fluido al derretir)',
        '1 mecha comestible encerada',
        'Frutillas, bananas o galletas para acompañar'
      ],
      instructions: [
        'Derretí el chocolate a baño maría o en microondas en intervalos de 20 segundos, revolviendo.',
        'Agregá el aceite y mezclá hasta integrar; esto evita que quede muy dura al enfriar.',
        'Colocá la mecha centrada en el molde, sosteniéndola con un palillo en los bordes.',
        'Volcá el chocolate tibio despacio, sin tapar la mecha.',
        'Llevá a la heladera 1-2 h hasta que esté firme. Cortá la mecha a 1 cm y encendé al servir.'
      ]
    },
    {
      id: 'd2',
      category: 'dulce',
      title: 'Vela de Chocolate Blanco y Frambuesa',
      subtitle: 'Toque ácido y color · Muy fotogénica',
      description: 'Combinación elegante de chocolate blanco cremoso y frambuesas deshidratadas trituradas.',
      prepTime: '25 mins',
      image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&auto=format&fit=crop&q=80',
      highlights: ['Contraste ácido y dulce', 'Visualmente impactante', 'Ideal para postres finos'],
      ingredients: [
        '200 g de chocolate blanco',
        '8-10 frambuesas deshidratadas trituradas',
        '1 mecha comestible'
      ],
      instructions: [
        'Derretí el chocolate blanco a baño maría, con cuidado de que no se corte (fuego bajo).',
        'Incorporá la mitad de las frambuesas trituradas a la mezcla.',
        'Volcá en el molde con la mecha ya colocada.',
        'Espolvoreá el resto de las frambuesas en la superficie antes de que enfríe.',
        'Refrigerá 1-2 h. Servir con bizcochos o frutillas.'
      ]
    },
    {
      id: 'd3',
      category: 'dulce',
      title: 'Vela de Dulce de Leche y Canela',
      subtitle: 'Sabor bien argentino · Para acompañar con manzana o pan dulce',
      description: 'El clásico dulce de leche repostero infusionado con un toque de canela y manteca.',
      prepTime: '25 mins',
      image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&auto=format&fit=crop&q=80',
      highlights: ['Sabor tradicional argentino', 'Consistencia lisa y brillante', 'Ideal con manzana verde'],
      ingredients: [
        '180 g de dulce de leche repostero (espeso)',
        '20 g de manteca',
        '1/2 cdita de canela molida',
        '1 mecha comestible'
      ],
      instructions: [
        'Derretí la manteca a fuego bajo y agregá el dulce de leche, revolviendo constante.',
        'Sumá la canela y mezclá hasta lograr una consistencia lisa y brillante.',
        'Dejá entibiar unos minutos antes de volcar sobre el molde con la mecha.',
        'Refrigerá 1-2 h. Servir con manzana en gajos o galletitas de agua.'
      ]
    },
    {
      id: 'd4',
      category: 'dulce',
      title: 'Vela de Miel y Manteca de Maní',
      subtitle: 'Dulce-salado · Ideal para mojar pretzels o pan',
      description: 'Mezcla cremosa y reconfortante de manteca de maní con miel de abeja pura.',
      prepTime: '20 mins',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&auto=format&fit=crop&q=80',
      highlights: ['Equilibrio dulce y salado', 'Textura cremosa inigualable', 'Acompañante perfecto para pretzels'],
      ingredients: [
        '150 g de manteca de maní',
        '3 cdas de miel',
        '1 mecha comestible'
      ],
      instructions: [
        'Calentá la manteca de maní a baño maría hasta que esté bien fluida.',
        'Agregá la miel y mezclá hasta integrar por completo.',
        'Volcá en el molde con la mecha ya colocada, con cuidado.',
        'Refrigerá 1-2 h hasta firmeza. Ideal acompañada con pretzels o pan tostado.'
      ]
    },
    {
      id: 'd5',
      category: 'dulce',
      title: 'Vela de Chocolate y Menta',
      subtitle: 'Fresca y elegante · Perfecta para después de cenar',
      description: 'Chocolate semi amargo con notas refrescantes de menta natural para el cierre de una gran cena.',
      prepTime: '25 mins',
      image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&auto=format&fit=crop&q=80',
      highlights: ['Toque fresco sofisticado', 'Ideal post-cena', 'Chocolate de alta calidad'],
      ingredients: [
        '200 g de chocolate semi amargo',
        '4-5 hojas de menta fresca picadas finas',
        'Unas gotas de esencia de menta (opcional)',
        '1 mecha comestible'
      ],
      instructions: [
        'Derretí el chocolate a baño maría.',
        'Incorporá la menta picada y, si querés un sabor más marcado, unas gotas de esencia.',
        'Colá si preferís una superficie más lisa, o dejá los trocitos de menta visibles.',
        'Volcá en el molde con la mecha, refrigerá 1-2 h y serví con bizcochos secos.'
      ]
    },
    // 5 Saladas
    {
      id: 's1',
      category: 'salada',
      title: 'Vela de Mantequilla al Ajo y Romero',
      subtitle: 'La clásica viral · Ideal con pan tostado',
      description: 'La estrella de TikTok e Instagram. Mantequilla infusionada con ajo y romero fresco sin chisporroteos.',
      prepTime: '25 mins',
      image: gourmetButterImg,
      highlights: ['La receta viral número 1', 'Aromática y envolvente', 'Perfecta con pan de campo'],
      ingredients: [
        '250 g de mantequilla',
        '2 dientes de ajo picados finos',
        '1 ramita de romero fresco picado',
        '1 mecha comestible encerada'
      ],
      instructions: [
        'Derretí la mantequilla a fuego bajo en una sartén, sin que hierva.',
        'Agregá el ajo y el romero, cociná 2-3 minutos hasta que aromatice.',
        'Colá la mezcla para retirar los trocitos de ajo y romero (esto evita chisporroteo al arder).',
        'Dejá entibiar y volcá sobre el molde con la mecha ya colocada.',
        'Refrigerá 1-2 h. Servir con pan tostado o grisines.'
      ]
    },
    {
      id: 's2',
      category: 'salada',
      title: 'Vela de Mantequilla y Pimentón Ahumado',
      subtitle: 'Color rojizo llamativo · Toque ahumado',
      description: 'Mantequilla sedosa teñida con pimentón ahumado y una pizca de sal fina.',
      prepTime: '20 mins',
      image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&auto=format&fit=crop&q=80',
      highlights: ['Color rojizo llamativo', 'Sabor ahumado irresistible', 'Fácil de preparar'],
      ingredients: [
        '250 g de mantequilla',
        '1 cdita de pimentón ahumado',
        'Pizca de sal fina',
        '1 mecha comestible'
      ],
      instructions: [
        'Derretí la mantequilla a fuego bajo.',
        'Retirá del fuego y agregá el pimentón y la sal, mezclando bien para que tiña de forma pareja.',
        'Dejá entibiar y volcá en el molde con la mecha.',
        'Refrigerá 1-2 h. Ideal con pan de campo o tostas.'
      ]
    },
    {
      id: 's3',
      category: 'salada',
      title: 'Vela de Mantequilla, Finas Hierbas y Limón',
      subtitle: 'Fresca y liviana · Combina con pescados o vegetales',
      description: 'Infusión cítrica y herbal con ralladura de limón y hierbas frescas seleccionadas.',
      prepTime: '20 mins',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80',
      highlights: ['Notas cítricas refrescantes', 'Ideal para pescados y mariscos', 'Aromática'],
      ingredients: [
        '250 g de mantequilla',
        '1 cda de finas hierbas (perejil, cebollín, eneldo)',
        'Ralladura de 1/2 limón',
        '1 mecha comestible'
      ],
      instructions: [
        'Derretí la mantequilla a fuego bajo, sin dejar que hierva.',
        'Fuera del fuego, incorporá las hierbas picadas y la ralladura de limón.',
        'Dejá entibiar y volcá en el molde con la mecha ya colocada.',
        'Refrigerá 1-2 h. Servir con pan tostado o vegetales grillados.'
      ]
    },
    {
      id: 's4',
      category: 'salada',
      title: 'Vela de Queso Crema y Provenzal',
      subtitle: 'Cremosa y untable · Para picadas',
      description: 'Queso crema fundido con manteca y mezcla provenzal de ajo y perejil deshidratado.',
      prepTime: '20 mins',
      image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&auto=format&fit=crop&q=80',
      highlights: ['Extra cremosa', 'Ideal para picadas con amigos', 'Textura untable superior'],
      ingredients: [
        '200 g de queso crema',
        '50 g de manteca',
        '1 cdita de mezcla provenzal (ajo y perejil deshidratado)',
        '1 mecha comestible'
      ],
      instructions: [
        'Derretí la manteca a fuego bajo e incorporá el queso crema, revolviendo hasta que se integre.',
        'Sumá la provenzal y mezclá bien.',
        'Volcá tibio en el molde con la mecha ya colocada.',
        'Refrigerá 1-2 h. Ideal con grisines o tostadas.'
      ]
    },
    {
      id: 's5',
      category: 'salada',
      title: 'Vela de Manteca de Cerdo y Especias',
      subtitle: 'Sabor intenso · Para amantes de sabores fuertes',
      description: 'Preparación robusta con manteca de cerdo, comino y pimentón dulce.',
      prepTime: '25 mins',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80',
      highlights: ['Sabor profundo e intenso', 'Tradición culinaria', 'Excelente con tortillas caseras'],
      ingredients: [
        '200 g de manteca de cerdo (o grasa vegetal sólida)',
        '1/2 cdita de comino',
        '1/2 cdita de pimentón dulce',
        '1 mecha comestible'
      ],
      instructions: [
        'Derretí la manteca a fuego bajo.',
        'Incorporá las especias y mezclá bien hasta integrar el color y aroma de forma pareja.',
        'Dejá entibiar y volcá en el molde con la mecha ya colocada.',
        'Refrigerá 1-2 h. Servir con pan casero o tortillas.'
      ]
    }
  ];

  const filteredRecipes = activeTab === 'todas' 
    ? recipes 
    : recipes.filter(r => r.category === activeTab);

  return (
    <section id="recetas" className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Catálogo Oficial de Recetas (10 en total)
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal mt-4 mb-4 text-white">
            Las 10 Recetas Exclusivas del PDF
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Hacé clic en cualquier receta para ver la lista de ingredientes exacta y el paso a paso detallado de la guía.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            <button
              onClick={() => setActiveTab('todas')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'todas'
                  ? 'bg-amber-500 text-black font-semibold shadow-lg shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              Todas las Recetas (10)
            </button>
            <button
              onClick={() => setActiveTab('salada')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'salada'
                  ? 'bg-amber-500 text-black font-semibold shadow-lg shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              🧀 Saladas (5)
            </button>
            <button
              onClick={() => setActiveTab('dulce')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'dulce'
                  ? 'bg-amber-500 text-black font-semibold shadow-lg shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              🍫 Dulces (5)
            </button>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => setSelectedRecipe(recipe)}
              className="bg-neutral-900/80 border border-amber-900/30 rounded-2xl overflow-hidden hover:border-amber-500/60 transition-all duration-300 flex flex-col group shadow-xl cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow ${
                    recipe.category === 'salada' ? 'bg-emerald-500 text-black' : 'bg-amber-400 text-black'
                  }`}>
                    {recipe.category === 'salada' ? 'Salada' : 'Dulce'}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 text-xs text-amber-300 font-medium border border-amber-500/30">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{recipe.prepTime}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-amber-400/90 font-medium mb-1 italic">{recipe.subtitle}</p>
                  <h3 className="font-serif text-xl font-medium text-amber-100 mb-2 group-hover:text-amber-400 transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                    {recipe.description}
                  </p>
                </div>

                <div className="space-y-2 border-t border-neutral-800 pt-4">
                  {recipe.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                  <div className="pt-3 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:underline">
                    <span>Ver ingredientes y receta completa</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recipe Modal */}
        {selectedRecipe && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-neutral-900 border border-amber-500/40 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-neutral-200">
              <button
                onClick={() => setSelectedRecipe(null)}
                className="absolute top-4 right-4 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 p-2 rounded-full transition-colors z-10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 sm:h-72">
                <img
                  src={selectedRecipe.image}
                  alt={selectedRecipe.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent flex items-end p-6">
                  <div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${
                      selectedRecipe.category === 'salada' ? 'bg-emerald-500 text-black' : 'bg-amber-400 text-black'
                    }`}>
                      {selectedRecipe.category === 'salada' ? 'Receta Salada' : 'Receta Dulce'}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white mt-2">
                      {selectedRecipe.title}
                    </h2>
                    <p className="text-amber-300 text-sm italic mt-1">{selectedRecipe.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="font-serif text-lg font-medium text-amber-400 mb-3 flex items-center gap-2">
                    <ChefHat className="w-5 h-5" /> Ingredientes
                  </h4>
                  <ul className="space-y-2 bg-neutral-950 p-4 rounded-xl border border-neutral-800">
                    {selectedRecipe.ingredients.map((ing, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                        <span>{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-serif text-lg font-medium text-amber-400 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" /> Preparación Paso a Paso
                  </h4>
                  <ol className="space-y-3 bg-neutral-950 p-4 rounded-xl border border-neutral-800">
                    {selectedRecipe.instructions.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold shrink-0 mt-0.5 border border-amber-500/30">
                          {idx + 1}
                        </span>
                        <span className="pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex justify-end">
                  <button
                    onClick={() => setSelectedRecipe(null)}
                    className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    Cerrar Receta
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
