/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import TopBanner from './components/TopBanner';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import RecipeShowcase from './components/RecipeShowcase';
import HowItWorksSteps from './components/HowItWorksSteps';
import Bonuses from './components/Bonuses';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CheckoutBlock from './components/CheckoutBlock';

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-neutral-100 font-sans selection:bg-amber-500 selection:text-black">
      <TopBanner />
      <Hero
        onScrollToPricing={() => scrollToSection('checkout')}
        onScrollToRecipes={() => scrollToSection('recetas')}
      />
      <Benefits onScrollToPricing={() => scrollToSection('checkout')} />
      <RecipeShowcase onScrollToPricing={() => scrollToSection('checkout')} />
      <HowItWorksSteps />
      <Bonuses onScrollToPricing={() => scrollToSection('checkout')} />
      <Testimonials onScrollToPricing={() => scrollToSection('checkout')} />
      <FAQ />
      <CheckoutBlock />
    </div>
  );
}


