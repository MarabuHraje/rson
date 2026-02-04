import React from 'react';
import { Battery, Factory, FileCheck, Banknote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-primary overflow-hidden border-t border-border relative">
      {/* Abstract bg element */}
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content - Battery Storage & SVR */}
          <div className="lg:w-7/12">
            <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">Speciální řešení</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Bateriové uložiště a SVR <br/>
              <span className="text-text-muted text-2xl">pro firmy a obce</span>
            </h3>
            
            <p className="text-text-main text-lg mb-8 leading-relaxed">
              Zajišťujeme kompletní dodání a instalaci bateriového uložiště a služeb výkonové rovnováhy (SVR). 
              Vyhodnotíme ekonomickou situaci, vypracujeme návrh financování a zajistíme veškeré dokumenty.
            </p>

            <div className="bg-primary-light border border-border rounded-xl p-8 mb-8">
              <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                <FileCheck className="text-accent" />
                Vstupní požadavky pro vyhodnocení místa
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary border border-border flex items-center justify-center text-accent text-xs font-bold mt-0.5">1</div>
                  <div>
                    <span className="text-white font-medium block">Adresa umístění</span>
                    <span className="text-text-muted text-sm">Přesná lokalizace objektu či pozemku.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary border border-border flex items-center justify-center text-accent text-xs font-bold mt-0.5">2</div>
                  <div>
                    <span className="text-white font-medium block">Velikost trafostanice (kVA)</span>
                    <span className="text-text-muted text-sm">Technické parametry připojení.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary border border-border flex items-center justify-center text-accent text-xs font-bold mt-0.5">3</div>
                  <div>
                    <span className="text-white font-medium block">SOP - Smlouva o připojení</span>
                    <span className="text-text-muted text-sm">Platná smlouva s distribuční společností.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary border border-border flex items-center justify-center text-accent text-xs font-bold mt-0.5">4</div>
                  <div>
                    <span className="text-white font-medium block">Vyúčtování energií</span>
                    <span className="text-text-muted text-sm">Čtvrthodinová maxima (excel bývá přílohou vyúčtování).</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Side Cards */}
          <div className="lg:w-5/12 space-y-6">
            <div className="bg-primary-card p-8 rounded-2xl border border-border shadow-xl">
              <Battery className="w-12 h-12 text-accent mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Návrh bateriového úložiště</h4>
              <p className="text-text-muted text-sm">
                Navrhneme optimální kapacitu a technologii pro vaše potřeby s ohledem na návratnost a efektivitu.
              </p>
            </div>

            <div className="bg-primary-card p-8 rounded-2xl border border-border shadow-xl">
              <Banknote className="w-12 h-12 text-accent mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Financování a Ekonomika</h4>
              <p className="text-text-muted text-sm">
                Vyhodnotíme ekonomickou situaci a vypracujeme kompletní návrh financování projektu.
              </p>
            </div>

            <div className="bg-primary-card p-8 rounded-2xl border border-border shadow-xl">
              <Factory className="w-12 h-12 text-accent mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Administrativa na klíč</h4>
              <p className="text-text-muted text-sm">
                Zajistíme veškeré dokumenty k zahájení SVR, které vyřídíme kompletně za Vás.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;