import React from 'react';
import { ArrowRight, Smartphone, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Darkened solar/industrial background */}
        <img 
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop" 
          alt="Solar panels and industrial background" 
          className="w-full h-full object-cover opacity-50"
        />
        {/* Deep gradient for dark mode depth - adjusted for higher image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          
          {/* App Notification Banner - Responsive Update */}
          <a 
            href="https://revizone.cz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-start sm:items-center gap-3 bg-primary-card/90 border border-border rounded-2xl md:rounded-full pl-2 pr-4 md:pr-6 py-2.5 md:py-2 mb-8 backdrop-blur-md hover:bg-primary-light transition-all cursor-pointer group hover:border-accent/50 max-w-full"
          >
            <div className="bg-accent rounded-full p-1.5 animate-pulse shrink-0 mt-0.5 sm:mt-0">
              <Smartphone size={16} className="text-text-dark" />
            </div>
            <div className="text-text-main text-xs sm:text-sm font-medium leading-tight sm:leading-normal">
              Připravujeme pro Vás novou aplikaci. 
              <span className="text-accent group-hover:underline block sm:inline sm:ml-1 mt-1 sm:mt-0 font-bold sm:font-medium">
                Pro více informací klikněte
              </span>
            </div>
          </a>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            RSON <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">
              VIZE I REVIZE ELEKTRO
            </span>
          </h1>

          <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed max-w-3xl border-l-4 border-accent pl-6 bg-primary/40 backdrop-blur-sm p-4 rounded-r-lg">
            Elektroinstalace a Revize pro: domy, byty, průmyslové haly, SVJ, hotely, výrobní haly, školy, školky, kamenné prodejny, fotovoltaické elektrárny, hromosvody, spotřebiče a jiné...
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-text-dark px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-[0_0_20px_rgba(244,176,0,0.2)] hover:shadow-[0_0_30px_rgba(244,176,0,0.4)] border border-transparent"
            >
              Mám zájem o služby
              <ArrowRight size={20} />
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center gap-2 bg-primary-card/80 hover:bg-primary-light text-white border border-border hover:border-white/20 px-8 py-4 rounded-lg font-semibold text-lg transition-all backdrop-blur-sm"
            >
              Naše specializace
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 border-t border-border">
             <div className="flex items-start gap-3 bg-primary/30 backdrop-blur-sm p-3 rounded-lg">
                <CheckCircle2 className="text-accent mt-1 shrink-0" size={20} />
                <span className="text-text-muted text-sm">Přípojky: hlavní a podružné rozvaděče, rozvodné skříně</span>
              </div>
              <div className="flex items-start gap-3 bg-primary/30 backdrop-blur-sm p-3 rounded-lg">
                <CheckCircle2 className="text-accent mt-1 shrink-0" size={20} />
                <span className="text-text-muted text-sm">Vedení projektové dokumentace a znalecké posudky</span>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;