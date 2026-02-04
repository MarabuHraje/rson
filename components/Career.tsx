import React from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

const Career: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-primary min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Kariéra v RSON</h1>
          <p className="text-xl text-text-muted mb-12 border-l-4 border-accent pl-6">
            Hledáme parťáky do týmu. Rosteme a potřebujeme šikovné lidi, kteří rozumí elektrice a nebojí se práce.
          </p>

          <div className="grid gap-8">
            {/* Job Position 1 */}
            <div className="bg-primary-card border border-border rounded-xl p-8 hover:border-accent/30 transition-all group">
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">Revizní technik elektro (E2A)</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-text-muted">
                    <span className="flex items-center gap-1"><MapPin size={16} /> Praha a Středočeský kraj</span>
                    <span className="flex items-center gap-1"><Clock size={16} /> Plný úvazek / IČO</span>
                    <span className="flex items-center gap-1"><Briefcase size={16} /> Nástup možný ihned</span>
                  </div>
                </div>
                <span className="bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-bold border border-accent/20">
                  50.000 - 80.000 Kč
                </span>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-text-main">
                  Provádění výchozích a pravidelných revizí elektroinstalací, hromosvodů a spotřebičů. Práce v terénu i administrativa.
                </p>
                <ul className="grid md:grid-cols-2 gap-2">
                   <li className="flex items-center gap-2 text-text-muted text-sm"><CheckCircle2 size={16} className="text-accent"/> Platné osvědčení TIČR</li>
                   <li className="flex items-center gap-2 text-text-muted text-sm"><CheckCircle2 size={16} className="text-accent"/> Řidičský průkaz sk. B</li>
                   <li className="flex items-center gap-2 text-text-muted text-sm"><CheckCircle2 size={16} className="text-accent"/> Samostatnost a pečlivost</li>
                   <li className="flex items-center gap-2 text-text-muted text-sm"><CheckCircle2 size={16} className="text-accent"/> Praxe v oboru min. 2 roky</li>
                </ul>
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 text-white font-bold hover:text-accent transition-colors">
                Mám zájem o tuto pozici <ArrowRight size={18} />
              </a>
            </div>

            {/* Job Position 2 */}
            <div className="bg-primary-card border border-border rounded-xl p-8 hover:border-accent/30 transition-all group">
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">Elektrikář - Montér FVE</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-text-muted">
                    <span className="flex items-center gap-1"><MapPin size={16} /> Celá ČR</span>
                    <span className="flex items-center gap-1"><Clock size={16} /> HPP / IČO</span>
                    <span className="flex items-center gap-1"><Briefcase size={16} /> Nástup dohodou</span>
                  </div>
                </div>
                <span className="bg-primary-light text-text-muted px-4 py-1 rounded-full text-sm font-bold border border-border">
                  40.000 - 60.000 Kč
                </span>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-text-main">
                  Montáže fotovoltaických elektráren, zapojování střídačů a bateriových systémů. Práce ve výškách.
                </p>
                <ul className="grid md:grid-cols-2 gap-2">
                   <li className="flex items-center gap-2 text-text-muted text-sm"><CheckCircle2 size={16} className="text-accent"/> Vyhláška 50/78 Sb. (NV 194/2022 Sb.)</li>
                   <li className="flex items-center gap-2 text-text-muted text-sm"><CheckCircle2 size={16} className="text-accent"/> Ochota cestovat</li>
                   <li className="flex items-center gap-2 text-text-muted text-sm"><CheckCircle2 size={16} className="text-accent"/> Fyzická zdatnost</li>
                </ul>
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 text-white font-bold hover:text-accent transition-colors">
                Mám zájem o tuto pozici <ArrowRight size={18} />
              </a>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-primary-light border border-border rounded-xl text-center">
            <h4 className="text-white font-bold text-lg mb-2">Nenašli jste svou pozici?</h4>
            <p className="text-text-muted mb-4">Pošlete nám svůj životopis a my se vám ozveme, až se něco uvolní.</p>
            <a href="mailto:kariera@rson.cz" className="text-accent hover:text-accent-hover font-bold">kariera@rson.cz</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;